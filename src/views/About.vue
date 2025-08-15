<template>
  <div>
    <!-- Hero Section -->
    <section class="about-hero">
      <v-container>
        <div class="text-center text-white">
          <h1 class="display-font text-h2 font-weight-bold mb-4">Our Story</h1>
          <p class="text-h5">
            From family recipes to your neighborhood food truck
          </p>
        </div>
      </v-container>
    </section>

    <!-- Our Story Section -->
    <section class="section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="slide-in-left">
            <h2 class="section-title text-left">The Rice & Spice Journey</h2>
            
            <!-- Business Motto -->
            <div class="business-motto mb-6">
              <p class="motto-text">
                "No Preservatives, No Food Color, Just Real Food, Made from Scratch — the Way Nature Intended."
              </p>
            </div>
            
            <!-- Business Tagline -->
            <div class="business-tagline mb-6">
              <h3 class="tagline-title">AUTHENTIC TASTE OF INDIAN HOME</h3>
            </div>
            
            <p class="text-body-1 mb-4">
              Rice & Spice was born from a deep-rooted passion for authentic Indian cuisine and a desire to bring 
              the rich, diverse flavors of India to communities across the city. Our story begins in the kitchen 
              of our founder's grandmother, where traditional recipes were passed down through generations.
            </p>
            <p class="text-body-1 mb-4">
              What started as a small family catering business has evolved into a beloved food truck that serves 
              hundreds of customers daily. We believe that great food has the power to bring people together, 
              create lasting memories, and transport you to distant lands through every bite.
            </p>
            <p class="text-body-1 mb-4">
              Our commitment to authenticity means we never compromise on quality. Every spice, every ingredient, 
              and every cooking technique is carefully selected and executed to ensure that every dish tastes 
              exactly as it would in the heart of India.
            </p>
          </v-col>
          
          <v-col cols="12" md="6" class="slide-in-right">
            <v-img
              src="/images/about.jpg"
              height="500"
              cover
              class="rounded-lg"
              style="box-shadow: 0 15px 35px rgba(0,0,0,0.2);"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Values Section -->
    <section class="section bg-light">
      <v-container>
        <h2 class="section-title">Our Core Values</h2>
        <p class="section-subtitle">
          The principles that guide everything we do at Rice & Spice
        </p>
        
        <v-row>
          <v-col
            v-for="value in values"
            :key="value.title"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card
              class="pa-6 h-100 text-center hover-card"
              elevation="2"
              color="transparent"
            >
              <v-icon
                :icon="value.icon"
                size="64"
                color="primary"
                class="mb-4"
              ></v-icon>
              <h3 class="text-h5 font-weight-bold mb-3">{{ value.title }}</h3>
              <p class="text-body-1">{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Team Section -->
    <section class="section">
      <v-container>
        <h2 class="section-title">Meet Our Team</h2>
        <p class="section-subtitle">
          The passionate individuals behind every delicious meal
        </p>
        
        <v-row>
          <v-col
            v-for="member in team"
            :key="member.name"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card
              class="team-card h-100 text-center hover-card"
              elevation="4"
            >
              <v-img
                :src="member.image"
                height="300"
                cover
                class="team-image"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              
              <v-card-text class="pa-4">
                <h3 class="text-h5 font-weight-bold mb-2">{{ member.name }}</h3>
                <p class="text-subtitle-1 text-primary mb-3">{{ member.role }}</p>
                <p class="text-body-2">{{ member.bio }}</p>
                
                <div class="d-flex justify-center mt-4">
                  <v-icon
                    v-for="specialty in member.specialties"
                    :key="specialty"
                    :icon="specialty.icon"
                    size="20"
                    color="primary"
                    class="mx-1"
                  ></v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Commitment Section -->
    <section class="section bg-light">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="slide-in-left">
            <h2 class="section-title text-left">Our Commitment to Quality</h2>
            <div class="commitment-item mb-4">
              <div class="d-flex align-center mb-2">
                <v-icon color="success" class="me-3">mdi-check-circle</v-icon>
                <h4 class="text-h6 mb-0">Fresh Ingredients Daily</h4>
              </div>
              <p class="text-body-2 ml-8">We source only the freshest ingredients from local suppliers and farmers markets.</p>
            </div>
            
            <div class="commitment-item mb-4">
              <div class="d-flex align-center mb-2">
                <v-icon color="success" class="me-3">mdi-check-circle</v-icon>
                <h4 class="text-h6 mb-0">Traditional Recipes</h4>
              </div>
              <p class="text-body-2 ml-8">Every dish follows authentic recipes passed down through generations.</p>
            </div>
            
            <div class="commitment-item mb-4">
              <div class="d-flex align-center mb-2">
                <v-icon color="success" class="me-3">mdi-check-circle</v-icon>
                <h4 class="text-h6 mb-0">Hygiene Standards</h4>
              </div>
              <p class="text-body-2 ml-8">We maintain the highest standards of cleanliness and food safety.</p>
            </div>
            
            <div class="commitment-item mb-4">
              <div class="d-flex align-center mb-2">
                <v-icon color="success" class="me-3">mdi-check-circle</v-icon>
                <h4 class="text-h6 mb-0">Customer Satisfaction</h4>
              </div>
              <p class="text-body-2 ml-8">Your satisfaction is our top priority, and we welcome feedback to improve.</p>
            </div>
          </v-col>
          
          <v-col cols="12" md="6" class="slide-in-right">
            <v-img
              src="/images/quality.jpg"
              height="500"
              cover
              class="rounded-lg"
              style="box-shadow: 0 15px 35px rgba(0,0,0,0.2);"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Awards & Recognition Section -->
    <section class="section">
      <v-container>
        <h2 class="section-title">Awards & Recognition</h2>
        <p class="section-subtitle">
          Celebrating our achievements and the trust of our community
        </p>
        
        <v-row>
          <v-col
            v-for="award in awards"
            :key="award.title"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card
              class="award-card h-100 text-center hover-card"
              elevation="3"
            >
              <v-icon
                :icon="award.icon"
                size="48"
                color="warning"
                class="mb-3"
              ></v-icon>
              <h3 class="text-h6 font-weight-bold mb-2">{{ award.title }}</h3>
              <p class="text-body-2 text-grey">{{ award.organization }}</p>
              <p class="text-caption text-grey">{{ award.year }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="section" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);">
      <v-container>
        <div class="text-center text-white">
          <h2 class="section-title text-white mb-4">Join Our Culinary Journey</h2>
          <p class="text-h6 mb-6">
            Experience the authentic flavors of India and become part of our growing family of satisfied customers.
          </p>
          <div class="d-flex flex-column flex-sm-row gap-4 justify-center">
            <v-btn
              size="x-large"
              color="white"
              class="text-primary font-weight-bold"
              to="/menu"
            >
              Explore Our Menu
            </v-btn>
            <v-btn
              size="x-large"
              variant="outlined"
              color="white"
              class="font-weight-bold"
              to="/contact"
            >
              Get in Touch
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      values: [
        {
          icon: 'mdi-heart',
          title: 'Passion for Food',
          description: 'We pour our hearts into every dish, ensuring that every bite tells a story of tradition and love.'
        },
        {
          icon: 'mdi-star',
          title: 'Quality Excellence',
          description: 'We never compromise on quality, using only the finest ingredients and maintaining the highest standards.'
        },
        {
          icon: 'mdi-handshake',
          title: 'Community First',
          description: 'We believe in building strong relationships with our customers and supporting our local community.'
        }
      ],
      team: [
        {
          name: 'Chef Lavanya Nellore',
          role: 'Head Chef & Founder',
          bio: 'With over 30 years of culinary experience, Chef Lavanya Nellore brings authentic Indian flavors to every dish. Her passion for traditional recipes and modern techniques has made Rice & Spice a household name.',
          image: '/images/lavanya.jpg',
          specialties: [
            { icon: 'mdi-food-fork-drink', name: 'Traditional Indian' },
            { icon: 'mdi-fire', name: 'Tandoori' },
            { icon: 'mdi-leaf', name: 'Vegetarian' }
          ]
        },
        {
          name: 'Vish Nellore',
          role: 'Sous Chef',
          bio: 'Vish Nellore specializes in Indian cuisine and has mastered the art of perfect spice combinations. His attention to detail ensures every dish is perfectly balanced.',
          image: '/images/293.JPG',
          specialties: [
            { icon: 'mdi-food-fork-drink', name: 'North Indian' },
            { icon: 'mdi-food-variant', name: 'Spice Master' },
            { icon: 'mdi-bread-slice', name: 'Bread Making' }
          ]
        },
        {
          name: 'Venku Reddy Nellore',
          role: 'Kitchen Manager',
          bio: 'Venku Reddy ensures smooth operations and maintains our high standards of quality and hygiene. His organizational skills keep our kitchen running like a well-oiled machine.',
          image: '/images/500.JPG',
          specialties: [
            { icon: 'mdi-cog', name: 'Operations' },
            { icon: 'mdi-shield-check', name: 'Quality Control' },
            { icon: 'mdi-account-group', name: 'Team Management' }
          ]
        }
      ],
      awards: [
        {
          title: 'Best Food Truck 2023',
          organization: 'City Food Awards',
          year: '2023',
          icon: 'mdi-trophy'
        },
        {
          title: 'Excellence in Indian Cuisine',
          organization: 'Culinary Institute',
          year: '2022',
          icon: 'mdi-medal'
        },
        {
          title: 'Community Choice Award',
          organization: 'Local Business Association',
          year: '2023',
          icon: 'mdi-heart'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/about-bg.jpg') center/cover;
  opacity: 0.1;
  z-index: 1;
}

.about-hero .v-container {
  position: relative;
  z-index: 2;
}

.bg-light {
  background-color: #f8f9fa;
}

.team-card {
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.team-image {
  border-radius: 8px 8px 0 0;
}

.award-card {
  transition: all 0.3s ease;
  padding: 24px;
}

.award-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.commitment-item {
  transition: all 0.3s ease;
}

.commitment-item:hover {
  transform: translateX(10px);
}

.ml-8 {
  margin-left: 32px;
}

.business-motto {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.motto-text {
  color: white;
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 500;
  margin: 0;
  line-height: 1.6;
}

.business-tagline {
  text-align: center;
  padding: 16px;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.1);
}

.tagline-title {
  color: #1e3a8a;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
}

@media (max-width: 768px) {
  .about-hero {
    padding: 100px 0 60px;
  }
  
  .ml-8 {
    margin-left: 24px;
  }
}
</style> 