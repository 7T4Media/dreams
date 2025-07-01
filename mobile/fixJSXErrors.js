#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJSXInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanged = false;

  // Fix malformed Ionicons with double slashes
  content = content.replace(/<Ionicons name="([^"]+)"\s+size=\{(\d+)\}\s+style=\{[^}]+\}\s+\/\s+\/>/g, 
    '<Ionicons name="$1" size={$2} color="#8B5CF6" />');
  
  // Fix other malformed self-closing tags
  content = content.replace(/\/\s+\/>/g, ' />');
  
  // Fix broken JSX attributes
  content = content.replace(/\s+\/\s+\/>/g, ' />');
  
  // Remove any remaining style references that are invalid
  content = content.replace(/style=\{styles\.[a-zA-Z0-9]+\}/g, '');
  
  // Fix any remaining broken tags
  content = content.replace(/<([A-Za-z]+)\s+([^>]*)\s+\/\s+\/>/g, '<$1 $2 />');
  
  // Remove any invalid style attributes
  content = content.replace(/style=\{styles\.[a-zA-Z0-9_-]+\}/g, '');
  
  if (content !== fs.readFileSync(filePath, 'utf8')) {
    hasChanged = true;
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX errors in: ${filePath}`);
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
      fixJSXInFile(fullPath);
    }
  });
}

// Process src directory
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  processDirectory(srcDir);
  console.log('JSX error fixing completed!');
} else {
  console.log('src directory not found');
}
