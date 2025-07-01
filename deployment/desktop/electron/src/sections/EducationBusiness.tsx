import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { GraduationCap, Scale, Calculator, Users, BookOpen, Briefcase, FileText, Globe, Star, ExternalLink, CheckCircle, Music } from 'lucide-react';

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
    icon: <Scale size={24} className="text-blue-400" />,
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
    icon: <Globe size={24} className="text-purple-400" />,
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
    icon: <Users size={24} className="text-teal-400" />,
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
    icon: <Briefcase size={24} className="text-green-400" />,
  },
  {
    name: 'Creative Accounting Solutions',
    logo: '📊',
    category: 'Music Industry Accounting',
    description: 'Specialized accounting firm with deep understanding of music industry revenue streams and tax implications',
    services: ['Royalty accounting', 'Tour accounting', 'Tax optimization', 'Financial reporting'],
    specialties: 'Multi-revenue stream tracking',
    clients: '150+ music businesses',
    icon: <Calculator size={24} className="text-orange-400" />,
  },
  {
    name: 'Artist Management Institute',
    logo: '🎯',
    category: 'Career Management',
    description: 'Professional artist management and career development services with industry expertise',
    services: ['Career planning', 'Brand development', 'Industry networking', 'Strategic partnerships'],
    specialties: 'Emerging artist development',
    clients: '75+ managed artists',
    icon: <Star size={24} className="text-pink-400" />,
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
    icon: <GraduationCap size={24} className="text-blue-400" />,
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
    icon: <BookOpen size={24} className="text-purple-400" />,
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
    icon: <Music size={24} className="text-teal-400" />,
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
    icon: <Briefcase size={24} className="text-yellow-400" />,
  },
];

const resourceCategories = [
  {
    icon: <Scale size={28} className="text-blue-400" />,
    title: 'Legal Resources',
    count: '150+',
    description: 'Specialized music lawyers, contract templates, and legal guidance',
  },
  {
    icon: <GraduationCap size={28} className="text-purple-400" />,
    title: 'Educational Programs',
    count: '500+',
    description: 'Music schools, online courses, and certification programs',
  },
  {
    icon: <Calculator size={28} className="text-green-400" />,
    title: 'Business Services',
    count: '200+',
    description: 'Accounting, management, and financial planning specialists',
  },
  {
    icon: <BookOpen size={28} className="text-orange-400" />,
    title: 'Learning Resources',
    count: '1,000+',
    description: 'Tutorials, guides, and educational content library',
  },
];

export const EducationBusiness: React.FC = () => {
  return (
    <section id="educationbusiness" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Education & Business Management"
            subtitle="Professional resources, legal services, and educational opportunities to advance your music career"
          />
        </ScrollAnimator>

        {/* Resource Overview */}
        <ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {resourceCategories.map((category, index) => (
              <div key={category.title} className="text-center">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {category.count}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimator>

        {/* Legal Services */}
        <ScrollAnimator>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Legal Services & Music Lawyers
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Connect with specialized entertainment lawyers and legal professionals who understand the music industry
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalServices.map((service, index) => (
                <ScrollAnimator key={service.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.logo}</div>
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 mr-1" />
                        <span className="text-yellow-400 text-sm">{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {service.icon}
                      <h4 className="text-lg font-bold text-white ml-2">{service.name}</h4>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-3">{service.category}</div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Services:</div>
                      <div className="space-y-1">
                        {service.services.map((serviceItem, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle size={12} className="text-teal-400 mr-2 flex-shrink-0" />
                            <span>{serviceItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                      <div>
                        <span className="text-gray-400">Experience:</span>
                        <div className="text-white font-semibold">{service.experience}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Clients:</span>
                        <div className="text-white font-semibold">{service.clients}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href={`https://${service.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 flex items-center text-xs transition-colors"
                      >
                        <span className="mr-1">{service.website}</span>
                        <ExternalLink size={10} />
                      </a>
                      <button className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white text-xs font-medium transition-all duration-300 hover:from-blue-600/30 hover:to-purple-600/30">
                        Contact
                      </button>
                    </div>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Business Management Services */}
        <ScrollAnimator>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Business Management Services
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Professional business services tailored for musicians and music industry professionals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessServices.map((service, index) => (
                <ScrollAnimator key={service.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard className="h-full">
                    <div className="text-4xl mb-4">{service.logo}</div>
                    
                    <div className="flex items-center mb-3">
                      {service.icon}
                      <h4 className="text-lg font-bold text-white ml-2">{service.name}</h4>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-3">{service.category}</div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Services:</div>
                      <div className="space-y-1">
                        {service.services.map((serviceItem, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <CheckCircle size={12} className="text-green-400 mr-2 flex-shrink-0" />
                            <span>{serviceItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 mb-4 text-xs">
                      <div>
                        <span className="text-gray-400">Specialty:</span>
                        <div className="text-white font-semibold">{service.specialties}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Clients:</span>
                        <div className="text-white font-semibold">{service.clients}</div>
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 text-white font-medium transition-all duration-300 hover:from-green-600/30 hover:to-teal-600/30">
                      Learn More
                    </button>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Education & Music Teachers */}
        <ScrollAnimator>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Education & Music Teachers
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
              World-class educational institutions, online learning platforms, and verified music teachers
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationProviders.map((provider, index) => (
                <ScrollAnimator key={provider.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{provider.logo}</div>
                      {provider.icon}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{provider.name}</h4>
                    <div className="text-sm text-gray-400 mb-3">{provider.category}</div>
                    <p className="text-gray-300 text-sm mb-4">{provider.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 mb-2">Programs:</div>
                      <div className="grid grid-cols-2 gap-1">
                        {provider.programs.map((program, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                      <div>
                        <span className="text-gray-400">Format:</span>
                        <div className="text-white font-semibold">{provider.format}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">
                          {provider.accreditation ? 'Accreditation:' : 
                           provider.instructors ? 'Instructors:' : 
                           provider.teachers ? 'Teachers:' : 'Graduates:'}
                        </span>
                        <div className="text-white font-semibold">
                          {provider.accreditation || provider.instructors || provider.teachers || provider.graduates}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href={`https://${provider.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 flex items-center text-xs transition-colors"
                      >
                        <span className="mr-1">{provider.website}</span>
                        <ExternalLink size={10} />
                      </a>
                      <button className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-teal-600/20 border border-purple-500/30 text-white text-xs font-medium transition-all duration-300 hover:from-purple-600/30 hover:to-teal-600/30">
                        Explore
                      </button>
                    </div>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Call to Action */}
        <ScrollAnimator animation="fade-up">
          <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Advance Your Music Career</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Access professional resources, legal expertise, and world-class education to take your music career to the next level.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  850+
                </div>
                <div className="text-gray-400 text-sm">Professional Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                Browse All Resources
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Get Professional Consultation
              </button>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};