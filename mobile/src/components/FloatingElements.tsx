import React from 'react';
import { View, StyleSheet } from 'react-native';


export const FloatingElements: React.FC = () => {
  const elements = Array.from({ length: 15 }, (_, i) => i);

  return (
    <View >
      {elements.map((i) => {
        // Generate random properties for each element
        const size = Math.floor(Math.random() * 200) + 50; // 50-250px
        const posX = Math.floor(Math.random() * 100); // 0-100%
        const posY = Math.floor(Math.random() * 100); // 0-100%
        const animDuration = Math.floor(Math.random() * 60) + 30; // 30-90s
        const delay = Math.floor(Math.random() * 10); // 0-10s
        const opacity = (Math.floor(Math.random() * 3) + 1) / 10; // 0.1-0.3

        return (
          <View
            key={i}
            
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
              opacity: opacity,
              animation: `float ${animDuration}s ease-in-out ${delay}s infinite alternate, rotate ${animDuration * 2}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
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