#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping of web elements to React Native components
const elementMappings = {
  'div': 'View',
  'span': 'Text',
  'p': 'Text',
  'h1': 'Text',
  'h2': 'Text',
  'h3': 'Text',
  'h4': 'Text',
  'h5': 'Text',
  'h6': 'Text',
  'img': 'Image',
  'button': 'TouchableOpacity',
  'a': 'TouchableOpacity',
  'input': 'TextInput',
  'textarea': 'TextInput',
  'section': 'View',
  'article': 'View',
  'header': 'View',
  'footer': 'View',
  'nav': 'View',
  'main': 'View',
  'aside': 'View'
};

// Props that need to be converted
const propMappings = {
  'onClick': 'onPress',
  'className': 'style',
  'src': 'source',
  'alt': 'accessibilityLabel',
  'htmlFor': 'nativeID'
};

function transformFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanged = false;

  // Transform JSX elements
  Object.entries(elementMappings).forEach(([webElement, nativeElement]) => {
    const openTagRegex = new RegExp(`<${webElement}(\\s|>)`, 'g');
    const closeTagRegex = new RegExp(`</${webElement}>`, 'g');
    
    if (content.match(openTagRegex) || content.match(closeTagRegex)) {
      content = content.replace(openTagRegex, `<${nativeElement}$1`);
      content = content.replace(closeTagRegex, `</${nativeElement}>`);
      hasChanged = true;
    }
  });

  // Transform props
  Object.entries(propMappings).forEach(([webProp, nativeProp]) => {
    const propRegex = new RegExp(`\\b${webProp}=`, 'g');
    if (content.match(propRegex)) {
      content = content.replace(propRegex, `${nativeProp}=`);
      hasChanged = true;
    }
  });

  // Remove CSS imports and className usage
  content = content.replace(/import\s+['"][^'"]*\.css['"];?\s*/g, '');
  
  // Replace className with style prop (basic conversion)
  content = content.replace(/className=["']([^"']+)["']/g, 'style={styles.$1}');
  
  // Add React Native imports if elements were transformed
  if (hasChanged) {
    const rnComponents = new Set();
    Object.values(elementMappings).forEach(component => {
      if (content.includes(`<${component}`)) {
        rnComponents.add(component);
      }
    });

    if (rnComponents.size > 0) {
      const importStatement = `import { ${Array.from(rnComponents).join(', ')} } from 'react-native';\n`;
      
      // Add import after existing React import or at the top
      if (content.includes("import React")) {
        content = content.replace(
          /(import React[^;]*;)/,
          `$1\n${importStatement}`
        );
      } else {
        content = `${importStatement}${content}`;
      }
    }
  }

  if (hasChanged) {
    fs.writeFileSync(filePath, content);
    console.log(`Transformed: ${filePath}`);
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
      transformFile(fullPath);
    }
  });
}

// Process src directory
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  processDirectory(srcDir);
  console.log('Web to React Native transformation completed!');
} else {
  console.log('src directory not found');
}
