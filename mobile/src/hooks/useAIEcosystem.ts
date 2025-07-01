
import { useState, useEffect } from 'react';
import { aiEcosystemService, CulturalIntelligenceData, BusinessMetrics, ArtistProfile } from '../services/aiEcosystem';

export const useAIEcosystem = () => {
  const [culturalData, setCulturalData] = useState<CulturalIntelligenceData | null>(null);
  const [businessMetrics, setBusinessMetrics] = useState<BusinessMetrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCulturalIntelligence = async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await aiEcosystemService.getCulturalIntelligence(location);
      setCulturalData(data);
    } catch (err) {
      setError('Failed to load cultural intelligence data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadBusinessMetrics = async (artistId: string) => {
    setLoading(true);
    setError(null);
    try {
      const metrics = await aiEcosystemService.getBusinessMetrics(artistId);
      setBusinessMetrics(metrics);
    } catch (err) {
      setError('Failed to load business metrics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const findBandMembers = async (criteria: {
    genre: string[];
    location: string;
    skillLevel: number;
    instruments: string[];
  }): Promise<ArtistProfile[]> => {
    setLoading(true);
    setError(null);
    try {
      const matches = await aiEcosystemService.findBandMembers(criteria);
      return matches;
    } catch (err) {
      setError('Failed to find band members');
      console.error(err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    culturalData,
    businessMetrics,
    loading,
    error,
    loadCulturalIntelligence,
    loadBusinessMetrics,
    findBandMembers,
  };
};
