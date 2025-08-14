<template>
  <div>
    <!-- Hero Section -->
    <section class="catering-hero">
      <v-container>
        <div class="text-center text-white">
          <h1 class="display-font text-h2 font-weight-bold mb-4">Catering Services</h1>
          <p class="text-h5">Bring authentic Indian flavors to your next event</p>
        </div>
      </v-container>
    </section>

    <!-- Catering Overview -->
    <section class="section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="section-title text-left">Perfect for Any Occasion</h2>
            <p class="text-body-1 mb-4">
              From intimate gatherings to large corporate events, our catering services bring 
              the authentic taste of India to your venue.
            </p>
            <div class="features-list">
              <div class="feature-item">
                <v-icon color="primary" class="me-3">mdi-check-circle</v-icon>
                <span>Customizable menu options</span>
              </div>
              <div class="feature-item">
                <v-icon color="primary" class="me-3">mdi-check-circle</v-icon>
                <span>Professional setup and service</span>
              </div>
              <div class="feature-item">
                <v-icon color="primary" class="me-3">mdi-check-circle</v-icon>
                <span>Dietary accommodation</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="catering-image-card" elevation="4">
              <v-img src="/catering-hero.jpg" height="400" cover></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Catering Packages -->
    <section class="section bg-light">
      <v-container>
        <h2 class="section-title">Catering Packages</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="pkg in packages" :key="pkg.id">
            <v-card class="package-card" elevation="3">
              <v-card-title class="text-center">
                <h3 class="text-h5">{{ pkg.name }}</h3>
                <div class="package-price">${{ pkg.price }}/person</div>
              </v-card-title>
              <v-card-text>
                <ul class="package-features">
                  <li v-for="feature in pkg.features" :key="feature">{{ feature }}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Booking Form -->
    <section class="section">
      <v-container>
        <h2 class="section-title">Request a Quote</h2>
        <v-row>
          <v-col cols="12" lg="8" class="mx-auto">
            <v-card class="booking-form" elevation="4">
              <v-card-title class="text-h4 text-center">Catering Inquiry</v-card-title>
              <v-form @submit.prevent="submitForm" v-model="formValid">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.firstName" label="First Name *" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.lastName" label="Last Name *" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.email" label="Email *" type="email" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.phone" label="Phone *" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.eventDate" label="Event Date *" type="date" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.guestCount" label="Number of Guests *" type="number" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea v-model="form.details" label="Event Details" rows="4"></v-textarea>
                  </v-col>
                </v-row>
                <v-btn type="submit" color="primary" size="large" block :disabled="!formValid">
                  Submit Inquiry
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Catering',
  data() {
    return {
      formValid: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        details: ''
      },
      packages: [
        {
          id: 1,
          name: 'Essential Package',
          price: '18',
          features: ['3 main dishes', '2 side dishes', 'Rice & bread', 'Basic setup']
        },
        {
          id: 2,
          name: 'Premium Package',
          price: '25',
          features: ['4 main dishes', '3 side dishes', 'Rice, bread & dessert', 'Professional setup']
        },
        {
          id: 3,
          name: 'Luxury Package',
          price: '35',
          features: ['5 main dishes', '4 side dishes', 'Full service', 'Custom menu options']
        }
      ]
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
    }
  }
}
</script>

<style scoped>
.catering-hero {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  padding: 120px 0 80px;
}

.catering-image-card {
  border-radius: 15px;
  overflow: hidden;
}

.features-list {
  margin: 24px 0;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.bg-light {
  background-color: #f8f9fa;
}

.package-card {
  border-radius: 15px;
  height: 100%;
  transition: all 0.3s ease;
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.package-price {
  font-size: 24px;
  color: #FF6B35;
  font-weight: 700;
  margin: 16px 0;
}

.package-features {
  list-style: none;
  padding: 0;
}

.package-features li {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.package-features li:last-child {
  border-bottom: none;
}

.booking-form {
  padding: 40px;
  border-radius: 15px;
}

@media (max-width: 768px) {
  .catering-hero {
    padding: 100px 0 60px;
  }
  
  .booking-form {
    padding: 24px;
  }
}
</style> 