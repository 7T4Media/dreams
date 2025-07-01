
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface AIAgent {
  id: string;
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string[];
  features: string[];
}

interface AIEcosystemCardProps {
  agent: AIAgent;
  onPress: () => void;
}

export const AIEcosystemCard: React.FC<AIEcosystemCardProps> = ({ agent, onPress }) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      <LinearGradient
        colors={agent.color}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        
      >
        <View >
          <View >
            <Ionicons name={agent.icon} size={32} color="#FFFFFF" />
          </View>
          <Text >{agent.name}</Text>
        </View>
        
        <Text >{agent.description}</Text>
        
        <View >
          {agent.features.map((feature, index) => (
            <View key={index} >
              <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" />
              <Text >{feature}</Text>
            </View>
          ))}
        </View>
        
        <View >
          <Text >Learn More</Text>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
    opacity: 0.9,
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 8,
    opacity: 0.9,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  learnMore: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
});
