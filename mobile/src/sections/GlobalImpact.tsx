import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const impacts = [
  {
    icon: <Ionicons name="globe" size={28} color="#8B5CF6" />,
    emoji: '🌍',
    title: 'Cultural Preservation',
    value: '50,000+',
    description: 'Traditional songs documented and preserved using AI technology',
  },
  {
    icon: <Zap size={28}  />,
    emoji: '💚',
    title: 'Sustainable Energy',
    value: '2.1 GW',
    description: 'Renewable energy capacity, 100% carbon neutral operations',
  },
  {
    icon: <Ionicons name="people" size={28} color="#8B5CF6" />,
    emoji: '👥',
    title: 'Global Employment',
    value: '10,000+',
    description: 'Direct jobs created, with 50,000+ contractors worldwide',
  },
  {
    icon: <GraduationCap size={28}  />,
    emoji: '🎓',
    title: 'Education Initiative',
    value: '200+',
    description: 'Mobile education units and 1Dream University campuses',
  },
];

const givingBackInitiatives = [
  {
    icon: <Ionicons name="heart" size={28} color="#8B5CF6" />,
    emoji: '🏠',
    title: 'Homeless Outreach Program',
    description: 'Comprehensive support system providing shelter, meals, job training, and mental health services to homeless communities worldwide',
    impact: '25,000+ people helped annually',
    locations: '150+ cities globally',
    features: ['Mobile outreach units', 'Emergency shelter network', 'Job placement programs', 'Mental health support'],
    color: 'from-red-400 to-pink-400',
    bgGradient: 'from-red-900/20 to-pink-900/10',
  },
  {
    icon: <Ionicons name="home" size={28} color="#8B5CF6" />,
    emoji: '🏘️',
    title: '3D Printed Affordable Housing',
    description: 'Revolutionary 3D printing technology creating sustainable, affordable homes in underserved communities using local materials',
    impact: '5,000+ homes built',
    locations: '45+ countries',
    features: ['24-hour construction time', 'Earthquake resistant design', 'Solar panel integration', 'Local material sourcing'],
    color: 'from-blue-400 to-cyan-400',
    bgGradient: 'from-blue-900/20 to-cyan-900/10',
  },
  {
    icon: <Droplets size={28}  />,
    emoji: '💧',
    title: 'Rain Collection & Water Filtration',
    description: 'Advanced water harvesting and purification systems providing clean drinking water to communities lacking access',
    impact: '2M+ people with clean water access',
    locations: '80+ regions',
    features: ['Atmospheric water generation', 'Solar-powered filtration', 'Community maintenance training', 'Water quality monitoring'],
    color: 'from-teal-400 to-blue-400',
    bgGradient: 'from-teal-900/20 to-blue-900/10',
  },
  {
    icon: <Sprout size={28}  />,
    emoji: '🌱',
    title: 'Community Gardens & Permaculture',
    description: 'Sustainable food production systems including community gardens, greenhouses, and permaculture orchards for food security',
    impact: '500+ communities fed',
    locations: '60+ countries',
    features: ['Permaculture design', 'Seed bank programs', 'Agricultural training', 'Greenhouse technology'],
    color: 'from-green-400 to-emerald-400',
    bgGradient: 'from-green-900/20 to-emerald-900/10',
  },
  {
    icon: <Cpu size={28}  />,
    emoji: '🏫',
    title: 'Educational Data Centers',
    description: 'State-of-the-art data centers doubling as educational facilities, providing tech training and certifications for local communities',
    impact: '15,000+ students certified',
    locations: '25+ data centers',
    features: ['Cloud computing training', 'AI/ML certification programs', 'Renewable energy education', 'Job placement guarantee'],
    color: 'from-purple-400 to-indigo-400',
    bgGradient: 'from-purple-900/20 to-indigo-900/10',
  },
  {
    icon: <Briefcase size={28}  />,
    emoji: '💼',
    title: 'Internship to Employment Pipeline',
    description: 'Comprehensive career development program connecting education with meaningful employment opportunities in the music and tech industries',
    impact: '8,500+ careers launched',
    locations: 'Global program',
    features: ['Paid internships', 'Mentorship programs', 'Skills development', '95% employment rate'],
    color: 'from-orange-400 to-yellow-400',
    bgGradient: 'from-orange-900/20 to-yellow-900/10',
  },
];

