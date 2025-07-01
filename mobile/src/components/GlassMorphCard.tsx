import React from 'react';
import { View } from 'react-native';


interface GlassMorphCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassMorphCard: React.FC<GlassMorphCardProps> = ({ children, className = '' }) => {
  return (
    <View
      style={`relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-xl transition-all duration-300 hover:shadow-teal-500/10 hover:border-teal-500/30 hover:-translate-y-1 ${className}`}
    >
      {children}
    </View>
  );
};