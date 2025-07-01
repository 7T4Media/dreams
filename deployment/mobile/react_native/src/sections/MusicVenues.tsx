import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const venueTypes = [
  {
    icon: <Coffee size={28}  />,
    emoji: '🍺',
    title: 'Bars & Pubs',
    count: '2,450+',
    capacity: '50-200',
    description: 'Intimate venues perfect for acoustic sets and small band performances',
    avgBooking: '$200-800',
  },
  {
    icon: <Ionicons name="musical-notes" size={28} color="#8B5CF6" />,
    emoji: '🎭',
    title: 'Clubs & Lounges',
    count: '1,820+',
    capacity: '100-500',
    description: 'Energetic nightlife venues with professional sound systems',
    avgBooking: '$500-2,500',
  },
  {
    icon: <Building size={28}  />,
    emoji: '🏛️',
    title: 'Concert Halls',
    count: '890+',
    capacity: '500-5,000',
    description: 'Premium venues with exceptional acoustics for serious performances',
    avgBooking: '$2,000-15,000',
  },
  {
    icon: <Zap size={28}  />,
    emoji: '🏟️',
    title: 'Stadiums & Arenas',
    count: '340+',
    capacity: '5,000-80,000',
    description: 'Large-scale venues for major tours and festival performances',
    avgBooking: '$10,000-500,000',
  },
];

const bookingFeatures = [
  {
    icon: <Ionicons name="search" size={24} color="#8B5CF6" />,
    title: 'Smart Venue Matching',
    description: 'AI-powered algorithm matches artists with suitable venues based on genre, audience size, and budget',
  },
  {
    icon: <Ionicons name="calendar" size={24} color="#8B5CF6" />,
    title: 'Real-Time Availability',
    description: 'Live calendar integration showing available dates, pricing, and instant booking confirmation',
  },
  {
    icon: <DollarSign size={24}  />,
    title: 'Transparent Pricing',
    description: 'Clear pricing structure with no hidden fees, including equipment rental and technical support costs',
  },
  {
    icon: <Ionicons name="checkmark" Circle size={24}   />,
    title: 'Verified Reviews',
    description: 'Authentic reviews from both artists and venue owners to ensure quality experiences',
  },
];

const featuredVenues = [
  {
    name: 'The Blue Note',
    location: 'New York, NY',
    flag: '🇺🇸',
    type: 'Jazz Club',
    capacity: 200,
    rating: 4.8,
    price: '$800-1,500',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    features: ['Professional Sound', 'Live Recording', 'Full Bar', 'Parking'],
  },
  {
    name: 'Electric Ballroom',
    location: 'London, UK',
    flag: '🇬🇧',
    type: 'Concert Hall',
    capacity: 1500,
    rating: 4.9,
    price: '$3,000-8,000',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    features: ['Historic Venue', 'Premium Acoustics', 'VIP Areas', 'Merchandise Stand'],
  },
  {
    name: 'Sunset Strip Lounge',
    location: 'Los Angeles, CA',
    flag: '🇺🇸',
    type: 'Music Lounge',
    capacity: 350,
    rating: 4.7,
    price: '$1,200-3,500',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    features: ['Rooftop Terrace', 'LED Stage', 'Full Kitchen', 'Valet Parking'],
  },
];

const bookingStats = [
  {
    icon: <Ionicons name="map" Pin size={24}   />,
    value: '5,500+',
    label: 'Venues Worldwide',
  },
  {
    icon: <Ionicons name="calendar" size={24} color="#8B5CF6" />,
    value: '12K+',
    label: 'Bookings/Month',
  },
  {
    icon: <Ionicons name="people" size={24} color="#8B5CF6" />,
    value: '2.5M+',
    label: 'Audience Reached',
  },
  {
    icon: <Ionicons name="star" size={24} color="#8B5CF6" />,
    value: '4.8/5',
    label: 'Average Rating',
  },
];

