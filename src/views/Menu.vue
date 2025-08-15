<template>
  <div>
    <!-- Hero Section -->
    <section class="menu-hero">
      <v-container>
        <div class="text-center text-white">
          <h1 class="display-font text-h2 font-weight-bold mb-4">Our Menu</h1>
          <p class="text-h5">Authentic Indian flavors, made fresh daily</p>
        </div>
      </v-container>
    </section>

    <!-- Days Selector -->
    <section class="days-selector-section">
      <v-container>
        <div class="text-center mb-6">
          <h2 class="section-title">Daily Specials</h2>
          <p class="section-subtitle">Select a day to see what's available</p>
        </div>
        
        <v-card class="days-selector-card" elevation="4" rounded="xl">
          <v-card-text class="pa-4 pa-sm-6">
            <div class="days-grid">
              <v-btn
                v-for="day in availableDays"
                :key="day.value"
                :color="selectedDay === day.value ? 'primary' : 'grey-lighten-3'"
                :variant="selectedDay === day.value ? 'elevated' : 'outlined'"
                size="large"
                class="day-btn"
                @click="selectDay(day.value)"
              >
                <v-icon left class="d-none d-sm-block">{{ day.icon }}</v-icon>
                <span class="day-label">{{ day.label }}</span>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </section>

    <!-- Menu Categories -->
    <section class="menu-categories-section">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="section-title">{{ getSelectedDayLabel() }} Menu</h2>
          <p class="section-subtitle">Fresh and delicious Indian cuisine</p>
        </div>

        <!-- Appetizers -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food-apple</v-icon>
            Appetizers & Starters
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('appetizers')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Fried Rice (Friday to Sunday) -->
        <div class="menu-category mb-8" v-if="selectedDay === 'friday-sunday' || selectedDay === 'all'">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food-variant</v-icon>
            Fried Rice
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('friedRice')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Main Courses -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food</v-icon>
            Main Courses
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('mainCourses')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Beverages (Friday to Sunday) -->
        <div class="menu-category mb-8" v-if="selectedDay === 'friday-sunday' || selectedDay === 'all'">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-cup-water</v-icon>
            Beverages
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('beverages')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Rice & Breads -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-rice</v-icon>
            Rice & Breads
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('riceBreads')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Desserts -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-cake-variant</v-icon>
            Desserts & Beverages
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('desserts')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Snacks (Friday to Sunday) -->
        <div class="menu-category mb-8" v-if="selectedDay === 'friday-sunday' || selectedDay === 'all'">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food-variant</v-icon>
            Snacks
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('snacks')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Entrées -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food-variant</v-icon>
            Entrées
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('entrees')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Breads -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-bread-slice</v-icon>
            Breads
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('breads')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- South India Specials -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food-variant</v-icon>
            South India Specials
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('southIndiaSpecials')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- South India Specials Combo -->
        <div class="menu-category mb-8">
          <h3 class="category-title">
            <v-icon color="primary" class="mr-3">mdi-food-variant</v-icon>
            South India Specials Combo
          </h3>
          <v-row>
            <v-col 
              cols="12" 
              md="6" 
              lg="4" 
              v-for="item in getCategoryItems('southIndiaSpecialsCombo')" 
              :key="item.id"
              class="mb-4"
            >
              <v-card class="menu-item-card" elevation="4" rounded="xl">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-item-image"
                >
                  <div class="menu-item-overlay">
                    <v-chip 
                      v-if="item.spicy" 
                      color="error" 
                      size="small" 
                      class="spicy-chip"
                    >
                      <v-icon left size="16">mdi-fire</v-icon>
                      Spicy
                    </v-chip>
                    <v-chip 
                      v-if="item.vegetarian" 
                      color="success" 
                      size="small" 
                      class="veg-chip"
                    >
                      <v-icon left size="16">mdi-leaf</v-icon>
                      Veg
                    </v-chip>
                    <v-chip 
                      v-if="!item.vegetarian" 
                      color="warning" 
                      size="small" 
                      class="non-veg-chip"
                    >
                      <v-icon left size="16">mdi-food-drumstick</v-icon>
                      Non-Veg
                    </v-chip>
                  </div>
                </v-img>
                
                <v-card-text class="pa-4">
                  <h4 class="menu-item-name">{{ item.name }}</h4>
                  <p class="menu-item-description">{{ item.description }}</p>
                  
                  <!-- Pricing Options -->
                  <div class="pricing-options mt-3">
                    <div class="pricing-row" v-for="option in item.pricing" :key="option.size">
                      <span class="size-label">{{ option.size }}</span>
                      <span class="price">${{ option.price }}</span>
                    </div>
                  </div>
                  
                  <div class="menu-item-footer mt-3">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mr-1 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>

    <!-- Special Note -->
    <section class="special-note-section">
      <v-container>
        <v-card class="special-note-card" elevation="4" rounded="xl">
          <v-card-text class="pa-6 text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-information</v-icon>
            <h3 class="special-note-title">Monday to Thursday Menu</h3>
            <p class="special-note-text">
              <strong>Order Timings:</strong><br>
              • Breakfast: Order the night before<br>
              • Lunch: Order before 9AM<br>
              • Dinner: Order before 3PM<br><br>
              
              <strong>Tray Sizes Available:</strong><br>
              • Quarter Tray (serves ~5 people)<br>
              • Half Tray (serves ~10 people)<br>
              • Full Tray (serves ~20 people)<br><br>
              
              All dishes are made fresh to order with authentic Indian spices. 
              Spicy levels can be adjusted upon request. Please inform us of any allergies.
            </p>
            <v-btn
              color="primary"
              size="large"
              rounded="pill"
              class="mt-4"
              @click="$router.push('/contact')"
            >
              <v-icon left>mdi-phone</v-icon>
              Contact for Special Requests
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      selectedDay: 'monday-thursday',
      availableDays: [
        { value: 'monday-thursday', label: 'Monday to Thursday', icon: 'mdi-calendar-range' },
        { value: 'friday-sunday', label: 'Friday to Sunday', icon: 'mdi-calendar-weekend' }
      ],
      menuItems: {
        appetizers: [
          {
            id: 1,
            name: 'Mirapakaya Kodi Vepudu',
            description: 'Spicy chicken with green chilies and aromatic spices',
            image: '/images/mirapakaya-kodi-vepudu.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '45' },
              { size: 'Half', price: '80' },
              { size: 'Full', price: '150' }
            ],
            tags: ['Chicken', 'Traditional'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 2,
            name: 'Karapodi Chicken',
            description: 'Chicken cooked with black pepper and special spices',
            image: '/images/karapodi-chicken.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '45' },
              { size: 'Half', price: '80' },
              { size: 'Full', price: '150' }
            ],
            tags: ['Chicken', 'Pepper'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 3,
            name: 'Chicken Drumstick',
            description: 'Tender chicken drumsticks with rich gravy',
            image: '/images/chicken-drumstick.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Chicken', 'Drumstick', 'Mild'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 4,
            name: 'Chicken Ghee Roast',
            description: 'Chicken roasted in pure ghee with aromatic spices',
            image: '/images/chicken-ghee-roast.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '50' },
              { size: 'Half', price: '90' },
              { size: 'Full', price: '150' }
            ],
            tags: ['Ghee', 'Roasted'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 5,
            name: 'Veg Pakoda',
            description: 'Mixed vegetable fritters with chickpea flour',
            image: '/images/veg-pakoda.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '25' },
              { size: 'Half', price: '50' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Vegetarian', 'Crispy', 'Mixed Veg'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 6,
            name: 'Chicken Pakoda',
            description: 'Spiced chicken fritters with chickpea flour batter',
            image: '/images/chicken-pakoda.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Chicken', 'Fritters'],
            availableDays: ['friday-sunday']
          },
          {
            id: 7,
            name: 'Chicken Manchuria',
            description: 'Indo-Chinese style chicken with soy sauce and spices',
            image: '/images/chicken-manchuria.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Indo-Chinese', 'Chicken'],
            availableDays: ['friday-sunday']
          },
          {
            id: 8,
            name: 'Chicken 65',
            description: 'Spicy deep-fried chicken with curry leaves and spices',
            image: '/images/chicken-65.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Deep-fried', 'Chicken'],
            availableDays: ['friday-sunday']
          },
          {
            id: 9,
            name: 'Chilli Chicken',
            description: 'Spicy chicken with green chilies and soy sauce',
            image: '/images/chilli-chicken.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Chilli', 'Chicken'],
            availableDays: ['friday-sunday']
          },
          {
            id: 10,
            name: 'Gobi Manchuria',
            description: 'Indo-Chinese style cauliflower with soy sauce',
            image: '/images/gobi-manchuria.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Indo-Chinese', 'Cauliflower'],
            availableDays: ['friday-sunday']
          },
          {
            id: 11,
            name: 'Chilli Gobi',
            description: 'Spicy cauliflower with green chilies and spices',
            image: '/images/chilli-gobi.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Chilli', 'Cauliflower'],
            availableDays: ['friday-sunday']
          },
          {
            id: 12,
            name: 'Chilli Paneer',
            description: 'Spicy cottage cheese with green chilies and soy sauce',
            image: '/images/chilli-paneer.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Chilli', 'Paneer'],
            availableDays: ['friday-sunday']
          },
          {
            id: 13,
            name: 'Paneer Manchuria',
            description: 'Indo-Chinese style cottage cheese with soy sauce',
            image: '/images/paneer-manchuria.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Indo-Chinese', 'Paneer'],
            availableDays: ['friday-sunday']
          }
        ],
        friedRice: [
          {
            id: 49,
            name: 'Chicken Fried Rice',
            description: 'Fragrant rice stir-fried with chicken and vegetables',
            image: '/images/chicken-fried-rice.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Fried Rice', 'Chicken', 'Stir-fried'],
            availableDays: ['friday-sunday']
          },
          {
            id: 50,
            name: 'Egg Fried Rice',
            description: 'Fragrant rice stir-fried with eggs and vegetables',
            image: '/images/egg-fried-rice.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Fried Rice', 'Egg', 'Stir-fried'],
            availableDays: ['friday-sunday']
          },
          {
            id: 51,
            name: 'Gobi Fried Rice',
            description: 'Fragrant rice stir-fried with cauliflower and vegetables',
            image: '/images/gobi-fried-rice.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Fried Rice', 'Cauliflower', 'Vegetarian'],
            availableDays: ['friday-sunday']
          },
          {
            id: 52,
            name: 'Paneer Fried Rice',
            description: 'Fragrant rice stir-fried with cottage cheese and vegetables',
            image: '/images/paneer-fried-rice.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Fried Rice', 'Paneer', 'Vegetarian'],
            availableDays: ['friday-sunday']
          }
        ],
        mainCourses: [
          {
            id: 4,
            name: 'Chicken Pulav',
            description: 'Fragrant rice with tender chicken and aromatic spices',
            image: '/images/chicken-pulav.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Rice', 'Chicken', 'Aromatic'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 5,
            name: 'Chicken Fry Piece Pulav',
            description: 'Rice with crispy fried chicken pieces and spices',
            image: '/images/chicken-fry-pulav.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '70' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Rice', 'Fried Chicken'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 6,
            name: 'Egg Pulav',
            description: 'Flavorful rice with boiled eggs and spices',
            image: '/images/egg-pulav.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Rice', 'Egg', 'Mild'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 7,
            name: 'Veg Pulav',
            description: 'Mixed vegetable rice with aromatic spices',
            image: '/images/veg-pulav.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '25' },
              { size: 'Half', price: '50' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Rice', 'Vegetarian', 'Mixed Veg'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 8,
            name: 'Paneer Pulav',
            description: 'Rice with cottage cheese and aromatic spices',
            image: '/images/paneer-pulav.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Rice', 'Paneer', 'Vegetarian'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 57,
            name: 'Chicken Dum Biriyani',
            description: 'Layered rice with tender chicken and aromatic spices',
            image: '/images/chicken-dum-biriyani.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Biriyani', 'Chicken', 'Layered'],
            availableDays: ['friday-sunday']
          },
          {
            id: 58,
            name: 'Chicken Dum Biriyani Boneless',
            description: 'Layered rice with boneless chicken and aromatic spices',
            image: '/images/chicken-dum-biriyani-boneless.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Biriyani', 'Boneless Chicken', 'Layered'],
            availableDays: ['friday-sunday']
          },
          {
            id: 59,
            name: 'Pachimirchi Kodi Pulav',
            description: 'Rice with green chili chicken and aromatic spices',
            image: '/images/pachimirchi-kodi-pulav.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '45' },
              { size: 'Half', price: '80' },
              { size: 'Full', price: '150' }
            ],
            tags: ['Pulav', 'Green Chili Chicken'],
            availableDays: ['friday-sunday']
          },
          {
            id: 60,
            name: 'Mutton Dum Biriyani',
            description: 'Layered rice with tender mutton and aromatic spices',
            image: '/images/mutton-dum-biriyani.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '60' },
              { size: 'Half', price: '110' },
              { size: 'Full', price: '190' }
            ],
            tags: ['Biriyani', 'Mutton', 'Layered'],
            availableDays: ['friday-sunday']
          },
          {
            id: 61,
            name: 'Mutton Pulav',
            description: 'Rice with tender mutton and aromatic spices',
            image: '/images/mutton-pulav.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '55' },
              { size: 'Half', price: '100' },
              { size: 'Full', price: '180' }
            ],
            tags: ['Pulav', 'Mutton', 'Aromatic'],
            availableDays: ['friday-sunday']
          }
        ],
        snacks: [
          {
            id: 53,
            name: 'Chicken Puff (4 Pcs)',
            description: 'Flaky pastry filled with spiced chicken mixture',
            image: '/images/chicken-puff.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: '4 Pcs', price: '24' }
            ],
            tags: ['Pastry', 'Chicken', 'Flaky'],
            availableDays: ['friday-sunday']
          },
          {
            id: 54,
            name: 'Egg Puff (4 Pcs)',
            description: 'Flaky pastry filled with spiced egg mixture',
            image: '/images/egg-puff.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: '4 Pcs', price: '20' }
            ],
            tags: ['Pastry', 'Egg', 'Flaky'],
            availableDays: ['friday-sunday']
          },
          {
            id: 55,
            name: 'Paneer Puff (4 Pcs)',
            description: 'Flaky pastry filled with spiced cottage cheese mixture',
            image: '/images/paneer-puff.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '4 Pcs', price: '24' }
            ],
            tags: ['Pastry', 'Paneer', 'Flaky'],
            availableDays: ['friday-sunday']
          },
          {
            id: 56,
            name: 'Veg Puff (4 Pcs)',
            description: 'Flaky pastry filled with spiced vegetable mixture',
            image: '/images/veg-puff.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '4 Pcs', price: '16' }
            ],
            tags: ['Pastry', 'Vegetables', 'Flaky'],
            availableDays: ['friday-sunday']
          }
        ],
        beverages: [
          {
            id: 62,
            name: 'Mango Lassi',
            description: 'Sweet yogurt drink with fresh mango',
            image: '/images/mango-lassi-beverage.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '4' }
            ],
            tags: ['Sweet', 'Yogurt', 'Mango'],
            availableDays: ['friday-sunday']
          }
        ],
        entrees: [
          {
            id: 9,
            name: 'Nellore Chicken Curry',
            description: 'Traditional Nellore style chicken curry with rich spices',
            image: '/images/nellore-chicken-curry.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Nellore Style', 'Chicken'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 10,
            name: 'Chicken Korma',
            description: 'Mild and creamy chicken curry with cashew gravy',
            image: '/images/chicken-korma.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Creamy', 'Chicken', 'Mild'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 11,
            name: 'Nellore Egg Karam',
            description: 'Spicy egg curry in Nellore style with rich gravy',
            image: '/images/nellore-egg-karam.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Regular', price: '12' },
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Nellore Style', 'Egg'],
            availableDays: ['monday-thursday']
          },
          {
            id: 12,
            name: 'Egg Curry',
            description: 'Boiled eggs in aromatic tomato-based curry',
            image: '/images/egg-curry.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Regular', price: '10' },
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Egg', 'Curry', 'Mild'],
            availableDays: ['monday-thursday']
          },
          {
            id: 13,
            name: 'Sambar',
            description: 'Traditional South Indian lentil soup with vegetables',
            image: '/images/sambar.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' },
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Lentil', 'Vegetarian', 'Traditional'],
            availableDays: ['monday-thursday']
          },
          {
            id: 14,
            name: 'Spinach Dal',
            description: 'Fresh spinach with yellow lentils and spices',
            image: '/images/spinach-dal.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' },
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Spinach', 'Lentil', 'Vegetarian'],
            availableDays: ['monday-thursday']
          },
          {
            id: 15,
            name: 'Guthi Vankaya',
            description: 'Stuffed eggplant with aromatic spices and herbs',
            image: '/images/guthi-vankaya.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '12' },
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Eggplant', 'Stuffed'],
            availableDays: ['monday-thursday']
          },
          {
            id: 16,
            name: 'Egg Plant Curry',
            description: 'Tender eggplant cooked with aromatic spices',
            image: '/images/eggplant-curry.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '10' },
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Eggplant', 'Curry', 'Mild'],
            availableDays: ['monday-thursday']
          },
          {
            id: 17,
            name: 'Potato Curry',
            description: 'Spiced potato curry with aromatic herbs',
            image: '/images/potato-curry.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' },
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Potato', 'Curry', 'Vegetarian'],
            availableDays: ['monday-thursday']
          },
          {
            id: 18,
            name: 'Mushroom Curry',
            description: 'Fresh mushrooms in rich tomato-based gravy',
            image: '/images/mushroom-curry.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '12' },
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Mushroom', 'Curry'],
            availableDays: ['monday-thursday']
          },
          {
            id: 19,
            name: 'Dal Curry',
            description: 'Yellow lentils cooked with aromatic spices',
            image: '/images/dal-curry.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' },
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Lentil', 'Curry', 'Vegetarian'],
            availableDays: ['monday-thursday']
          },
          {
            id: 20,
            name: 'Veg Drum Stick Curry',
            description: 'Drumstick vegetable curry with aromatic spices',
            image: '/images/veg-drumstick-curry.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '12' },
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Drumstick', 'Curry'],
            availableDays: ['monday-thursday']
          },
          {
            id: 21,
            name: 'Channa Cabbage Curry',
            description: 'Chickpeas and cabbage in aromatic curry',
            image: '/images/channa-cabbage-curry.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' },
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Chickpeas', 'Cabbage', 'Vegetarian'],
            availableDays: ['monday-thursday']
          },
          {
            id: 22,
            name: 'Pappu Charu',
            description: 'Traditional South Indian lentil soup',
            image: '/images/pappu-charu.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' },
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '90' }
            ],
            tags: ['Lentil', 'Soup', 'Traditional'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 63,
            name: 'Butter Chicken',
            description: 'Tender chicken in rich, creamy tomato sauce',
            image: '/images/butter-chicken.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Creamy', 'Chicken', 'Mild'],
            availableDays: ['friday-sunday']
          },
          {
            id: 64,
            name: 'Chicken Tikka Masala',
            description: 'Grilled chicken in spicy tomato-based curry',
            image: '/images/chicken-tikka-masala.jpg',
            spicy: true,
            vegetarian: false,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Grilled', 'Chicken'],
            availableDays: ['friday-sunday']
          },
          {
            id: 65,
            name: 'Butter Paneer',
            description: 'Cottage cheese in rich, creamy tomato sauce',
            image: '/images/butter-paneer.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Creamy', 'Paneer', 'Mild'],
            availableDays: ['friday-sunday']
          },
          {
            id: 66,
            name: 'Paneer Tikka Masala',
            description: 'Grilled cottage cheese in spicy tomato-based curry',
            image: '/images/paneer-tikka-masala.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '40' },
              { size: 'Half', price: '75' },
              { size: 'Full', price: '130' }
            ],
            tags: ['Grilled', 'Paneer'],
            availableDays: ['friday-sunday']
          },
          {
            id: 67,
            name: 'Dal Makni',
            description: 'Creamy black lentils with butter and cream',
            image: '/images/dal-makni.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Lentils', 'Creamy', 'Butter'],
            availableDays: ['friday-sunday']
          }
        ],
        riceBreads: [
          {
            id: 23,
            name: 'Lemon Rice',
            description: 'Fragrant rice with lemon, curry leaves and spices',
            image: '/images/lemon-rice.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Lemon', 'Rice', 'Citrus'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 24,
            name: 'Tamarind Rice',
            description: 'Tangy rice with tamarind and aromatic spices',
            image: '/images/tamarind-rice.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '35' },
              { size: 'Half', price: '60' },
              { size: 'Full', price: '110' }
            ],
            tags: ['Tamarind', 'Rice', 'Tangy'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 25,
            name: 'Spinach Rice',
            description: 'Nutritious rice with fresh spinach and herbs',
            image: '/images/spinach-rice.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Spinach', 'Rice', 'Healthy'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 26,
            name: 'Jeera Rice',
            description: 'Aromatic rice with cumin seeds and spices',
            image: '/images/jeera-rice.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '30' },
              { size: 'Half', price: '55' },
              { size: 'Full', price: '100' }
            ],
            tags: ['Cumin', 'Rice', 'Aromatic'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 27,
            name: 'White Rice',
            description: 'Steamed basmati rice, perfect with any curry',
            image: '/images/white-rice.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Quarter', price: '20' },
              { size: 'Half', price: '35' },
              { size: 'Full', price: '70' }
            ],
            tags: ['Basmati', 'Rice', 'Steamed'],
            availableDays: ['monday-thursday', 'friday-sunday']
          }
        ],
        breads: [
          {
            id: 28,
            name: 'Chapati (2 Pcs)',
            description: 'Whole wheat flatbread, soft and fluffy',
            image: '/images/chapati.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '2 Pcs', price: '5' }
            ],
            tags: ['Whole Wheat', 'Flatbread', 'Traditional'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 29,
            name: 'Plain Naan (2 Pcs)',
            description: 'Soft, fluffy bread baked in tandoor oven',
            image: '/images/plain-naan.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '2 Pcs', price: '5' }
            ],
            tags: ['Tandoor', 'Soft', 'Traditional'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 30,
            name: 'Garlic Naan (2 Pcs)',
            description: 'Fluffy naan bread with garlic and herbs',
            image: '/images/garlic-naan.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '2 Pcs', price: '6' }
            ],
            tags: ['Garlic', 'Herbs', 'Aromatic'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 31,
            name: 'Puri (2 Pcs)',
            description: 'Deep-fried puffy bread, perfect with curry',
            image: '/images/puri.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '2 Pcs', price: '5' }
            ],
            tags: ['Deep-fried', 'Puffy', 'Traditional'],
            availableDays: ['monday-thursday', 'friday-sunday']
          }
        ],
        southIndiaSpecials: [
          {
            id: 32,
            name: 'Plain Dosa',
            description: 'Crispy rice and lentil crepe, served with chutney and sambar',
            image: '/images/plain-dosa.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '3' }
            ],
            tags: ['Crepe', 'Rice', 'Traditional'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 33,
            name: 'Masala Dosa',
            description: 'Crispy dosa filled with spiced potato mixture',
            image: '/images/masala-dosa.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '6' }
            ],
            tags: ['Masala', 'Potato', 'Filled'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 34,
            name: 'Karam Dosa',
            description: 'Spicy dosa with red chili and spices',
            image: '/images/karam-dosa.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '5' }
            ],
            tags: ['Red Chili', 'Hot'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 35,
            name: 'Ghee Karam Dosa',
            description: 'Spicy dosa cooked in pure ghee for rich flavor',
            image: '/images/ghee-karam-dosa.jpg',
            spicy: true,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '6' }
            ],
            tags: ['Ghee', 'Rich'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 36,
            name: 'Onion Dosa',
            description: 'Crispy dosa topped with fresh onions and spices',
            image: '/images/onion-dosa.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '5' }
            ],
            tags: ['Onion', 'Topped', 'Mild'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 37,
            name: 'Egg Dosa',
            description: 'Crispy dosa topped with beaten egg and spices',
            image: '/images/egg-dosa.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Regular', price: '7' }
            ],
            tags: ['Egg', 'Topped', 'Protein'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 38,
            name: 'Upma',
            description: 'Savory semolina breakfast with vegetables and spices',
            image: '/images/upma.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '6' }
            ],
            tags: ['Semolina', 'Breakfast', 'Savory'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 39,
            name: 'Pesara Pongal',
            description: 'Traditional rice and lentil breakfast dish',
            image: '/images/pesara-pongal.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '8' }
            ],
            tags: ['Rice', 'Lentil', 'Breakfast'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 40,
            name: 'Idly (5 Pcs)',
            description: 'Soft steamed rice cakes, served with chutney and sambar',
            image: '/images/idly.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '5 Pcs', price: '5' }
            ],
            tags: ['Steamed', 'Rice Cakes', 'Soft'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 41,
            name: 'Vada (5 Pcs)',
            description: 'Crispy lentil fritters, perfect with chutney',
            image: '/images/vada.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '5 Pcs', price: '6' }
            ],
            tags: ['Lentil', 'Fritters', 'Crispy'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 42,
            name: 'Ponugulu/Bonda (8 Pcs)',
            description: 'Deep-fried rice and lentil dumplings',
            image: '/images/ponugulu-bonda.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: '8 Pcs', price: '6' }
            ],
            tags: ['Dumplings', 'Deep-fried', 'Rice'],
            availableDays: ['monday-thursday', 'friday-sunday']
          }
        ],
        southIndiaSpecialsCombo: [
          {
            id: 43,
            name: 'Dosa With Chicken',
            description: 'Crispy dosa served with chicken curry on the side',
            image: '/images/dosa-with-chicken.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Regular', price: '11' }
            ],
            tags: ['Dosa', 'Chicken', 'Combo'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 44,
            name: 'Puri With Chicken',
            description: 'Deep-fried puffy bread served with chicken curry',
            image: '/images/puri-with-chicken.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Regular', price: '12' }
            ],
            tags: ['Puri', 'Chicken', 'Combo'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 45,
            name: 'Vada With Chicken',
            description: 'Crispy lentil fritters served with chicken curry',
            image: '/images/vada-with-chicken.jpg',
            spicy: false,
            vegetarian: false,
            pricing: [
              { size: 'Regular', price: '12' }
            ],
            tags: ['Vada', 'Chicken', 'Combo'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 46,
            name: 'Puri With Potato Curry',
            description: 'Deep-fried puffy bread served with potato curry',
            image: '/images/puri-with-potato.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '9' }
            ],
            tags: ['Puri', 'Potato', 'Vegetarian'],
            availableDays: ['monday-thursday', 'friday-sunday']
          }
        ],
        desserts: [
          {
            id: 47,
            name: 'Gulab Jamun',
            description: 'Sweet milk dumplings in rose-flavored syrup',
            image: '/images/gulab-jamun.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '4' }
            ],
            tags: ['Sweet', 'Traditional', 'Dessert'],
            availableDays: ['monday-thursday', 'friday-sunday']
          },
          {
            id: 48,
            name: 'Mango Lassi',
            description: 'Sweet yogurt drink with fresh mango',
            image: '/images/mango-lassi.jpg',
            spicy: false,
            vegetarian: true,
            pricing: [
              { size: 'Regular', price: '3' }
            ],
            tags: ['Refreshing', 'Sweet', 'Drink'],
            availableDays: ['monday-thursday', 'friday-sunday']
          }
        ]
      }
    }
  },
  methods: {
    selectDay(day) {
      this.selectedDay = day;
    },
    getSelectedDayLabel() {
      const day = this.availableDays.find(d => d.value === this.selectedDay);
      return day ? day.label : 'Monday to Thursday';
    },
    getCategoryItems(category) {
      if (this.selectedDay === 'monday-thursday') {
        return this.menuItems[category].filter(item => 
          item.availableDays.includes('monday-thursday')
        );
      }
      
      if (this.selectedDay === 'friday-sunday') {
        return this.menuItems[category].filter(item => 
          item.availableDays.includes('friday-sunday')
        );
      }
      
      return this.menuItems[category].filter(item => 
        item.availableDays.includes(this.selectedDay)
      );
    }
  }
}
</script>

