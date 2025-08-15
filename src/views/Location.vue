<template>
  <div>
    <!-- Hero Section -->
    <section class="location-hero">
      <v-container>
        <div class="text-center text-white">
          <h1 class="display-font text-h2 font-weight-bold mb-4">Find Us</h1>
          <p class="text-h5">
            Discover where to find our delicious food truck
          </p>
        </div>
      </v-container>
    </section>

    <!-- Current Location Section -->
    <section class="section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="slide-in-left">
            <h2 class="section-title text-left">Current Location</h2>
            <div class="location-card mb-4">
              <div class="d-flex align-center mb-3">
                <v-icon color="primary" size="32" class="me-3">mdi-map-marker</v-icon>
                <h3 class="text-h5 font-weight-bold mb-0">Downtown Sioux Falls</h3>
              </div>
              <p class="text-body-1 mb-2">123 Main Street</p>
              <p class="text-body-1 mb-3">Sioux Falls, SD 57104</p>
              
              <div class="d-flex flex-wrap gap-3 mb-4">
                <v-chip
                  color="success"
                  variant="outlined"
                  prepend-icon="mdi-clock"
                >
                  Open Now
                </v-chip>
                <v-chip
                  color="primary"
                  variant="outlined"
                  prepend-icon="mdi-phone"
                >
                  605-592-0819
                </v-chip>
              </div>
              
              <v-btn
                color="primary"
                size="large"
                class="me-3"
                @click="getDirections"
              >
                <v-icon class="me-2">mdi-directions</v-icon>
                Get Directions
              </v-btn>
              
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                @click="callUs"
              >
                <v-icon class="me-2">mdi-phone</v-icon>
                Call Us
              </v-btn>
            </div>
            
            <div class="location-info">
              <h4 class="text-h6 font-weight-bold mb-3">Today's Schedule</h4>
              <div class="schedule-item">
                <span class="time">11:00 AM - 2:00 PM</span>
                <span class="location">Downtown Sioux Falls</span>
              </div>
              <div class="schedule-item">
                <span class="time">5:00 PM - 9:00 PM</span>
                <span class="location">Falls Park Area</span>
              </div>
            </div>
            
            <!-- Harrisburg Location Card -->
            <div class="location-card mb-4 mt-4">
              <div class="d-flex align-center mb-3">
                <v-icon color="secondary" size="32" class="me-3">mdi-map-marker</v-icon>
                <h3 class="text-h5 font-weight-bold mb-0">Harrisburg Area</h3>
              </div>
              <p class="text-body-1 mb-2">101 Harrisburg Main St</p>
              <p class="text-body-1 mb-3">Harrisburg, SD 57032</p>
              
              <div class="d-flex flex-wrap gap-3 mb-4">
                <v-chip
                  color="success"
                  variant="outlined"
                  prepend-icon="mdi-clock"
                >
                  Open Now
                </v-chip>
                <v-chip
                  color="secondary"
                  variant="outlined"
                  prepend-icon="mdi-phone"
                >
                  605-592-0819
                </v-chip>
              </div>
              
              <v-btn
                color="secondary"
                size="large"
                class="me-3"
                @click="getDirectionsToHarrisburg"
              >
                <v-icon class="me-2">mdi-directions</v-icon>
                Get Directions
              </v-btn>
            </div>
            
            <!-- Order Timings Section -->
            <div class="order-timings mt-6">
              <h4 class="text-h6 font-weight-bold mb-3 text-decoration-underline">ORDER TIMINGS</h4>
              <div class="timing-item mb-2">
                <span class="timing-label font-weight-medium">BREAKFAST:</span>
                <span class="timing-value">NIGHT BEFORE</span>
              </div>
              <div class="timing-item mb-2">
                <span class="timing-label font-weight-medium">LUNCH:</span>
                <span class="timing-value">BEFORE 9AM</span>
              </div>
              <div class="timing-item mb-2">
                <span class="timing-label font-weight-medium">DINNER:</span>
                <span class="timing-value">BEFORE 3PM</span>
              </div>
            </div>
          </v-col>
          
          <v-col cols="12" md="6" class="slide-in-right">
            <v-card class="map-card" elevation="4">
              <v-card-title class="text-h5 font-weight-bold mb-3">
                Interactive Map
              </v-card-title>
                             <div class="google-map-container">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2685394414416!2d-96.7003!3d43.5446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMyJzQwLjYiTiA5NsKwNDInMDEuMSJX!5e0!3m2!1sen!2sus!4v1234567890!5m1!1e1"
                   width="100%"
                   height="400"
                   style="border:0; border-radius: 8px;"
                   allowfullscreen=""
                   loading="lazy"
                   referrerpolicy="no-referrer-when-downgrade"
                   title="Rice & Spice Food Truck Locations - Sioux Falls & Harrisburg, SD"
                 ></iframe>
               </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Weekly Schedule Section -->
    <section class="section bg-light">
      <v-container>
        <h2 class="section-title">Weekly Schedule</h2>
        <p class="section-subtitle">
          Find us at these locations throughout the week
        </p>
        
        <v-row>
          <v-col cols="12">
            <v-tabs
              v-model="activeTab"
              color="primary"
              align-tabs="center"
              class="mb-6"
            >
              <v-tab
                v-for="day in weekSchedule"
                :key="day.name"
                :value="day.name"
                class="text-capitalize"
              >
                {{ day.name }}
              </v-tab>
            </v-tabs>
            
            <v-window v-model="activeTab">
              <v-window-item
                v-for="day in weekSchedule"
                :key="day.name"
                :value="day.name"
              >
                <v-card class="schedule-card" elevation="2">
                  <v-card-text class="pa-6">
                    <h3 class="text-h5 font-weight-bold mb-4 text-center">
                      {{ day.name }} Schedule
                    </h3>
                    
                    <div class="schedule-timeline">
                      <div
                        v-for="(location, index) in day.locations"
                        :key="index"
                        class="timeline-item"
                      >
                        <div class="timeline-time">
                          <v-icon color="primary" class="me-2">mdi-clock</v-icon>
                          {{ location.time }}
                        </div>
                        <div class="timeline-content">
                          <h4 class="text-h6 font-weight-bold mb-1">
                            {{ location.name }}
                          </h4>
                          <p class="text-body-2 text-grey mb-2">
                            {{ location.address }}
                          </p>
                          <div class="d-flex flex-wrap gap-2">
                            <v-chip
                              v-if="location.status === 'open'"
                              color="success"
                              size="small"
                            >
                              Open Now
                            </v-chip>
                            <v-chip
                              v-else
                              color="grey"
                              size="small"
                            >
                              Closed
                            </v-chip>
                            <v-chip
                              v-if="location.special"
                              color="accent"
                              size="small"
                            >
                              Special Event
                            </v-chip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Popular Locations Section -->
    <section class="section">
      <v-container>
        <h2 class="section-title">Popular Locations</h2>
        <p class="section-subtitle">
          Our most visited spots around the city
        </p>
        
        <v-row>
          <v-col
            v-for="location in popularLocations"
            :key="location.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-4"
          >
            <v-card
              class="location-card-popular h-100"
              elevation="3"
              @click="selectLocation(location)"
            >
              <v-img
                :src="location.image"
                height="200"
                cover
                class="location-image"
              >
                <div class="location-overlay">
                  <v-chip
                    :color="location.status === 'open' ? 'success' : 'grey'"
                    class="status-chip"
                  >
                    {{ location.status === 'open' ? 'Open' : 'Closed' }}
                  </v-chip>
                </div>
              </v-img>
              
              <v-card-text class="pa-4">
                <h3 class="text-h6 font-weight-bold mb-2">
                  {{ location.name }}
                </h3>
                <p class="text-body-2 text-grey mb-3">
                  {{ location.address }}
                </p>
                
                <div class="d-flex justify-space-between align-center">
                  <div class="location-details">
                    <p class="text-caption text-grey mb-1">
                      <v-icon size="16" class="me-1">mdi-clock</v-icon>
                      {{ location.hours }}
                    </p>
                    <p class="text-caption text-grey">
                      <v-icon size="16" class="me-1">mdi-phone</v-icon>
                      {{ location.phone }}
                    </p>
                  </div>
                  
                  <v-btn
                    icon
                    color="primary"
                    variant="outlined"
                    size="small"
                    @click.stop="getDirectionsToLocation(location)"
                  >
                    <v-icon>mdi-directions</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Special Events Section -->
    <section class="section bg-light">
      <v-container>
        <h2 class="section-title">Special Events & Catering</h2>
        <p class="section-subtitle">
          Book us for your next event or special occasion
        </p>
        
        <v-row>
          <v-col cols="12" md="6" class="mb-4">
            <v-card class="event-card" elevation="3">
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <v-icon color="primary" size="32" class="me-3">mdi-calendar-star</v-icon>
                  <h3 class="text-h5 font-weight-bold mb-0">Private Events</h3>
                </div>
                <p class="text-body-1 mb-4">
                  Host your next party, corporate event, or celebration with our food truck. 
                  We bring the authentic Indian flavors to your venue.
                </p>
                <v-btn
                  color="primary"
                  variant="outlined"
                  to="/catering"
                >
                  Learn More
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="6" class="mb-4">
            <v-card class="event-card" elevation="3">
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <v-icon color="primary" size="32" class="me-3">mdi-food-truck</v-icon>
                  <h3 class="text-h5 font-weight-bold mb-0">Food Festivals</h3>
                </div>
                <p class="text-body-1 mb-4">
                  Catch us at local food festivals, farmers markets, and community events 
                  throughout the year. Follow our social media for updates!
                </p>
                <v-btn
                  color="primary"
                  variant="outlined"
                  href="#"
                  target="_blank"
                >
                  Follow Us
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="section" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);">
      <v-container>
        <div class="text-center text-white">
          <h2 class="section-title text-white mb-4">Hungry? Find Us Today!</h2>
          <p class="text-h6 mb-6">
            Check our current location and come enjoy authentic Indian cuisine
          </p>
          <div class="d-flex flex-column flex-sm-row gap-4 justify-center">
            <v-btn
              size="x-large"
              color="white"
              class="text-primary font-weight-bold"
              @click="getDirections"
            >
              Get Directions
            </v-btn>
            <v-btn
              size="x-large"
              variant="outlined"
              color="white"
              class="font-weight-bold"
              @click="callUs"
            >
              Call Now
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      activeTab: 'monday',
      weekSchedule: {
        monday: {
          name: 'Monday',
          locations: [
            {
              time: '11:00 AM - 2:00 PM',
              name: 'Downtown Sioux Falls',
              address: '123 Main Street, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 9:00 PM',
              name: 'Falls Park Area',
              address: '456 Falls Park Drive, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            }
          ]
        },
        tuesday: {
          name: 'Tuesday',
          locations: [
            {
              time: '11:00 AM - 2:00 PM',
              name: 'Sioux Falls Campus',
              address: '789 College Blvd, Sioux Falls, SD 57105',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 9:00 PM',
              name: 'Downtown Sioux Falls',
              address: '123 Main Street, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            }
          ]
        },
        wednesday: {
          name: 'Wednesday',
          locations: [
            {
              time: '11:00 AM - 2:00 PM',
              name: 'Sioux Falls Business District',
              address: '321 Corporate Ave, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 9:00 PM',
              name: 'Falls Park Area',
              address: '456 Falls Park Drive, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            }
          ]
        },
        thursday: {
          name: 'Thursday',
          locations: [
            {
              time: '11:00 AM - 2:00 PM',
              name: 'Downtown Sioux Falls',
              address: '123 Main Street, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 9:00 PM',
              name: 'Sioux Falls Campus',
              address: '789 College Blvd, Sioux Falls, SD 57105',
              status: 'open',
              special: false
            }
          ]
        },
        friday: {
          name: 'Friday',
          locations: [
            {
              time: '11:00 AM - 2:00 PM',
              name: 'Sioux Falls Business District',
              address: '321 Corporate Ave, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 10:00 PM',
              name: 'Downtown Sioux Falls',
              address: '123 Main Street, Sioux Falls, SD 57104',
              status: 'open',
              special: true
            }
          ]
        },
        saturday: {
          name: 'Saturday',
          locations: [
            {
              time: '12:00 PM - 4:00 PM',
              name: 'Harrisburg Area',
              address: '101 Harrisburg Main St, Harrisburg, SD 57032',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 10:00 PM',
              name: 'Downtown Sioux Falls',
              address: '123 Main Street, Sioux Falls, SD 57104',
              status: 'open',
              special: true
            }
          ]
        },
        sunday: {
          name: 'Sunday',
          locations: [
            {
              time: '12:00 PM - 4:00 PM',
              name: 'Downtown Sioux Falls',
              address: '123 Main Street, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            },
            {
              time: '5:00 PM - 9:00 PM',
              name: 'Falls Park Area',
              address: '456 Falls Park Drive, Sioux Falls, SD 57104',
              status: 'open',
              special: false
            }
          ]
        }
      },
             popularLocations: [
         {
           id: 1,
           name: 'Downtown Sioux Falls',
           address: '123 Main Street, Sioux Falls, SD 57104',
           hours: '11:00 AM - 9:00 PM',
           phone: '(555) 123-4567',
           status: 'closed',
           image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop&crop=center'
         },
         {
           id: 2,
           name: 'Sioux Falls Campus',
           address: '789 College Blvd, Sioux Falls, SD 57105',
           hours: '11:00 AM - 2:00 PM',
           phone: '(555) 123-4567',
           status: 'closed',
           image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop&crop=center'
         },
         {
           id: 3,
           name: 'Harrisburg Area',
           address: '101 Harrisburg Main St, Harrisburg, SD 57032',
           hours: '11:00 AM - 8:00 PM',
           phone: '(555) 123-4567',
           status: 'open',
           image: '/images/house.jpg'
         }
       ]
    }
  },
  methods: {
    getDirections() {
      // Open Google Maps with current location
      const address = '123 Main Street, Sioux Falls, SD 57104';
      const encodedAddress = encodeURIComponent(address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    },
    
    getDirectionsToHarrisburg() {
      // Open Google Maps with Harrisburg location
      const address = '101 Harrisburg Main St, Harrisburg, SD 57032';
      const encodedAddress = encodeURIComponent(address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    },
    
    callUs() {
      window.open('tel:605-592-0819', '_self');
    },
    
    selectLocation(location) {
      // Handle location selection
      console.log('Selected location:', location);
    },
    
    getDirectionsToLocation(location) {
      const encodedAddress = encodeURIComponent(location.address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
  }
}
</script>

<style scoped>
.location-hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.location-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/location-bg.jpg') center/cover;
  opacity: 0.1;
  z-index: 1;
}

.location-hero .v-container {
  position: relative;
  z-index: 2;
}

.location-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.location-info {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.schedule-item:last-child {
  border-bottom: none;
}

.time {
  font-weight: 600;
  color: #1e3a8a;
}

.location {
  color: #666;
  text-align: right;
}

.order-timings {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #1e3a8a;
}

.timing-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.timing-label {
  color: #333;
  min-width: 100px;
}

.timing-value {
  color: #1e3a8a;
  font-weight: 600;
  text-align: right;
}

.map-card {
  border-radius: 12px;
  overflow: hidden;
}

.google-map-container {
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  border-radius: 8px;
  overflow: hidden;
}

.google-map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}



.bg-light {
  background-color: #f8f9fa;
}

.schedule-card {
  border-radius: 12px;
}

.schedule-timeline {
  max-width: 600px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

.timeline-time {
  min-width: 120px;
  font-weight: 600;
  color: #1e3a8a;
  display: flex;
  align-items: center;
}

.timeline-content {
  flex: 1;
  margin-left: 16px;
}

.location-card-popular {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.location-card-popular:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.location-image {
  position: relative;
}

.location-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
}

.status-chip {
  font-weight: 600;
}

.location-details {
  flex: 1;
}

.event-card {
  border-radius: 12px;
  height: 100%;
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .location-hero {
    padding: 100px 0 60px;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline-time {
    min-width: auto;
    margin-bottom: 8px;
  }
  
  .timeline-content {
    margin-left: 0;
  }
  
  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .location {
    text-align: left;
  }
}
</style> 