export const MusicVenues: React.FC = () => {
  return (
    <View id="musicvenues" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="Music Venues & Talent Booking"
            subtitle="Connect with premium venues worldwide and book your next performance with confidence"
          />
        </ScrollAnimator>

        {/* Venue Types */}
        <View >
          {venueTypes.map((venue, index) => (
            <ScrollAnimator key={venue.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard >
                <View >{venue.emoji}</View>
                <View >
                  {venue.icon}
                  <Text >{venue.title}</Text>
                </View>
                <View >
                  {venue.count}
                </View>
                <View >
                  Capacity: {venue.capacity} people
                </View>
                <Text >{venue.description}</Text>
                <View >
                  {venue.avgBooking}
                </View>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </View>

        {/* Booking Features */}
        <ScrollAnimator>
          <View >
            <Text >Smart Booking Platform</Text>
            <View >
              {bookingFeatures.map((feature, index) => (
                <GlassMorphCard key={feature.title} >
                  <View >
                    {feature.icon}
                    <Text >{feature.title}</Text>
                  </View>
                  <Text >{feature.description}</Text>
                </GlassMorphCard>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Featured Venues */}
        <ScrollAnimator>
          <View >
            <Text >Featured Venues</Text>
            <View >
              {featuredVenues.map((venue, index) => (
                <ScrollAnimator key={venue.name} delay={index * 150} animation="fade-up">
                  <GlassMorphCard >
                    <View >
                      <Image 
                        source={venue.image} 
                        accessibilityLabel={venue.name}
                        
                      />
                      <View >
                        {venue.flag} {venue.type}
                      </View>
                    </View>
                    
                    <View >
                      <Text >{venue.name}</Text>
                      <View >
                        <Ionicons name="star" size={14} color="#8B5CF6" />
                        <Text >{venue.rating}</Text>
                      </View>
                    </View>
                    
                    <View >
                      <Ionicons name="map" Pin size={14}   />
                      <Text>{venue.location}</Text>
                      <Ionicons name="people" size={14} color="#8B5CF6" />
                      <Text>{venue.capacity}</Text>
                    </View>
                    
                    <View >{venue.price}</View>
                    
                    <View >
                      {venue.features.map((feature, idx) => (
                        <View key={idx} >
                          <Ionicons name="checkmark" Circle size={12}   />
                          <Text>{feature}</Text>
                        </View>
                      ))}
                    </View>
                    
                    <TouchableOpacity >
                      Book Now
                    </TouchableOpacity>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Platform Stats */}
        <ScrollAnimator animation="fade-up">
          <View >
            <Text >Platform Performance</Text>
            <View >
              {bookingStats.map((stat, index) => (
                <View key={stat.label} >
                  <View >
                    {stat.icon}
                  </View>
                  <View >
                    {stat.value}
                  </View>
                  <View >{stat.label}</View>
                </View>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* How It Works */}
        <View >
          <ScrollAnimator animation="fade-right">
            <View>
              <Text >How Booking Works</Text>
              <View >
                <View >
                  <View >
                    1
                  </View>
                  <View>
                    <Text >Search & Filter Venues</Text>
                    <Text >Browse venues by location, capacity, genre, and budget. Use our smart filters to find the perfect match for your performance.</Text>
                  </View>
                </View>
                <View >
                  <View >
                    2
                  </View>
                  <View>
                    <Text >Check Availability & Pricing</Text>
                    <Text >View real-time availability, transparent pricing, and venue details. Compare options and read verified reviews from other artists.</Text>
                  </View>
                </View>
                <View >
                  <View >
                    3
                  </View>
                  <View>
                    <Text >Book & Confirm</Text>
                    <Text >Submit your booking request with performance details. Get instant confirmation and access to venue contact information.</Text>
                  </View>
                </View>
                <View >
                  <View >
                    4
                  </View>
                  <View>
                    <Text >Perform & Get Paid</Text>
                    <Text >Show up and perform! Payment is processed securely through our platform with automatic splits for band members.</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-left">
            <View >
              <Text >Start Booking Today</Text>
              <Text >
                Join thousands of artists who have successfully booked performances through our platform. 
                From intimate acoustic sets to stadium tours, we have the perfect venue for your music.
              </Text>
              
              <View >
                <View >
                  <Ionicons name="time" size={16} color="#8B5CF6" />
                  <Text>Average booking confirmation: 24 hours</Text>
                </View>
                <View >
                  <DollarSign size={16}  />
                  <Text>Secure payment processing with escrow</Text>
                </View>
                <View >
                  <Ionicons name="checkmark" Circle size={16}   />
                  <Text>Verified venues with quality guarantees</Text>
                </View>
                <View >
                  <Ionicons name="people" size={16} color="#8B5CF6" />
                  <Text>24/7 support for artists and venues</Text>
                </View>
              </View>
              
              <View >
                <TouchableOpacity >
                  Browse Venues
                </TouchableOpacity>
                <TouchableOpacity >
                  List Your Venue
                </TouchableOpacity>
              </View>
            </View>
          </ScrollAnimator>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  marginBottom16: {
    marginBottom: 64,
  },
  marginBottom4: {
    marginBottom: 16,
  },
  text3xl: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textLg: {
    fontSize: 18,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textGray300: {
    color: '#D1D5DB',
  },
  bgBlack: {
    backgroundColor: '#000000',
  },
  flex: {
    flex: 1,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  padding4: {
    padding: 16,
  },
  padding6: {
    padding: 24,
  },
  roundedLg: {
    borderRadius: 8,
  },
  shadowLg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});