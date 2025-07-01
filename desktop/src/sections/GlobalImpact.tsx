import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassMorphCard } from '../components/GlassMorphCard';
import { ScrollAnimator } from '../components/ScrollAnimator';
import { Globe, Zap, Users, GraduationCap, Home, Droplets, Sprout, Building, Briefcase, Heart, TreePine, Cpu, Brain, Activity, Utensils, Dumbbell, Moon, Stethoscope } from 'lucide-react';

const impacts = [
  {
    icon: <Globe size={28} className="text-teal-400" />,
    emoji: '🌍',
    title: 'Cultural Preservation',
    value: '50,000+',
    description: 'Traditional songs documented and preserved using AI technology',
  },
  {
    icon: <Zap size={28} className="text-green-400" />,
    emoji: '💚',
    title: 'Sustainable Energy',
    value: '2.1 GW',
    description: 'Renewable energy capacity, 100% carbon neutral operations',
  },
  {
    icon: <Users size={28} className="text-blue-400" />,
    emoji: '👥',
    title: 'Global Employment',
    value: '10,000+',
    description: 'Direct jobs created, with 50,000+ contractors worldwide',
  },
  {
    icon: <GraduationCap size={28} className="text-purple-400" />,
    emoji: '🎓',
    title: 'Education Initiative',
    value: '200+',
    description: 'Mobile education units and 1Dream University campuses',
  },
];

const givingBackInitiatives = [
  {
    icon: <Heart size={28} className="text-red-400" />,
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
    icon: <Home size={28} className="text-blue-400" />,
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
    icon: <Droplets size={28} className="text-teal-400" />,
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
    icon: <Sprout size={28} className="text-green-400" />,
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
    icon: <Cpu size={28} className="text-purple-400" />,
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
    icon: <Briefcase size={28} className="text-orange-400" />,
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
    icon: <Home size={24} className="text-blue-400" />,
    value: '50K+',
    label: 'Homes Provided',
    description: 'Safe, affordable housing worldwide',
  },
  {
    icon: <Briefcase size={24} className="text-green-400" />,
    value: '75K+',
    label: 'Jobs Created',
    description: 'Sustainable employment opportunities',
  },
  {
    icon: <Droplets size={24} className="text-teal-400" />,
    value: '2M+',
    label: 'Clean Water Access',
    description: 'People with reliable water sources',
  },
  {
    icon: <Sprout size={24} className="text-emerald-400" />,
    value: '500+',
    label: 'Food Security Projects',
    description: 'Communities with sustainable food',
  },
];

const healthWellnessPrograms = [
  {
    icon: <Moon size={28} className="text-indigo-400" />,
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
    icon: <Brain size={28} className="text-purple-400" />,
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
    icon: <Heart size={28} className="text-rose-400" />,
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
    icon: <Activity size={28} className="text-green-400" />,
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
    icon: <Stethoscope size={24} className="text-blue-400" />,
  },
  {
    name: 'Johns Hopkins Medicine',
    logo: '🔬',
    category: 'Research & Innovation',
    description: 'Leading medical research institution advancing healthcare through innovation and discovery',
    specialties: ['Clinical trials', 'Medical breakthroughs', 'Public health research', 'Global health initiatives'],
    icon: <Brain size={24} className="text-purple-400" />,
  },
  {
    name: 'World Health Organization',
    logo: '🌍',
    category: 'Global Health',
    description: 'International health agency coordinating global health responses and setting health standards',
    specialties: ['Disease prevention', 'Health policy', 'Emergency response', 'Health equity'],
    icon: <Globe size={24} className="text-teal-400" />,
  },
  {
    name: 'Headspace Health',
    logo: '🧘‍♀️',
    category: 'Mental Wellness',
    description: 'Digital mental health platform providing meditation, mindfulness, and wellness solutions',
    specialties: ['Meditation apps', 'Stress management', 'Sleep improvement', 'Workplace wellness'],
    icon: <Heart size={24} className="text-pink-400" />,
  },
];

const healthStats = [
  {
    icon: <Brain size={24} className="text-purple-400" />,
    value: '345K+',
    label: 'Mental Health Services',
    description: 'Annual counseling sessions provided',
  },
  {
    icon: <Activity size={24} className="text-green-400" />,
    value: '500K+',
    label: 'Fitness Programs',
    description: 'People engaged in wellness activities',
  },
  {
    icon: <Utensils size={24} className="text-orange-400" />,
    value: '250K+',
    label: 'Nutrition Programs',
    description: 'Healthy eating initiatives completed',
  },
  {
    icon: <Heart size={24} className="text-red-400" />,
    value: '95%',
    label: 'Satisfaction Rate',
    description: 'Participant wellness improvement',
  },
];

