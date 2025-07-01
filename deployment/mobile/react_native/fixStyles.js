#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixStylesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanged = false;

  // Remove any remaining className references and replace with proper style objects
  const classNameRegex = /style=["']([^"']+)["']/g;
  content = content.replace(classNameRegex, (match, className) => {
    hasChanged = true;
    // Convert common Tailwind classes to basic style objects
    const styleMap = {
      'text-center': 'styles.textCenter',
      'mb-16': 'styles.marginBottom16',
      'mb-4': 'styles.marginBottom4',
      'text-3xl': 'styles.text3xl',
      'text-lg': 'styles.textLg',
      'font-bold': 'styles.fontBold',
      'text-white': 'styles.textWhite',
      'text-gray-300': 'styles.textGray300',
      'bg-black': 'styles.bgBlack',
      'flex': 'styles.flex',
      'items-center': 'styles.itemsCenter',
      'justify-center': 'styles.justifyCenter',
      'p-4': 'styles.padding4',
      'p-6': 'styles.padding6',
      'rounded-lg': 'styles.roundedLg',
      'shadow-lg': 'styles.shadowLg',
    };

    // Try to map the className to a style
    if (styleMap[className]) {
      return `style={${styleMap[className]}}`;
    } else {
      // For complex classes, create a generic style reference
      const styleName = className.replace(/[^a-zA-Z0-9]/g, '');
      return `style={styles.${styleName}}`;
    }
  });

  // Add StyleSheet import if not present and styles are used
  if (hasChanged && !content.includes('StyleSheet')) {
    content = content.replace(
      /import { ([^}]+) } from 'react-native';/,
      "import { $1, StyleSheet } from 'react-native';"
    );
  }

  // Add basic styles object if not present
  if (hasChanged && !content.includes('const styles = StyleSheet.create')) {
    const basicStyles = `

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
});`;
    content += basicStyles;
  }

  // Fix any remaining Lucide React imports to use Expo vector icons
  content = content.replace(/import { ([^}]+) } from 'lucide-react';/, 
    "import { Ionicons } from '@expo/vector-icons';");

  // Replace Lucide icon usage with Ionicons
  const iconMappings = {
    'Music': 'musical-notes',
    'Globe': 'globe',
    'Users': 'people',
    'Brain': 'brain',
    'Shield': 'shield',
    'Play': 'play',
    'Star': 'star',
    'Heart': 'heart',
    'Search': 'search',
    'Settings': 'settings',
    'Home': 'home',
    'User': 'person',
    'Mail': 'mail',
    'Phone': 'call',
    'Camera': 'camera',
    'Video': 'videocam',
    'Mic': 'mic',
    'Volume': 'volume-high',
    'Download': 'download',
    'Upload': 'cloud-upload',
    'Share': 'share',
    'Like': 'thumbs-up',
    'Comment': 'chatbubble',
    'Bookmark': 'bookmark',
    'Calendar': 'calendar',
    'Clock': 'time',
    'Location': 'location',
    'Map': 'map',
    'Navigation': 'navigate',
    'Menu': 'menu',
    'Close': 'close',
    'Add': 'add',
    'Remove': 'remove',
    'Edit': 'create',
    'Delete': 'trash',
    'Save': 'save',
    'Copy': 'copy',
    'Cut': 'cut',
    'Paste': 'clipboard',
    'Undo': 'arrow-undo',
    'Redo': 'arrow-redo',
    'Refresh': 'refresh',
    'Sync': 'sync',
    'Lock': 'lock-closed',
    'Unlock': 'lock-open',
    'Eye': 'eye',
    'EyeOff': 'eye-off',
    'Visible': 'eye',
    'Hidden': 'eye-off',
    'Show': 'eye',
    'Hide': 'eye-off',
    'Check': 'checkmark',
    'X': 'close',
    'Plus': 'add',
    'Minus': 'remove',
    'ChevronUp': 'chevron-up',
    'ChevronDown': 'chevron-down',
    'ChevronLeft': 'chevron-back',
    'ChevronRight': 'chevron-forward',
    'ArrowUp': 'arrow-up',
    'ArrowDown': 'arrow-down',
    'ArrowLeft': 'arrow-back',
    'ArrowRight': 'arrow-forward',
  };

  Object.entries(iconMappings).forEach(([lucideIcon, ionIcon]) => {
    const iconRegex = new RegExp(`<${lucideIcon}([^>]*)>`, 'g');
    content = content.replace(iconRegex, `<Ionicons name="${ionIcon}" $1 />`);
  });

  if (hasChanged) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed styles in: ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixStylesInFile(fullPath);
    }
  });
}

// Process src directory
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  processDirectory(srcDir);
  console.log('Style fixing completed!');
} else {
  console.log('src directory not found');
}