<style scoped>
.menu-hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 80px 0;
  color: white;
}

.days-selector-section {
  padding: 40px 0;
  background: linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.days-selector-card {
  background: white;
  border-radius: 20px;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.day-btn {
  height: 60px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.day-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.day-label {
  font-size: 0.9rem;
  font-weight: 600;
}

.menu-categories-section {
  padding: 60px 0;
  background: white;
}

.menu-category {
  margin-bottom: 60px;
}

.category-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.menu-item-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.menu-item-image {
  transition: transform 0.3s ease;
}

.menu-item-card:hover .menu-item-image {
  transform: scale(1.05);
}

.menu-item-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.spicy-chip, .veg-chip, .non-veg-chip {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9) !important;
  font-weight: 600;
}

.menu-item-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.menu-item-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.pricing-options {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
}

.pricing-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.pricing-row:last-child {
  border-bottom: none;
}

.size-label {
  font-weight: 600;
  color: #333;
}

.price {
  font-weight: 700;
  color: #1e3a8a;
  font-size: 1.1rem;
}

.menu-item-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.special-note-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #F0F0F0 0%, #E0E0E0 100%);
}

.special-note-card {
  background: white;
  border-radius: 20px;
}

.special-note-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.special-note-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 600px) {
  .days-selector-section {
    padding: 30px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .days-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .day-btn {
    height: 50px;
    font-size: 0.9rem;
  }
  
  .day-label {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .days-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  
  .day-btn {
    height: 50px;
    font-size: 0.9rem;
  }
  
  .category-title {
    font-size: 1.5rem;
    flex-direction: column;
    text-align: center;
  }
  
  .category-title .v-icon {
    margin-bottom: 8px;
    margin-right: 0 !important;
  }
}

@media (min-width: 1200px) {
  .days-selector-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 1.25rem;
  }
  
  .days-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .day-btn {
    height: 70px;
    font-size: 1rem;
  }
  
  .day-label {
    font-size: 1rem;
  }
}
</style> 