import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import { SectionTitle } from '../components/SectionTitle';
import { BandMemberCard } from '../components/BandMemberCard';
import { useAIEcosystem } from '../hooks/useAIEcosystem';
import { Ionicons } from '@expo/vector-icons';
import { ArtistProfile } from '../services/aiEcosystem';

const instruments = [
  { name: 'Guitar', icon: '🎸', count: '12,450+' },
  { name: 'Vocals', icon: '🎤', count: '8,920+' },
  { name: 'Drums', icon: '🥁', count: '6,780+' },
  { name: 'Bass', icon: '🎸', count: '5,340+' },
  { name: 'Piano', icon: '🎹', count: '7,650+' },
  { name: 'Violin', icon: '🎻', count: '4,230+' },
];

const genres = ['Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Jazz', 'Classical', 'Folk', 'R&B', 'Country', 'Reggae'];

export default function BandMemberFinder() {
  const { findBandMembers, loading, error } = useAIEcosystem();
  const [matches, setMatches] = useState<ArtistProfile[]>([]);
  const [searchCriteria, setSearchCriteria] = useState({
    genre: ['Pop'],
    location: 'Global',
    skillLevel: 50,
    instruments: ['Guitar'],
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Load initial matches
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const results = await findBandMembers(searchCriteria);
      setMatches(results);
    } catch (err) {
      Alert.alert('Search Error', 'Failed to find band members. Please try again.');
    }
  };

  const toggleGenre = (genre: string) => {
    setSearchCriteria(prev => ({
      ...prev,
      genre: prev.genre.includes(genre)
        ? prev.genre.filter(g => g !== genre)
        : [...prev.genre, genre]
    }));
  };

  const toggleInstrument = (instrument: string) => {
    setSearchCriteria(prev => ({
      ...prev,
      instruments: prev.instruments.includes(instrument)
        ? prev.instruments.filter(i => i !== instrument)
        : [...prev.instruments, instrument]
    }));
  };

  const handleConnect = (artist: ArtistProfile) => {
    Alert.alert(
      'Connect with Artist',
      `Send a collaboration request to ${artist.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Connect', 
          onPress: () => {
            Alert.alert('Success', `Connection request sent to ${artist.name}!`);
          }
        }
      ]
    );
  };

  const handleViewProfile = (artist: ArtistProfile) => {
    Alert.alert(
      `${artist.name}'s Profile`,
      `Genre: ${artist.genre.join(', ')}\nSkill Level: ${Math.round(artist.skillLevel)}%\nCultural Background: ${artist.culturalBackground}\nPotential Score: ${Math.round(artist.potentialScore)}%\n\nDevelopment Path:\n${artist.developmentPath.join('\n')}`
    );
  };

  return (
    <View >
      <SectionTitle 
        title="AI-Powered Band Member Finder"
        subtitle="Connect with musicians worldwide using our intelligent matching system"
      />

      <View >
        <TouchableOpacity 
          
          onPress={() => setShowFilters(!showFilters)}
        >
          <Ionicons name="options" size={20} color="#FFFFFF" />
          <Text >Filters</Text>
          <Ionicons 
            name={showFilters ? "chevron-up" : "chevron-down"} 
            size={16} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>

        {showFilters && (
          <View >
            <View >
              <Text >Location</Text>
              <TextInput
                
                value={searchCriteria.location}
                onChangeText={(text) => setSearchCriteria(prev => ({ ...prev, location: text }))}
                placeholder="Enter location..."
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View >
              <Text >Skill Level: {searchCriteria.skillLevel}%</Text>
              <View >
                <TouchableOpacity 
                  onPress={() => setSearchCriteria(prev => ({ 
                    ...prev, 
                    skillLevel: Math.max(0, prev.skillLevel - 10) 
                  }))}
                >
                  <Ionicons name="remove" size={24} color="#8B5CF6" />
                </TouchableOpacity>
                <View >
                  <View 
                    style={[styles.skillFill, { width: `${searchCriteria.skillLevel}%` }]} 
                  />
                </View>
                <TouchableOpacity 
                  onPress={() => setSearchCriteria(prev => ({ 
                    ...prev, 
                    skillLevel: Math.min(100, prev.skillLevel + 10) 
                  }))}
                >
                  <Ionicons name="add" size={24} color="#8B5CF6" />
                </TouchableOpacity>
              </View>
            </View>

            <View >
              <Text >Genres</Text>
              <View >
                {genres.map((genre) => (
                  <TouchableOpacity
                    key={genre}
                    style={[
                      styles.tag,
                      searchCriteria.genre.includes(genre) && styles.tagSelected
                    ]}
                    onPress={() => toggleGenre(genre)}
                  >
                    <Text style={[
                      styles.tagText,
                      searchCriteria.genre.includes(genre) && styles.tagTextSelected
                    ]}>
                      {genre}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View >
              <Text >Instruments</Text>
              <View >
                {instruments.map((instrument) => (
                  <TouchableOpacity
                    key={instrument.name}
                    style={[
                      styles.tag,
                      searchCriteria.instruments.includes(instrument.name) && styles.tagSelected
                    ]}
                    onPress={() => toggleInstrument(instrument.name)}
                  >
                    <Text >{instrument.icon}</Text>
                    <Text style={[
                      styles.tagText,
                      searchCriteria.instruments.includes(instrument.name) && styles.tagTextSelected
                    ]}>
                      {instrument.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity  onPress={handleSearch}>
              <Ionicons name="search" size={20} color="#FFFFFF" />
              <Text >Find Matches</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View >
        <View >
          <Text >{matches.length}</Text>
          <Text >Matches Found</Text>
        </View>
        <View >
          <Text >190+</Text>
          <Text >Countries</Text>
        </View>
        <View >
          <Text >50K+</Text>
          <Text >Musicians</Text>
        </View>
      </View>

      <ScrollView  showsVerticalScrollIndicator={false}>
        {loading ? (
          <View >
            <Ionicons name="refresh" size={32} color="#8B5CF6" />
            <Text >Finding perfect matches...</Text>
          </View>
        ) : matches.length > 0 ? (
          matches.map((artist) => (
            <BandMemberCard
              key={artist.id}
              artist={artist}
              onConnect={() => handleConnect(artist)}
              onViewProfile={() => handleViewProfile(artist)}
            />
          ))
        ) : (
          <View >
            <Ionicons name="musical-notes-outline" size={48} color="#6B7280" />
            <Text >No matches found</Text>
            <Text >Try adjusting your search criteria</Text>
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
  searchContainer: {
    marginBottom: 24,
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  filtersButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  filtersContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  locationInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  skillSliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillBar: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginHorizontal: 12,
  },
  skillFill: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 3,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  tagSelected: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderColor: '#8B5CF6',
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  tagTextSelected: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  instrumentIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 8,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#8B5CF6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#D1D5DB',
    fontSize: 12,
    marginTop: 4,
  },
  matchesContainer: {
    flex: 1,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    color: '#8B5CF6',
    fontSize: 16,
    marginTop: 12,
  },
  noMatchesContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noMatchesText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  noMatchesSubtext: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});
