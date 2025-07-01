import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Ionicons } from '@expo/vector-icons';

const legalServices = [
  {
    name: 'Entertainment Law Group',
    logo: '⚖️',
    category: 'Music Law Specialists',
    description: 'Specialized entertainment lawyers focusing on music industry contracts, copyright, and artist representation',
    services: ['Contract negotiation', 'Copyright registration', 'Trademark protection', 'Royalty disputes'],
    experience: '25+ years',
    clients: '500+ artists',
    website: 'entertainmentlawgroup.com',
    rating: 4.9,
    icon: <Scale size={24}  />,
  },
  {
    name: 'Music Legal Partners',
    logo: '🏛️',
    category: 'International Music Law',
    description: 'Global network of music attorneys specializing in international touring, publishing, and distribution',
    services: ['International contracts', 'Publishing deals', 'Tour agreements', 'Distribution rights'],
    experience: '30+ years',
    clients: '200+ labels',
    website: 'musiclegalpartners.com',
    rating: 4.8,
    icon: <Ionicons name="globe" size={24} color="#8B5CF6" />,
  },
  {
    name: 'Artist Rights Advocates',
    logo: '🛡️',
    category: 'Artist Protection',
    description: 'Dedicated to protecting emerging artists from predatory contracts and ensuring fair representation',
    services: ['Contract review', 'Rights protection', 'Fair deal negotiation', 'Legal education'],
    experience: '15+ years',
    clients: '1,000+ emerging artists',
    website: 'artistrightsadvocates.org',
    rating: 4.9,
    icon: <Ionicons name="people" size={24} color="#8B5CF6" />,
  },
];

const businessServices = [
  {
    name: 'Music Business Advisors',
    logo: '💼',
    category: 'Business Management',
    description: 'Comprehensive business management services for musicians and music industry professionals',
    services: ['Financial planning', 'Tax preparation', 'Business formation', 'Investment advice'],
    specialties: 'Artist financial management',
    clients: '300+ artists',
    icon: <Briefcase size={24}  />,
  },
  {
    name: 'Creative Accounting Solutions',
    logo: '📊',
    category: 'Music Industry Accounting',
    description: 'Specialized accounting firm with deep understanding of music industry revenue streams and tax implications',
    services: ['Royalty accounting', 'Tour accounting', 'Tax optimization', 'Financial reporting'],
    specialties: 'Multi-revenue stream tracking',
    clients: '150+ music businesses',
    icon: <Calculator size={24}  />,
  },
  {
    name: 'Artist Management Institute',
    logo: '🎯',
    category: 'Career Management',
    description: 'Professional artist management and career development services with industry expertise',
    services: ['Career planning', 'Brand development', 'Industry networking', 'Strategic partnerships'],
    specialties: 'Emerging artist development',
    clients: '75+ managed artists',
    icon: <Ionicons name="star" size={24} color="#8B5CF6" />,
  },
];

const educationProviders = [
  {
    name: 'Berklee College of Music',
    logo: '🎓',
    category: 'Higher Education',
    description: 'World-renowned music college offering comprehensive music education and industry training',
    programs: ['Music Production', 'Music Business', 'Performance', 'Music Therapy'],
    format: 'On-campus & Online',
    accreditation: 'NEASC Accredited',
    website: 'berklee.edu',
    icon: <GraduationCap size={24}  />,
  },
  {
    name: 'MasterClass Music',
    logo: '🎬',
    category: 'Online Learning',
    description: 'Premium online masterclasses taught by world-class musicians and industry professionals',
    programs: ['Artist masterclasses', 'Production techniques', 'Business skills', 'Performance coaching'],
    format: 'Online video courses',
    instructors: '50+ Grammy winners',
    website: 'masterclass.com/music',
    icon: <BookOpen size={24}  />,
  },
  {
    name: 'Music Teachers Network',
    logo: '🎼',
    category: 'Private Instruction',
    description: 'Global network of verified music teachers offering personalized instruction across all instruments',
    programs: ['Private lessons', 'Group classes', 'Online instruction', 'Exam preparation'],
    format: 'In-person & Virtual',
    teachers: '5,000+ verified instructors',
    website: 'musicteachersnetwork.com',
    icon: <Ionicons name="musical-notes" size={24} color="#8B5CF6" />,
  },
  {
    name: 'Music Industry Academy',
    logo: '🏫',
    category: 'Professional Development',
    description: 'Specialized training programs for music industry professionals and aspiring music business executives',
    programs: ['Music business certification', 'A&R training', 'Marketing & promotion', 'Digital distribution'],
    format: 'Intensive workshops',
    graduates: '2,000+ industry professionals',
    website: 'musicindustryacademy.com',
    icon: <Briefcase size={24}  />,
  },
];

const resourceCategories = [
  {
    icon: <Scale size={28}  />,
    title: 'Legal Resources',
    count: '150+',
    description: 'Specialized music lawyers, contract templates, and legal guidance',
  },
  {
    icon: <GraduationCap size={28}  />,
    title: 'Educational Programs',
    count: '500+',
    description: 'Music schools, online courses, and certification programs',
  },
  {
    icon: <Calculator size={28}  />,
    title: 'Business Services',
    count: '200+',
    description: 'Accounting, management, and financial planning specialists',
  },
  {
    icon: <BookOpen size={28}  />,
    title: 'Learning Resources',
    count: '1,000+',
    description: 'Tutorials, guides, and educational content library',
  },
];

