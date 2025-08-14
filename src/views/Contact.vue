<template>
  <div>
    <!-- Hero Section -->
    <section class="contact-hero">
      <v-container>
        <div class="text-center text-white">
          <h1 class="display-font text-h2 font-weight-bold mb-4">Get in Touch</h1>
          <p class="text-h5">
            We'd love to hear from you and answer any questions
          </p>
        </div>
      </v-container>
    </section>

    <!-- Contact Information Section -->
    <section class="section">
      <v-container>
        <v-row>
          <!-- Contact Form -->
          <v-col cols="12" lg="8" class="mb-6">
            <v-card class="contact-form-card" elevation="4">
              <v-card-title class="text-h4 font-weight-bold mb-4">
                Send us a Message
              </v-card-title>
              
              <v-form @submit.prevent="submitForm" v-model="formValid">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.firstName"
                      label="First Name *"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.lastName"
                      label="Last Name *"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.email"
                      label="Email *"
                      :rules="[rules.required, rules.email]"
                      variant="outlined"
                      type="email"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.phone"
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                    ></v-text-field>
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="form.subject"
                      label="Subject *"
                      :items="subjectOptions"
                      :rules="[rules.required]"
                      variant="outlined"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.message"
                      label="Message *"
                      :rules="[rules.required, rules.minLength]"
                      variant="outlined"
                      rows="5"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="form.newsletter"
                      label="Subscribe to our newsletter for updates and special offers"
                      color="primary"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      type="submit"
                      color="primary"
                      size="large"
                      :loading="loading"
                      :disabled="!formValid"
                      class="custom-btn"
                      block
                    >
                      <v-icon v-if="!loading" class="me-2">mdi-send</v-icon>
                      <span v-if="!loading">Send Message</span>
                      <span v-else>Sending...</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
          
          <!-- Contact Information -->
          <v-col cols="12" lg="4">
            <v-card class="contact-info-card h-100" elevation="4">
              <v-card-title class="text-h5 font-weight-bold mb-4">
                Contact Information
              </v-card-title>
              
              <div class="contact-info-item mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="me-3">mdi-phone</v-icon>
                  <h4 class="text-h6 mb-0">Phone</h4>
                </div>
                <p class="text-body-1 ml-8">605-592-0819</p>
                <p class="text-caption text-grey ml-8">Currently doing Pickup and delivery</p>
              </div>
              
              <div class="contact-info-item mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="me-3">mdi-email</v-icon>
                  <h4 class="text-h6 mb-0">Email</h4>
                </div>
                <p class="text-body-1 ml-8">info@riceandspice.com</p>
                <p class="text-caption text-grey ml-8">We'll respond within 24 hours</p>
              </div>
              
              <div class="contact-info-item mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="me-3">mdi-map-marker</v-icon>
                  <h4 class="text-h6 mb-0">Location</h4>
                </div>
                <p class="text-body-1 ml-8">Downtown Food Truck Park</p>
                <p class="text-caption text-grey ml-8">123 Main Street, City, State 12345</p>
              </div>
              
              <div class="contact-info-item mb-4">
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="me-3">mdi-clock</v-icon>
                  <h4 class="text-h6 mb-0">Hours</h4>
                </div>
                <p class="text-body-1 ml-8">Monday - Sunday</p>
                <p class="text-caption text-grey ml-8">11:00 AM - 9:00 PM</p>
              </div>
              
              <v-divider class="my-4"></v-divider>
              
              <!-- Delivery & Pickup Policies -->
              <div class="delivery-policies mb-4">
                <h4 class="text-h6 font-weight-bold mb-3">Service Information</h4>
                
                <div class="policy-item mb-3">
                  <div class="d-flex align-center mb-2">
                    <v-icon color="error" class="me-2">mdi-truck-delivery</v-icon>
                    <span class="text-body-2 font-weight-medium">Delivery</span>
                  </div>
                  <p class="text-caption text-grey ml-8">Minimum order amount is $100 due to time constraints.</p>
                </div>
                
                <div class="policy-item mb-3">
                  <div class="d-flex align-center mb-2">
                    <v-icon color="success" class="me-2">mdi-shopping-bag</v-icon>
                    <span class="text-body-2 font-weight-medium">Pickup</span>
                  </div>
                  <p class="text-caption text-grey ml-8">No minimum – we happily accept all pickup orders of any amount!</p>
                </div>
              </div>
              
              <v-divider class="my-4"></v-divider>
              
              <div class="text-center">
                <h4 class="text-h6 font-weight-bold mb-3">Follow Us</h4>
                <div class="d-flex justify-center gap-3">
                  <v-btn
                    icon
                    color="primary"
                    variant="outlined"
                    size="large"
                    href="#"
                    target="_blank"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="primary"
                    variant="outlined"
                    size="large"
                    href="#"
                    target="_blank"
                  >
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="primary"
                    variant="outlined"
                    size="large"
                    href="#"
                    target="_blank"
                  >
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-light">
      <v-container>
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">
          Find answers to common questions about our food truck
        </p>
        
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="faq in faqs"
                :key="faq.question"
                class="mb-2"
              >
                <v-expansion-panel-title class="text-h6 font-weight-bold">
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="text-body-1">
                  {{ faq.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="section" style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);">
      <v-container>
        <div class="text-center text-white">
          <h2 class="section-title text-white mb-4">Ready to Experience Our Food?</h2>
          <p class="text-h6 mb-6">
            Visit our food truck today or contact us for catering services
          </p>
          <div class="d-flex flex-column flex-sm-row gap-4 justify-center">
            <v-btn
              size="x-large"
              color="white"
              class="text-primary font-weight-bold"
              to="/location"
            >
              Find Our Location
            </v-btn>
            <v-btn
              size="x-large"
              variant="outlined"
              color="white"
              class="font-weight-bold"
              to="/catering"
            >
              Catering Services
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Success Dialog -->
    <v-dialog
      v-model="showSuccessDialog"
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-text class="text-center pa-6">
          <v-icon
            color="success"
            size="64"
            class="mb-4"
          >
            mdi-check-circle
          </v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Message Sent!</h3>
          <p class="text-body-1">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            color="primary"
            block
            @click="showSuccessDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formValid: false,
      loading: false,
      showSuccessDialog: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      },
      subjectOptions: [
        'General Inquiry',
        'Menu Questions',
        'Catering Request',
        'Feedback',
        'Partnership',
        'Other'
      ],
      rules: {
        required: v => !!v || 'This field is required',
        email: v => /.+@.+\..+/.test(v) || 'Please enter a valid email',
        minLength: v => v.length >= 10 || 'Message must be at least 10 characters'
      },
      faqs: [
        {
          question: 'What are your operating hours?',
          answer: 'We operate Monday through Sunday from 11:00 AM to 9:00 PM. However, hours may vary based on weather conditions and special events.'
        },
        {
          question: 'Do you offer vegetarian options?',
          answer: 'Yes! We have a wide variety of vegetarian dishes including paneer dishes, vegetable curries, and traditional Indian vegetarian specialties.'
        },
        {
          question: 'Can you accommodate food allergies?',
          answer: 'We do our best to accommodate food allergies. Please inform our staff about any allergies when ordering, and we\'ll guide you to safe options.'
        },
        {
          question: 'Do you offer catering services?',
          answer: 'Yes, we provide catering services for events, parties, and corporate functions. Please contact us at least 48 hours in advance for catering orders.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit cards, debit cards, and mobile payment apps like Apple Pay and Google Pay for your convenience.'
        },
        {
          question: 'How can I track your location?',
          answer: 'Follow us on social media for real-time location updates, or check our website\'s location page for our current schedule and locations.'
        }
      ]
    }
  },
  methods: {
    async submitForm() {
      if (!this.formValid) return;
      
      this.loading = true;
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        this.showSuccessDialog = true;
        
        // Reset form
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          newsletter: false
        };
        
        this.formValid = false;
        
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (show error message)
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/contact-bg.jpg') center/cover;
  opacity: 0.1;
  z-index: 1;
}

.contact-hero .v-container {
  position: relative;
  z-index: 2;
}

.contact-form-card {
  padding: 40px;
  border-radius: 15px;
}

.contact-info-card {
  padding: 30px;
  border-radius: 15px;
}

.contact-info-item {
  transition: all 0.3s ease;
}

.contact-info-item:hover {
  transform: translateX(10px);
}

.bg-light {
  background-color: #f8f9fa;
}

.ml-8 {
  margin-left: 32px;
}

.v-expansion-panels {
  background: transparent;
}

.v-expansion-panel {
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.v-expansion-panel:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 100px 0 60px;
  }
  
  .contact-form-card {
    padding: 24px;
  }
  
  .contact-info-card {
    padding: 24px;
  }
  
  .ml-8 {
    margin-left: 24px;
  }
}
</style> 