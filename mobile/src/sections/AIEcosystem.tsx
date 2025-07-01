import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SectionTitle } from '../components/SectionTitle';
import { AIEcosystemCard } from '../components/AIEcosystemCard';
import { useAIEcosystem } from '../hooks/useAIEcosystem';

const agents = [
  {
    id: 'cultural',
    name: 'Cultural Intelligence Agent',
    description: 'Real-time cultural adaptation across 190+ countries, supporting 7,000+ languages while preserving and celebrating musical diversity.',
    icon: 'globe' as const,
    color: ['#8B5CF6', '#06B6D4'],
    features: ['Global Cultural Mapping', 'Language Processing', 'Cultural Preservation', 'Real-time Adaptation']
  },
  {
    id: 'business',
    name: 'Business Operations Agent',
    description: 'Revenue optimization algorithms that maximize artist earnings and create sustainable economic models for local music ecosystems.',
    icon: 'trending-up' as const,
    color: ['#10B981', '#059669'],
    features: ['Revenue Optimization', 'Market Analysis', 'Economic Modeling', 'Sustainability Metrics']
  },
  {
    id: 'artist',
    name: 'Artist Development Agent',
    description: 'Talent discovery and growth system that identifies promising artists and provides personalized development pathways.',
    icon: 'star' as const,
    color: ['#F59E0B', '#D97706'],
    features: ['Talent Discovery', 'Skill Assessment', 'Growth Planning', 'Cultural Context Analysis']
  },
  {
    id: 'customer',
    name: 'Customer Experience Agent',
    description: '24/7 multilingual support with advanced natural language processing for seamless cross-platform experiences.',
    icon: 'heart' as const,
    color: ['#EF4444', '#DC2626'],
    features: ['24/7 Support', 'Multilingual AI', 'Experience Optimization', 'Personalization Engine']
  }
];

export default function AIEcosystem() {
  const { culturalData, businessMetrics, loading, error, loadCulturalIntelligence, loadBusinessMetrics } = useAIEcosystem();
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  useEffect(() => {
    // Load initial AI data
    loadCulturalIntelligence('Global');
    loadBusinessMetrics('demo-artist');
  }, []);

  const handleAgentPress = (agentId: string) => {
    setSelectedAgent(agentId);
    
    switch (agentId) {
      case 'cultural':
        loadCulturalIntelligence('Global');
        Alert.alert(
          'Cultural Intelligence Active',
          `Processing cultural data for global music ecosystem. ${culturalData ? `Current context: ${culturalData.culturalContext}` : 'Loading...'}`
        );
        break;
      case 'business':
        loadBusinessMetrics('demo-artist');
        Alert.alert(
          'Business Operations Active',
          `Analyzing revenue optimization and market metrics. ${businessMetrics ? `Current optimization: ${Math.round(businessMetrics.revenueOptimization)}%` : 'Loading...'}`
        );
        break;
      case 'artist':
        Alert.alert(
          'Artist Development Active',
          'Scanning for emerging talent and analyzing development pathways across cultural contexts.'
        );
        break;
      case 'customer':
        Alert.alert(
          'Customer Experience Active',
          'Multilingual AI support system activated. Processing user preferences and cultural adaptations.'
        );
        break;
    }
  };

  return (
    <View >
      <SectionTitle 
        title="AI-Driven Global Music Ecosystem"
        subtitle="Four specialized AI agents working together to revolutionize the music industry"
      />
      
      <ScrollView  showsVerticalScrollIndicator={false}>
        {agents.map((agent) => (
          <AIEcosystemCard
            key={agent.id}
            agent={agent}
            onPress={() => handleAgentPress(agent.id)}
          />
        ))}
        
        {culturalData && (
          <View >
            <Text >Cultural Intelligence Data</Text>
            <Text >Context: {culturalData.culturalContext}</Text>
            <Text >Genres: {culturalData.musicGenres.join(', ')}</Text>
            <Text >Trends: {culturalData.localTrends.join(', ')}</Text>
          </View>
        )}
        
        {businessMetrics && (
          <View >
            <Text >Business Operations Metrics</Text>
            <Text >Revenue Optimization: {Math.round(businessMetrics.revenueOptimization)}%</Text>
            <Text >Market Penetration: {Math.round(businessMetrics.marketPenetration)}%</Text>
            <Text >Sustainability Score: {Math.round(businessMetrics.sustainabilityScore)}%</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  agentsContainer: {
    flex: 1,
  },
  dataDisplay: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  dataTitle: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dataText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
});