export const GlobalImpact: React.FC = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-gradient-to-b from-black/30 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimator>
          <SectionTitle
            title="Global Impact"
            subtitle="Creating positive change through music, technology, and cultural exchange"
          />
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {impacts.map((impact, index) => (
            <ScrollAnimator key={impact.title} delay={index * 100} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <GlassMorphCard className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{impact.emoji}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                    {impact.value}
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {impact.icon}
                  <h3 className="text-xl font-semibold ml-2 text-white">{impact.title}</h3>
                </div>
                
                <p className="text-gray-300">{impact.description}</p>
                
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-teal-600/5 rounded-full blur-3xl"></div>
              </GlassMorphCard>
            </ScrollAnimator>
          ))}
        </div>

        {/* Giving Back Section */}
        <ScrollAnimator>
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Heart size={32} className="text-red-400 mr-3" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Giving Back
                </h2>
                <Heart size={32} className="text-pink-400 ml-3" />
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Our commitment to humanity extends far beyond music. Through innovative technology and sustainable solutions, 
                we're addressing global challenges and creating lasting positive impact in communities worldwide.
              </p>
            </div>
          </div>
        </ScrollAnimator>

        {/* Giving Back Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {givingBackInitiatives.map((initiative, index) => (
            <ScrollAnimator key={initiative.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="relative group">
                {/* Animated background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${initiative.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></div>
                
                <GlassMorphCard className="relative h-full border-2 border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{initiative.emoji}</div>
                    <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm">
                      {initiative.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent`}>
                    {initiative.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Impact:</div>
                      <div className="text-white font-semibold text-sm">{initiative.impact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Locations:</div>
                      <div className="text-white font-semibold text-sm">{initiative.locations}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <TreePine size={16} className="text-green-400 mr-2" />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {initiative.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${initiative.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                    Learn More
                  </button>
                </GlassMorphCard>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Global Initiative Overview */}
        <ScrollAnimator animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-teal-900/40 p-12 border border-white/20 text-center mb-20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-teal-500 animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Globe size={48} className="text-teal-400 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Global Humanitarian Initiative
                </h3>
              </div>
              
              <p className="text-gray-300 mb-10 max-w-4xl mx-auto text-lg">
                Our mission extends beyond music to address fundamental human needs. Through innovative technology, 
                sustainable solutions, and community partnerships, we're creating a world where everyone has access 
                to safe housing, clean water, nutritious food, and meaningful employment opportunities.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {globalInitiativeStats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white font-semibold mb-1">{stat.label}</div>
                    <div className="text-gray-400 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-black/30 to-purple-900/20 rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">Our Commitment</h4>
                <p className="text-gray-300 text-lg mb-6">
                  "Technology should serve humanity. Music brings us together. Together, we can solve the world's greatest challenges."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-400 mb-1">Housing</div>
                    <div className="text-gray-400 text-sm">Safe homes for all</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">Water</div>
                    <div className="text-gray-400 text-sm">Clean water access</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-1">Food</div>
                    <div className="text-gray-400 text-sm">Sustainable nutrition</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">Jobs</div>
                    <div className="text-gray-400 text-sm">Meaningful employment</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-teal-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group">
                  <span className="relative z-10 flex items-center justify-center">
                    <Heart size={20} className="mr-2" />
                    Join Our Mission
                  </span>
                </button>
                
                <button className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                  View Impact Report
                </button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                🌍 Together, we're building a better world through music and technology
              </div>
            </div>
          </div>
        </ScrollAnimator>

        {/* Health and Wellness Programs Section */}
        <ScrollAnimator>
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Activity size={32} className="text-green-400 mr-3" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Health & Wellness Programs
                </h2>
                <Heart size={32} className="text-red-400 ml-3" />
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Comprehensive health and wellness initiatives supporting mental, physical, and spiritual well-being 
                through innovative programs and world-class partnerships.
              </p>
            </div>
          </div>
        </ScrollAnimator>

        {/* Health & Wellness Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {healthWellnessPrograms.map((program, index) => (
            <ScrollAnimator key={program.title} delay={index * 150} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="relative group">
                {/* Animated background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${program.bgGradient} blur-md transition-all duration-500 group-hover:blur-lg group-hover:scale-105`}></div>
                
                <GlassMorphCard className="relative h-full border-2 border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{program.emoji}</div>
                    <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm">
                      {program.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Impact:</div>
                      <div className="text-white font-semibold text-sm">{program.impact}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Locations:</div>
                      <div className="text-white font-semibold text-sm">{program.locations}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Activity size={16} className="text-green-400 mr-2" />
                      Key Services:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {program.website && (
                    <div className="mb-4">
                      <a 
                        href={`https://${program.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 text-sm transition-colors"
                      >
                        Visit {program.website} →
                      </a>
                    </div>
                  )}
                  
                  <button className={`w-full px-6 py-3 rounded-full bg-gradient-to-r ${program.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105`}>
                    Access Programs
                  </button>
                </GlassMorphCard>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Health Partners */}
        <ScrollAnimator>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Health & Wellness Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthPartners.map((partner, index) => (
                <ScrollAnimator key={partner.name} delay={index * 100} animation="fade-up">
                  <GlassMorphCard className="h-full text-center">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <div className="flex items-center justify-center mb-3">
                      {partner.icon}
                      <h4 className="text-lg font-bold text-white ml-2">{partner.name}</h4>
                    </div>
                    <div className="text-sm text-gray-400 mb-3">{partner.category}</div>
                    <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                    <div className="space-y-1">
                      {partner.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400 justify-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          <span>{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </GlassMorphCard>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </ScrollAnimator>

        {/* Health Statistics */}
        <ScrollAnimator animation="fade-up">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Health & Wellness Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {healthStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-black/30 to-green-900/20 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-3">Holistic Wellness Approach</h4>
              <p className="text-gray-300 mb-4">
                Our comprehensive health programs address the complete spectrum of human wellness - 
                mental, physical, spiritual, and social well-being for thriving communities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-purple-400 mb-1">Mental</div>
                  <div className="text-gray-400 text-sm">Emotional wellness</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-400 mb-1">Physical</div>
                  <div className="text-gray-400 text-sm">Body health</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-400 mb-1">Spiritual</div>
                  <div className="text-gray-400 text-sm">Inner peace</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400 mb-1">Social</div>
                  <div className="text-gray-400 text-sm">Community connection</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                Access Wellness Programs
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Partner With Us
              </button>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              🌟 Empowering healthier communities through comprehensive wellness solutions
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};