import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { MapPin, Calendar, Users, Star, Music, Building, Coffee, Zap, Clock, DollarSign, CheckCircle, Search } from 'lucide-react';

const venueTypes = [
  {
    icon: <Coffee size={28} className="text-amber-400" />,
    emoji: '🍺',
    title: 'Bars & Pubs',
    count: '2,450+',
    capacity: '50-200',
    description: 'Intimate venues perfect for acoustic sets and small band performances',
    avgBooking: '$200-800',
  },
  {
    icon: <Music size={28} className="text-purple-400" />,
    emoji: '🎭',
    title: 'Clubs & Lounges',
    count: '1,820+',
    capacity: '100-500',
    description: 'Energetic nightlife venues with professional sound systems',
    avgBooking: '$500-2,500',
  },
  {
    icon: <Building size={28} className="text-blue-400" />,
    emoji: '🏛️',
    title: 'Concert Halls',
    count: '890+',
    capacity: '500-5,000',
    description: 'Premium venues with exceptional acoustics for serious performances',
    avgBooking: '$2,000-15,000',
  },
  {
    icon: <Zap size={28} className="text-red-400" />,
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
    icon: <Search size={24} className="text-teal-400" />,
    title: 'Smart Venue Matching',
    description: 'AI-powered algorithm matches artists with suitable venues based on genre, audience size, and budget',
  },
  {
    icon: <Calendar size={24} className="text-purple-400" />,
    title: 'Real-Time Availability',
    description: 'Live calendar integration showing available dates, pricing, and instant booking confirmation',
  },
  {
    icon: <DollarSign size={24} className="text-green-400" />,
    title: 'Transparent Pricing',
    description: 'Clear pricing structure with no hidden fees, including equipment rental and technical support costs',
  },
  {
    icon: <CheckCircle size={24} className="text-blue-400" />,
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
    icon: <MapPin size={24} className="text-teal-400" />,
    value: '5,500+',
    label: 'Venues Worldwide',
  },
  {
    icon: <Calendar size={24} className="text-purple-400" />,
    value: '12K+',
    label: 'Bookings/Month',
  },
  {
    icon: <Users size={24} className="text-blue-400" />,
    value: '2.5M+',
    label: 'Audience Reached',
  },
  {
    icon: <Star size={24} className="text-yellow-400" />,
    value: '4.8/5',
    label: 'Average Rating',
  },
];

export const MusicVenues: React.FC = () => {
  return (
    <section id="musicvenues" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Music Venues & Talent Booking"
            subtitle="Connect with premium venues worldwide and book your next performance with confidence"
          />
        </ScrollAnimator>

        {/* Venue Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {venueTypes.map((venue, index) => (
            <ScrollAnimator key={venue.title} delay={index * 100} animation="fade-up">
              <GlassMorphCard className="h-full text-center">
                <div className="text-4xl mb-4">{venue.emoji}</div>
                <div className="flex items-center justify-center mb-3">
                  {venue.icon}
                  <h3 className="text-lg font-semibold ml-2 text-white">{venue.title}</h3>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {venue.count}
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  Capacity: {venue.capacity} people
                </div>
                <p className="text-gray-300 text-sm mb-4">{venue.description}</p>
                <div className="text-teal-400 font-semibold text-sm">
                  {venue.avgBooking}
                </div>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </div>

        {/* Booking Features */}
        <ScrollAnimator>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Smart Booking Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookingFeatures.map((feature, index) => (
                <GlassMorphCard key={feature.title} className="h-full">
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h4 className="text-lg font-semibold ml-2 text-white">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </GlassMorphCard>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Featured Venues */}
        <ScrollAnimator>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Featured Venues</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredVenues.map((venue, index) => (
                <ScrollAnimator key={venue.name} delay={index * 150} animation="fade-up">
                  <GlassMorphCard className="h-full overflow-hidden">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={venue.image} 
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                        {venue.flag} {venue.type}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{venue.name}</h4>
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-400 mr-1" />
                        <span className="text-yellow-400 text-sm">{venue.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <MapPin size={14} className="mr-1" />
                      <span>{venue.location}</span>
                      <Users size={14} className="ml-3 mr-1" />
                      <span>{venue.capacity}</span>
                    </div>
                    
                    <div className="text-teal-400 font-semibold mb-4">{venue.price}</div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {venue.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle size={12} className="text-green-400 mr-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                      Book Now
                    </button>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Platform Stats */}
        <ScrollAnimator animation="fade-up">
          <div className="bg-gradient-to-r from-black/40 to-purple-900/20 rounded-2xl p-8 border border-white/10 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Platform Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bookingStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* How It Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimator animation="fade-right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">How Booking Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Search & Filter Venues</h4>
                    <p className="text-gray-400">Browse venues by location, capacity, genre, and budget. Use our smart filters to find the perfect match for your performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Check Availability & Pricing</h4>
                    <p className="text-gray-400">View real-time availability, transparent pricing, and venue details. Compare options and read verified reviews from other artists.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Book & Confirm</h4>
                    <p className="text-gray-400">Submit your booking request with performance details. Get instant confirmation and access to venue contact information.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Perform & Get Paid</h4>
                    <p className="text-gray-400">Show up and perform! Payment is processed securely through our platform with automatic splits for band members.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-left">
            <div className="bg-gradient-to-br from-purple-900/30 to-teal-900/20 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Start Booking Today</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of artists who have successfully booked performances through our platform. 
                From intimate acoustic sets to stadium tours, we have the perfect venue for your music.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Clock size={16} className="text-teal-400 mr-3" />
                  <span>Average booking confirmation: 24 hours</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <DollarSign size={16} className="text-green-400 mr-3" />
                  <span>Secure payment processing with escrow</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={16} className="text-blue-400 mr-3" />
                  <span>Verified venues with quality guarantees</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users size={16} className="text-purple-400 mr-3" />
                  <span>24/7 support for artists and venues</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Browse Venues
                </button>
                <button className="w-full px-6 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                  List Your Venue
                </button>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};