const globalInitiativeStats = [
  {
    icon: <Ionicons name="home" size={24} color="#8B5CF6" />,
    value: '50K+',
    label: 'Homes Provided',
    description: 'Safe, affordable housing worldwide',
  },
  {
    icon: <Briefcase size={24}  />,
    value: '75K+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities',
  },
  {
    icon: <Droplets size={24}  />,
    value: '2M+',
    label: 'Clean Water Access',
    description: 'People with reliable water sources',
  },
  {
    icon: <Sprout size={24}  />,
    value: '500+',
    label: 'Food Security Projects',
    description: 'Communities with sustainable food',
  },
];

const healthWellnessPrograms = [
  {
    icon: <Moon size={28}  />,
    emoji: '🌙',
    title: 'Polar Moon Foundation',
    description: 'Leading mental health and wellness foundation providing comprehensive support, research, and innovative treatment programs for global communities',
    impact: '100,000+ lives transformed',
    locations: 'Global network',
    features: ['Crisis intervention hotlines', 'Research & development', 'Community wellness centers', 'Professional training programs'],
    color: 'from-indigo-400 to-purple-400',
    bgGradient: 'from-indigo-900/20 to-purple-900/10',
    website: 'polarmoon.org',
  },
  {
    icon: <Ionicons name="brain" size={28} color="#8B5CF6" />,
    emoji: '🧠',
    title: 'Mental & Behavioral Health Programs',
    description: 'Comprehensive mental health services including therapy, counseling, addiction recovery, and behavioral intervention programs',
    impact: '75,000+ patients served annually',
    locations: '200+ treatment centers',
    features: ['Individual & group therapy', 'Addiction recovery programs', 'PTSD & trauma treatment', 'Youth mental health services'],
    color: 'from-purple-400 to-pink-400',
    bgGradient: 'from-purple-900/20 to-pink-900/10',
  },
  {
    icon: <Ionicons name="heart" size={28} color="#8B5CF6" />,
    emoji: '🕯️',
    title: 'Healing Ceremonies & Spiritual Wellness',
    description: 'Traditional and modern healing practices including meditation, sound therapy, cultural ceremonies, and holistic wellness programs',
    impact: '50,000+ participants',
    locations: '150+ healing centers',
    features: ['Sound healing sessions', 'Meditation retreats', 'Cultural ceremony programs', 'Spiritual counseling'],
    color: 'from-rose-400 to-orange-400',
    bgGradient: 'from-rose-900/20 to-orange-900/10',
  },
  {
    icon: <Activity size={28}  />,
    emoji: '🏃‍♀️',
    title: 'Health Through Nutrition & Exercise',
    description: 'Comprehensive wellness programs focusing on healthy eating, physical fitness, nutrition education, and lifestyle transformation',
    impact: '120,000+ healthier lifestyles',
    locations: '300+ wellness centers',
    features: ['Personal training programs', 'Nutrition counseling', 'Cooking classes', 'Community fitness challenges'],
    color: 'from-green-400 to-teal-400',
    bgGradient: 'from-green-900/20 to-teal-900/10',
  },
];

const healthPartners = [
  {
    name: 'Mayo Clinic',
    logo: '🏥',
    category: 'Medical Excellence',
    description: 'World-renowned medical institution providing cutting-edge healthcare and research partnerships',
    specialties: ['Advanced diagnostics', 'Specialized treatments', 'Medical research', 'Telemedicine'],
    icon: <Stethoscope size={24}  />,
  },
  {
    name: 'Johns Hopkins Medicine',
    logo: '🔬',
    category: 'Research & Innovation',
    description: 'Leading medical research institution advancing healthcare through innovation and discovery',
    specialties: ['Clinical trials', 'Medical breakthroughs', 'Public health research', 'Global health initiatives'],
    icon: <Ionicons name="brain" size={24} color="#8B5CF6" />,
  },
  {
    name: 'World Health Organization',
    logo: '🌍',
    category: 'Global Health',
    description: 'International health agency coordinating global health responses and setting health standards',
    specialties: ['Disease prevention', 'Health policy', 'Emergency response', 'Health equity'],
    icon: <Ionicons name="globe" size={24} color="#8B5CF6" />,
  },
  {
    name: 'Headspace Health',
    logo: '🧘‍♀️',
    category: 'Mental Wellness',
    description: 'Digital mental health platform providing meditation, mindfulness, and wellness solutions',
    specialties: ['Meditation apps', 'Stress management', 'Sleep improvement', 'Workplace wellness'],
    icon: <Ionicons name="heart" size={24} color="#8B5CF6" />,
  },
];

