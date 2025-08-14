<template>
  <div>
    <!-- Hero Section with Gradient Background -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <v-container class="hero-content">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <div class="hero-badge mb-4">
              <v-icon size="32" color="white" class="mr-2">mdi-star</v-icon>
              <span class="text-h6 font-weight-bold">No Preservatives, No Food Color, Just Real Food, Made from Scratch — the Way Nature Intended</span>
            </div>
            <h1 class="hero-title mb-6">
              <span class="gradient-text">Rice & Spice</span>
              <br>
              <span class="hero-subtitle">Food Truck</span>
            </h1>
            <p class="hero-tagline mb-4">
              <span class="tagline-text">AUTHENTIC TASTE OF INDIAN HOME</span>
            </p>
            <p class="hero-description mb-8">
              Experience the vibrant flavors of India on wheels. Fresh, authentic, and delicious meals served daily with love and tradition.
            </p>
            <div class="hero-buttons">
              <v-btn
                size="x-large"
                color="primary"
                class="mr-4 mb-2"
                elevation="8"
                rounded="pill"
                @click="$router.push('/menu')"
              >
                <v-icon left>mdi-food</v-icon>
                View Menu
              </v-btn>
              <v-btn
                size="x-large"
                variant="outlined"
                color="white"
                class="mb-2"
                rounded="pill"
                @click="$router.push('/location')"
              >
                <v-icon left>mdi-map-marker</v-icon>
                Find Us
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="hero-scroll-indicator">
        <v-icon color="white" size="24">mdi-chevron-down</v-icon>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="text-center mb-6">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <v-icon size="48" color="primary">mdi-clock-fast</v-icon>
              </div>
              <h3 class="feature-title">Fast & Fresh</h3>
              <p class="feature-description">Made-to-order dishes with fresh ingredients, served hot and ready in minutes.</p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center mb-6">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <v-icon size="48" color="secondary">mdi-heart</v-icon>
              </div>
              <h3 class="feature-title">Made with Love</h3>
              <p class="feature-description">Every dish is prepared with care, using traditional family recipes passed down through generations.</p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center mb-6">
            <div class="feature-card">
              <div class="feature-icon-wrapper">
                <v-icon size="48" color="accent">mdi-truck-delivery</v-icon>
              </div>
              <h3 class="feature-title">Mobile Kitchen</h3>
              <p class="feature-description">Bringing authentic Indian flavors to your neighborhood. Check our schedule for locations.</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Featured Menu Section -->
    <section class="featured-menu-section">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="section-title">Today's Specials</h2>
          <p class="section-subtitle">Discover our most popular dishes</p>
        </div>
        <v-row>
          <v-col cols="12" md="4" v-for="item in featuredItems" :key="item.id" class="mb-6">
            <v-card class="menu-card" elevation="8" rounded="xl">
              <div class="menu-image-wrapper">
                <v-img
                  :src="item.image"
                  :alt="item.name"
                  height="200"
                  cover
                  class="menu-image"
                >
                  <div class="menu-overlay">
                    <v-chip color="primary" size="small" class="price-chip">
                      ${{ item.price }}
                    </v-chip>
                  </div>
                </v-img>
              </div>
              <v-card-text class="text-center">
                <h3 class="menu-item-title">{{ item.name }}</h3>
                <p class="menu-item-description">{{ item.description }}</p>
                <div class="menu-item-tags">
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
        <div class="text-center mt-8">
          <v-btn
            size="large"
            color="primary"
            rounded="pill"
            elevation="4"
            @click="$router.push('/menu')"
          >
            <v-icon left>mdi-food-variant</v-icon>
            View Full Menu
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="mb-6">
            <div class="about-content">
              <h2 class="section-title text-left">Our Story</h2>
              <p class="about-description">
                Rice & Spice was born from a passion for authentic Indian cuisine and a desire to share the rich flavors of our heritage with the community. What started as a family dream has become a beloved food truck, bringing the taste of India to your doorstep.
              </p>
              <div class="about-features">
                <div class="about-feature">
                  <v-icon color="primary" size="24" class="mr-3">mdi-check-circle</v-icon>
                  <span>Traditional family recipes</span>
                </div>
                <div class="about-feature">
                  <v-icon color="primary" size="24" class="mr-3">mdi-check-circle</v-icon>
                  <span>Fresh, locally sourced ingredients</span>
                </div>
                <div class="about-feature">
                  <v-icon color="primary" size="24" class="mr-3">mdi-check-circle</v-icon>
                  <span>Authentic cooking methods</span>
                </div>
              </div>
              <v-btn
                size="large"
                color="secondary"
                rounded="pill"
                class="mt-4"
                @click="$router.push('/about')"
              >
                Learn More
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mb-6">
            <div class="about-image-wrapper">
              <v-img
                src="/images/indian-cooking.jpg"
                alt="Indian Cooking"
                height="400"
                cover
                rounded="xl"
                class="about-image"
              >
                <div class="about-image-overlay"></div>
              </v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <v-container>
        <div class="text-center mb-8">
          <h2 class="section-title">What Our Customers Say</h2>
          <p class="section-subtitle">Real feedback from real food lovers</p>
        </div>
        <v-row>
          <v-col cols="12" md="4" v-for="testimonial in testimonials" :key="testimonial.id" class="mb-6">
            <v-card class="testimonial-card" elevation="4" rounded="xl">
              <v-card-text class="text-center">
                <div class="testimonial-rating mb-3">
                  <v-icon
                    v-for="i in 5"
                    :key="i"
                    :color="i <= testimonial.rating ? 'warning' : 'grey'"
                    size="20"
                  >
                    mdi-star
                  </v-icon>
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author mt-4">
                  <v-avatar size="48" class="mb-2">
                    <v-img :src="testimonial.avatar" :alt="testimonial.name"></v-img>
                  </v-avatar>
                  <h4 class="testimonial-name">{{ testimonial.name }}</h4>
                  <p class="testimonial-location">{{ testimonial.location }}</p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="text-center">
          <h2 class="cta-title">Ready to Taste the Difference?</h2>
          <p class="cta-description">Visit us today and experience authentic Indian flavors on wheels!</p>
          <div class="cta-buttons">
            <v-btn
              size="x-large"
              color="primary"
              class="mr-4 mb-2"
              rounded="pill"
              elevation="8"
              @click="$router.push('/menu')"
            >
              <v-icon left>mdi-food</v-icon>
              Order Now
            </v-btn>
            <v-btn
              size="x-large"
              variant="outlined"
              color="white"
              class="mb-2"
              rounded="pill"
              @click="$router.push('/contact')"
            >
              <v-icon left>mdi-phone</v-icon>
              Contact Us
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredItems: [
        {
          id: 1,
          name: 'Butter Chicken',
          description: 'Tender chicken in rich, creamy tomato sauce with aromatic spices',
          price: '12.99',
          image: '/images/butter-chicken.jpg',
          tags: ['Popular', 'Spicy', 'Creamy']
        },
        {
          id: 2,
          name: 'Biryani Rice',
          description: 'Fragrant basmati rice cooked with aromatic spices and tender meat',
          price: '14.99',
          image: '/images/biryani.jpg',
          tags: ['Traditional', 'Aromatic', 'Hearty']
        },
        {
          id: 3,
          name: 'Naan Bread',
          description: 'Soft, fluffy bread baked in traditional tandoor oven',
          price: '3.99',
          image: '/images/naan.jpg',
          tags: ['Fresh', 'Soft', 'Traditional']
        }
      ],
      testimonials: [
        {
          id: 1,
          text: "The best Indian food I've ever had! The flavors are incredible and the portions are generous.",
          rating: 5,
          name: "Sarah Johnson",
          location: "Downtown",
          avatar: "/images/avatar1.jpg"
        },
        {
          id: 2,
          text: "Authentic taste that reminds me of home. The food truck concept is brilliant!",
          rating: 5,
          name: "Raj Patel",
          location: "Westside",
          avatar: "/images/avatar2.jpg"
        },
        {
          id: 3,
          text: "Fresh ingredients and amazing spices. I'm a regular customer now!",
          rating: 5,
          name: "Maria Garcia",
          location: "Eastside",
          avatar: "/images/avatar3.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD23F 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/pattern.svg') repeat;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.gradient-text {
  background: linear-gradient(45deg, #FFD23F, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
}

.hero-tagline {
  text-align: center;
}

.tagline-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #FFD23F;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.features-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%);
}

.feature-card {
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #FF6B35, #F7931E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

.featured-menu-section {
  padding: 80px 0;
  background: white;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.menu-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.menu-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.menu-image-wrapper {
  position: relative;
  overflow: hidden;
}

.menu-image {
  transition: transform 0.3s ease;
}

.menu-card:hover .menu-image {
  transform: scale(1.05);
}

.menu-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
}

.price-chip {
  background: rgba(255, 107, 53, 0.9) !important;
  color: white !important;
  font-weight: 600;
}

.menu-item-title {
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

.menu-item-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.about-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #F0F0F0 0%, #E0E0E0 100%);
}

.about-content {
  padding-right: 40px;
}

.about-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 24px;
}

.about-features {
  margin-bottom: 32px;
}

.about-feature {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: #333;
}

.about-image-wrapper {
  position: relative;
}

.about-image {
  position: relative;
  z-index: 1;
}

.about-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 53, 0.3), rgba(247, 147, 30, 0.3));
  border-radius: 16px;
}

.testimonials-section {
  padding: 80px 0;
  background: white;
}

.testimonial-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-rating {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.testimonial-text {
  font-style: italic;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.testimonial-author {
  border-top: 1px solid #eee;
  padding-top: 16px;
}

.testimonial-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.testimonial-location {
  color: #666;
  font-size: 0.9rem;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-description {
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .about-content {
    padding-right: 0;
    margin-bottom: 40px;
  }
}
</style> 