export const EducationBusiness: React.FC = () => {
  return (
    <View id="educationbusiness" >
      <View >
        <ScrollAnimator>
          <SectionTitle
            title="Education & Business Management"
            subtitle="Professional resources, legal services, and educational opportunities to advance your music career"
          />
        </ScrollAnimator>

        {/* Resource Overview */}
        <ScrollAnimator>
          <View >
            {resourceCategories.map((category, index) => (
              <View key={category.title} >
                <View >
                  {category.icon}
                </View>
                <View >
                  {category.count}
                </View>
                <Text >{category.title}</Text>
                <Text >{category.description}</Text>
              </View>
            ))}
          </View>
        </ScrollAnimator>

        {/* Legal Services */}
        <ScrollAnimator>
          <View >
            <Text >
              Legal Services & Music Lawyers
            </Text>
            <Text >
              Connect with specialized entertainment lawyers and legal professionals who understand the music industry
            </Text>
            
            <View >
              {legalServices.map((service, index) => (
                <ScrollAnimator key={service.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard >
                    <View >
                      <View >{service.logo}</View>
                      <View >
                        <Ionicons name="star" size={16} color="#8B5CF6" />
                        <Text >{service.rating}</Text>
                      </View>
                    </View>
                    
                    <View >
                      {service.icon}
                      <Text >{service.name}</Text>
                    </View>
                    
                    <View >{service.category}</View>
                    <Text >{service.description}</Text>
                    
                    <View >
                      <View >Services:</View>
                      <View >
                        {service.services.map((serviceItem, idx) => (
                          <View key={idx} >
                            <Ionicons name="checkmark" Circle size={12}   />
                            <Text>{serviceItem}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    
                    <View >
                      <View>
                        <Text >Experience:</Text>
                        <View >{service.experience}</View>
                      </View>
                      <View>
                        <Text >Clients:</Text>
                        <View >{service.clients}</View>
                      </View>
                    </View>
                    
                    <View >
                      <TouchableOpacity 
                        href={`https://${service.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        
                      >
                        <Text >{service.website}</Text>
                        <ExternalLink size={10} />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        Contact
                      </TouchableOpacity>
                    </View>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Business Management Services */}
        <ScrollAnimator>
          <View >
            <Text >
              Business Management Services
            </Text>
            <Text >
              Professional business services tailored for musicians and music industry professionals
            </Text>
            
            <View >
              {businessServices.map((service, index) => (
                <ScrollAnimator key={service.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard >
                    <View >{service.logo}</View>
                    
                    <View >
                      {service.icon}
                      <Text >{service.name}</Text>
                    </View>
                    
                    <View >{service.category}</View>
                    <Text >{service.description}</Text>
                    
                    <View >
                      <View >Services:</View>
                      <View >
                        {service.services.map((serviceItem, idx) => (
                          <View key={idx} >
                            <Ionicons name="checkmark" Circle size={12}   />
                            <Text>{serviceItem}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    
                    <View >
                      <View>
                        <Text >Specialty:</Text>
                        <View >{service.specialties}</View>
                      </View>
                      <View>
                        <Text >Clients:</Text>
                        <View >{service.clients}</View>
                      </View>
                    </View>
                    
                    <TouchableOpacity >
                      Learn More
                    </TouchableOpacity>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Education & Music Teachers */}
        <ScrollAnimator>
          <View >
            <Text >
              Education & Music Teachers
            </Text>
            <Text >
              World-class educational institutions, online learning platforms, and verified music teachers
            </Text>
            
            <View >
              {educationProviders.map((provider, index) => (
                <ScrollAnimator key={provider.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard >
                    <View >
                      <View >{provider.logo}</View>
                      {provider.icon}
                    </View>
                    
                    <Text >{provider.name}</Text>
                    <View >{provider.category}</View>
                    <Text >{provider.description}</Text>
                    
                    <View >
                      <View >Programs:</View>
                      <View >
                        {provider.programs.map((program, idx) => (
                          <View key={idx} >
                            <View ></View>
                            <Text>{program}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    
                    <View >
                      <View>
                        <Text >Format:</Text>
                        <View >{provider.format}</View>
                      </View>
                      <View>
                        <Text >
                          {provider.accreditation ? 'Accreditation:' : 
                           provider.instructors ? 'Instructors:' : 
                           provider.teachers ? 'Teachers:' : 'Graduates:'}
                        </Text>
                        <View >
                          {provider.accreditation || provider.instructors || provider.teachers || provider.graduates}
                        </View>
                      </View>
                    </View>
                    
                    <View >
                      <TouchableOpacity 
                        href={`https://${provider.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        
                      >
                        <Text >{provider.website}</Text>
                        <ExternalLink size={10} />
                      </TouchableOpacity>
                      <TouchableOpacity >
                        Explore
                      </TouchableOpacity>
                    </View>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </View>
          </View>
        </ScrollAnimator>

        {/* Call to Action */}
        <ScrollAnimator animation="fade-up">
          <View >
            <Text >Advance Your Music Career</Text>
            <Text >
              Access professional resources, legal expertise, and world-class education to take your music career to the next level.
            </Text>
            
            <View >
              <View >
                <View >
                  850+
                </View>
                <View >Professional Services</View>
              </View>
              <View >
                <View >
                  24/7
                </View>
                <View >Support Available</View>
              </View>
              <View >
                <View >
                  95%
                </View>
                <View >Success Rate</View>
              </View>
            </View>
            
            <View >
              <TouchableOpacity >
                Browse All Resources
              </TouchableOpacity>
              <TouchableOpacity >
                Get Professional Consultation
              </TouchableOpacity>
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