const healthStats = [
  {
    icon: <Ionicons name="brain" size={24} color="#8B5CF6" />,
    value: '345K+',
    label: 'Mental Health Services',
    description: 'Annual counseling sessions provided',
  },
  {
    icon: <Activity size={24}  />,
    value: '500K+',
    label: 'Fitness Programs',
    description: 'People engaged in wellness activities',
  },
  {
    icon: <Utensils size={24}  />,
    value: '250K+',
    label: 'Nutrition Programs',
    description: 'Healthy eating initiatives completed',
  },
  {
    icon: <Ionicons name="heart" size={24} color="#8B5CF6" />,
    value: '95%',
    label: 'Satisfaction Rate',
    description: 'Participant wellness improvement',
  },
];

export const GlobalImpact: React.FC = () => {
  return (
    <View id="impact" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="Global Impact"
            subtitle="Creating positive change through music, technology, and cultural exchange"
          />
        </ScrollAnimator>

        <View >
          {impacts.map((impact, index) => (
            <ScrollAnimator key={impact.title} delay={index * 100} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <GlassMorphCard >
                <View >
                  <View >{impact.emoji}</View>
                  <View >
                    {impact.value}
                  </View>
                </View>
                
                <View >
                  {impact.icon}
                  <Text >{impact.title}</Text>
                </View>
                
                <Text >{impact.description}</Text>
                
                <View ></View>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </View>

        {/* Giving Back Section */}
        <ScrollAnimator>
          <View >
            <View >
              <View >
                <Ionicons name="heart" size={32} color="#8B5CF6" />
                <Text >
                  Giving Back
                </Text>
                <Ionicons name="heart" size={32} color="#8B5CF6" />
              </View>
              <Text >
                Our commitment to humanity extends far beyond music. Through innovative technology and sustainable solutions, 
                we're addressing global challenges and creating lasting positive impact in communities worldwide.
              </Text>
            </View>
          </View>
        </ScrollAnimator>

        {/* Giving Back Initiatives */}
        <View >
          {givingBackInitiatives.map((initiative, index) => (
            <ScrollAnimator key={initiative.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <View >
                {/* Animated background */}
                <View style={`absolute inset-0 rounded-2xl bg-gradient-to-br ${initiative.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></View>
                
                <GlassMorphCard >
                  <View >
                    <View >{initiative.emoji}</View>
                    <View >
                      {initiative.icon}
                    </View>
                  </View>
                  
                  <Text style={`text-2xl font-bold mb-3 bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent`}>
                    {initiative.title}
                  </Text>
                  
                  <Text >
                    {initiative.description}
                  </Text>
                  
                  <View >
                    <View>
                      <View >Impact:</View>
                      <View >{initiative.impact}</View>
                    </View>
                    <View>
                      <View >Locations:</View>
                      <View >{initiative.locations}</View>
                    </View>
                  </View>
                  
                  <View >
                    <Text >
                      <TreePine size={16}  />
                      Key Features:
                    </Text>
                    <View >
                      {initiative.features.map((feature, idx) => (
                        <View key={idx} >
                          <View ></View>
                          <Text>{feature}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  
                  <TouchableOpacity style={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${initiative.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                    Learn More
                  </TouchableOpacity>
                </GlassMorphCard>
              </View>
            </ScrollAnimator>
          ))}
        </View>

        {/* Global Initiative Overview */}
        <ScrollAnimator animation="fade-up">
          <View >
            {/* Animated background pattern */}
            <View >
              <View ></View>
            </View>
            
            <View >
              <View >
                <Ionicons name="globe" size={48} color="#8B5CF6" />
                <Text >
                  Global Humanitarian Initiative
                </Text>
              </View>
              
              <Text >
                Our mission extends beyond music to address fundamental human needs. Through innovative technology, 
                sustainable solutions, and community partnerships, we're creating a world where everyone has access 
                to safe housing, clean water, nutritious food, and meaningful employment opportunities.
              </Text>
              
              <View >
                {globalInitiativeStats.map((stat, index) => (
                  <View key={stat.label} >
                    <View >
                      {stat.icon}
                    </View>
                    <View >
                      {stat.value}
                    </View>
                    <View >{stat.label}</View>
                    <View >{stat.description}</View>
                  </View>
                ))}
              </View>
              
              <View >
                <Text >Our Commitment</Text>
                <Text >
                  "Technology should serve humanity. Music brings us together. Together, we can solve the world's greatest challenges."
                </Text>
                <View >
                  <View>
                    <View >Housing</View>
                    <View >Safe homes for all</View>
                  </View>
                  <View>
                    <View >Water</View>
                    <View >Clean water access</View>
                  </View>
                  <View>
                    <View >Food</View>
                    <View >Sustainable nutrition</View>
                  </View>
                  <View>
                    <View >Jobs</View>
                    <View >Meaningful employment</View>
                  </View>
                </View>
              </View>
              
              <View >
                <TouchableOpacity >
                  <Text >
                    <Ionicons name="heart" size={20} color="#8B5CF6" />
                    Join Our Mission
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  View Impact Report
                </TouchableOpacity>
              </View>
              
              <View >
                🌍 Together, we're building a better world through music and technology
              </View>
            </View>
          </View>
        </ScrollAnimator>

        {/* Health and Wellness Programs Section */}
        <ScrollAnimator>
          <View >
            <View >
              <View >
                <Activity size={32}  />
                <Text >
                  Health & Wellness Programs
                </Text>
                <Ionicons name="heart" size={32} color="#8B5CF6" />
              </View>
              <Text >
                Comprehensive health and wellness initiatives supporting mental, physical, and spiritual well-being 
                through innovative programs and world-class partnerships.
              </Text>
            </View>
          </View>
        </ScrollAnimator>

        {/* Health & Wellness Programs */}
        <View >
          {healthWellnessPrograms.map((program, index) => (
            <ScrollAnimator key={program.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <View >
                {/* Animated background */}
                <View style={`absolute inset-0 rounded-2xl bg-gradient-to-br ${program.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></View>
                
                <GlassMorphCard >
                  <View >
                    <View >{program.emoji}</View>
                    <View >
                      {program.icon}
                    </View>
                  </View>
                  
                  <Text style={`text-2xl font-bold mb-3 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                    {program.title}
                  </Text>
                  
                  <Text >
                    {program.description}
                  </Text>
                  
                  <View >
                    <View>
                      <View >Impact:</View>
                      <View >{program.impact}</View>
                    </View>
                    <View>
                      <View >Locations:</View>
                      <View >{program.locations}</View>
                    </View>
                  </View>
                  
                  <View >
                    <Text >
                      <Activity size={16}  />
                      Key Services:
                    </Text>
                    <View >
                      {program.features.map((feature, idx) => (
                        <View key={idx} >
                          <View ></View>
                          <Text>{feature}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  
                  {program.website && (
                    <View >
                      <TouchableOpacity 
                        href={`https://${program.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        
                      >
                        Visit {program.website} →
                      </TouchableOpacity>
                    </View>
                  )}
                  
                  <TouchableOpacity style={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${program.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                    Access Programs
                  </TouchableOpacity>
                </GlassMorphCard>
              </View>
            </ScrollAnimator>
          ))}
        </View>

        {/* Health Partners */}
        <ScrollAnimator>
          <View >
            <Text >
              Health & Wellness Partners
            </Text>
            <View >
              {healthPartners.map((partner, index) => (
                <ScrollAnimator key={partner.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard >
                    <View >{partner.logo}</View>
                    <View >
                      {partner.icon}
                      <Text >{partner.name}</Text>
                    </View>
                    <View >{partner.category}</View>
                    <Text >{partner.description}</Text>
                    <View >
                      {partner.specialties.map((specialty, idx) => (
                        <View key={idx} >
                          <View ></View>
                          <Text>{specialty}</Text>
                        </View>
                      ))}
                    </View>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Health Statistics */}
        <ScrollAnimator animation="fade-up">
          <View >
            <Text >Health & Wellness Impact</Text>
            <View >
              {healthStats.map((stat, index) => (
                <View key={stat.label} >
                  <View >
                    {stat.icon}
                  </View>
                  <View >
                    {stat.value}
                  </View>
                  <View >{stat.label}</View>
                  <View >{stat.description}</View>
                </View>
              ))}
            </View>
            
            <View >
              <Text >Holistic Wellness Approach</Text>
              <Text >
                Our comprehensive health programs address the complete spectrum of human wellness - 
                mental, physical, spiritual, and social well-being for thriving communities.
              </Text>
              <View >
                <View>
                  <View >Mental</View>
                  <View >Emotional wellness</View>
                </View>
                <View>
                  <View >Physical</View>
                  <View >Body health</View>
                </View>
                <View>
                  <View >Spiritual</View>
                  <View >Inner peace</View>
                </View>
                <View>
                  <View >Social</View>
                  <View >Community connection</View>
                </View>
              </View>
            </View>
            
            <View >
              <TouchableOpacity >
                Access Wellness Programs
              </TouchableOpacity>
              <TouchableOpacity >
                Partner With Us
              </TouchableOpacity>
            </View>
            
            <View >
              🌟 Empowering healthier communities through comprehensive wellness solutions
            </View>
          </View>
        </ScrollAnimator>
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