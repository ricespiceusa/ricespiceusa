<template>
  <v-app>
    <!-- Navigation Header -->
    <v-app-bar
      app
      color="primary"
      elevation="0"
      class="px-4"
    >
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-md-none"
        ></v-app-bar-nav-icon>
        
        <div class="d-flex align-center">
          <v-avatar size="50" class="me-3">
            <v-img src="/logo.png" alt="Rice & Spice Logo"></v-img>
          </v-avatar>
          <div>
            <h1 class="text-h5 font-weight-bold text-white mb-0">Rice & Spice</h1>
            <p class="text-caption text-white mb-0">Authentic Taste Of Indian Home</p>
          </div>
        </div>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="item in navItems"
            :key="item.title"
            :to="item.path"
            variant="text"
            color="white"
            class="mx-2"
            :ripple="false"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <v-btn
          variant="text"
          color="white"
          class="d-md-none"
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="primary"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.path"
          color="white"
          @click="drawer = false"
        >
          <template v-slot:prepend>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer
      color="primary"
      class="text-white"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-3">Rice & Spice</h3>
            <p class="text-body-2">
              Bringing authentic Indian flavors to your neighborhood. 
              Fresh ingredients, traditional recipes, and unforgettable taste.
            </p>
          </v-col>
          
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-3">Quick Links</h3>
            <div class="quick-links">
              <v-btn
                v-for="item in navItems"
                :key="item.title"
                :to="item.path"
                variant="text"
                color="white"
                class="quick-link-btn d-block text-left mb-2"
                :ripple="false"
              >
                <v-icon left size="16">{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-btn>
            </div>
          </v-col>
          
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-3">Contact Info</h3>
            <div class="d-flex align-center mb-2">
              <v-icon class="me-2">mdi-phone</v-icon>
              <span>605-592-0819</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon class="me-2">mdi-email</v-icon>
              <span>info@riceandspice.com</span>
            </div>
            <div class="d-flex align-center">
              <v-icon class="me-2">mdi-clock</v-icon>
              <span>Mon-Sun: 6AM-9PM</span>
            </div>
          </v-col>
        </v-row>
        
        <v-divider color="white" class="my-4"></v-divider>
        
        <div class="text-center">
          <p class="text-body-2 mb-0">
            © {{ new Date().getFullYear() }} Rice & Spice. All rights reserved.
          </p>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      navItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Menu', path: '/menu', icon: 'mdi-food-fork-drink' },
        { title: 'About', path: '/about', icon: 'mdi-information' },
        { title: 'Location', path: '/location', icon: 'mdi-map-marker' },
        { title: 'Catering', path: '/catering', icon: 'mdi-food' },
        { title: 'Contact', path: '/contact', icon: 'mdi-phone' }
      ]
    }
  }
}
</script>

<style scoped>
.v-app-bar {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

.v-footer {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.quick-links {
  display: flex;
  flex-direction: column;
}

.quick-link-btn {
  justify-content: flex-start;
  padding: 8px 0;
  min-height: auto;
  text-transform: none;
  font-weight: 400;
  transition: all 0.3s ease;
}

.quick-link-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.quick-link-btn .v-icon {
  margin-right: 8px;
}
</style> 