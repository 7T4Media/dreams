
#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
MOBILE_DIR="$PROJECT_ROOT/mobile/react_native"
BUILD_DIR="$PROJECT_ROOT/builds/mobile"

echo -e "${BLUE}📱 Building 1DreamUnited Mobile App${NC}"
echo "===================================="

# Check if mobile directory exists
if [ ! -d "$MOBILE_DIR" ]; then
    echo -e "${RED}❌ Mobile directory not found: $MOBILE_DIR${NC}"
    exit 1
fi

# Create build directory
mkdir -p "$BUILD_DIR"

# Navigate to mobile directory
cd "$MOBILE_DIR"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json not found in mobile directory${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install --silent

echo -e "${YELLOW}🔧 Running type check...${NC}"
npm run type-check

echo -e "${YELLOW}🧹 Running linter...${NC}"
npm run lint

echo -e "${YELLOW}🏗️  Building for production...${NC}"

# Check if EAS CLI is available
if command -v eas &> /dev/null; then
    echo -e "${BLUE}Building with EAS (Expo Application Services)${NC}"
    echo "Note: EAS builds require authentication and may take time"
    echo "For local development builds, use: expo prebuild"
    
    # Prebuild for local development
    echo -e "${YELLOW}🔨 Creating local development build...${NC}"
    npx expo prebuild --clean --no-install
    
    # Copy prebuild output to builds directory
    if [ -d "android" ]; then
        cp -r android "$BUILD_DIR/android-dev"
        echo -e "${GREEN}✅ Android development build ready${NC}"
    fi
    
    if [ -d "ios" ]; then
        cp -r ios "$BUILD_DIR/ios-dev"
        echo -e "${GREEN}✅ iOS development build ready${NC}"
    fi
    
else
    echo -e "${YELLOW}⚠️  EAS CLI not found. Installing...${NC}"
    npm install -g @expo/cli eas-cli
    
    echo -e "${BLUE}🔨 Creating development builds...${NC}"
    npx expo prebuild --clean --no-install
    
    # Copy prebuild output to builds directory
    if [ -d "android" ]; then
        cp -r android "$BUILD_DIR/android-dev"
        echo -e "${GREEN}✅ Android development build ready${NC}"
    fi
    
    if [ -d "ios" ]; then
        cp -r ios "$BUILD_DIR/ios-dev"
        echo -e "${GREEN}✅ iOS development build ready${NC}"
    fi
fi

# Create build info
cat > "$BUILD_DIR/BUILD_INFO.md" << EOF
# 1DreamUnited Mobile Build Information

## Build Date
$(date)

## Platform Support
- **iOS**: Requires Xcode and iOS development setup
- **Android**: Requires Android Studio and Android SDK

## Development Builds
- Android: \`android-dev/\` directory
- iOS: \`ios-dev/\` directory

## Production Builds
For production builds, use EAS (Expo Application Services):
\`\`\`bash
eas build --platform android
eas build --platform ios
eas build --platform all
\`\`\`

## Testing
\`\`\`bash
npm test
npm run test:coverage
\`\`\`

## Deployment
\`\`\`bash
eas submit --platform android
eas submit --platform ios
\`\`\`
EOF

echo -e "${GREEN}✅ Mobile build completed successfully!${NC}"
echo -e "${YELLOW}📁 Build artifacts: $BUILD_DIR${NC}"
