
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ArtistProfile } from '../services/aiEcosystem';

interface BandMemberCardProps {
  artist: ArtistProfile;
  onConnect: () => void;
  onViewProfile: () => void;
}

export const BandMemberCard: React.FC<BandMemberCardProps> = ({ 
  artist, 
  onConnect, 
  onViewProfile 
}) => {
  const getSkillLevelColor = (level: number): string => {
    if (level >= 80) return '#10B981'; // Green
    if (level >= 60) return '#F59E0B'; // Yellow
    if (level >= 40) return '#EF4444'; // Red
    return '#6B7280'; // Gray
  };

  const getSkillLevelText = (level: number): string => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <View >
      <View >
        <View >
          <Ionicons name="person" size={32} color="#8B5CF6" />
        </View>
        <View >
          <Text >{artist.name}</Text>
          <Text >{artist.culturalBackground}</Text>
          <View >
            <View 
              style={[
                styles.skillBadge, 
                { backgroundColor: getSkillLevelColor(artist.skillLevel) }
              ]}
            >
              <Text >
                {getSkillLevelText(artist.skillLevel)}
              </Text>
            </View>
            <Text >
              Potential: {Math.round(artist.potentialScore)}%
            </Text>
          </View>
        </View>
      </View>

      <View >
        {artist.genre.map((genre, index) => (
          <View key={index} >
            <Text >{genre}</Text>
          </View>
        ))}
      </View>

      <View >
        <Text >Development Path:</Text>
        {artist.developmentPath.slice(0, 2).map((path, index) => (
          <View key={index} >
            <Ionicons name="arrow-forward" size={12} color="#8B5CF6" />
            <Text >{path}</Text>
          </View>
        ))}
      </View>

      <View >
        <TouchableOpacity  onPress={onViewProfile}>
          <Text >View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={onConnect}>
          <Ionicons name="musical-notes" size={16} color="#FFFFFF" />
          <Text >Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatarContainer: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  location: {
    color: '#D1D5DB',
    fontSize: 12,
    marginBottom: 4,
  },
  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillBadge: {
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  skillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  potentialScore: {
    color: '#8B5CF6',
    fontSize: 10,
    fontWeight: '600',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  genreTag: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 6,
    marginBottom: 4,
  },
  genreText: {
    color: '#8B5CF6',
    fontSize: 11,
  },
  developmentContainer: {
    marginBottom: 16,
  },
  developmentTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  developmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  developmentText: {
    color: '#D1D5DB',
    fontSize: 11,
    marginLeft: 6,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  connectButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
});
