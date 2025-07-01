
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
PACKAGE_DIR="$PROJECT_ROOT/packages"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo -e "${BLUE}📦 1DreamUnited Multi-Platform Packaging${NC}"
echo "========================================="

# Create packages directory
mkdir -p "$PACKAGE_DIR"

echo -e "${YELLOW}🏗️  Building all platforms first...${NC}"
./build_all.sh

echo -e "${YELLOW}📦 Creating distribution packages...${NC}"

# Package mobile builds
if [ -d "$PROJECT_ROOT/builds/mobile" ]; then
    echo -e "${BLUE}📱 Packaging mobile builds...${NC}"
    cd "$PROJECT_ROOT/builds"
    tar -czf "$PACKAGE_DIR/1DreamUnited_Mobile_${TIMESTAMP}.tar.gz" mobile/
    echo -e "${GREEN}✅ Mobile package created${NC}"
fi

# Package desktop builds
if [ -d "$PROJECT_ROOT/builds/desktop" ]; then
    echo -e "${BLUE}🖥️  Packaging desktop builds...${NC}"
    cd "$PROJECT_ROOT/builds"
    tar -czf "$PACKAGE_DIR/1DreamUnited_Desktop_${TIMESTAMP}.tar.gz" desktop/
    echo -e "${GREEN}✅ Desktop package created${NC}"
fi

# Package Roku builds
if [ -d "$PROJECT_ROOT/builds/roku" ]; then
    echo -e "${BLUE}📺 Packaging Roku builds...${NC}"
    cd "$PROJECT_ROOT/builds"
    tar -czf "$PACKAGE_DIR/1DreamUnited_Roku_${TIMESTAMP}.tar.gz" roku/
    echo -e "${GREEN}✅ Roku package created${NC}"
fi

# Create complete package
echo -e "${BLUE}📦 Creating complete multi-platform package...${NC}"
cd "$PROJECT_ROOT"
tar -czf "$PACKAGE_DIR/1DreamUnited_Complete_${TIMESTAMP}.tar.gz" \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='builds' \
    --exclude='packages' \
    .

echo -e "${GREEN}✅ Complete package created${NC}"

# Create package manifest
cat > "$PACKAGE_DIR/PACKAGE_MANIFEST.md" << EOF
# 1DreamUnited Multi-Platform Package Manifest

## Package Date
$(date)

## Available Packages

### Individual Platform Packages
- **Mobile**: \`1DreamUnited_Mobile_${TIMESTAMP}.tar.gz\`
  - React Native app for iOS and Android
  - Development builds and configuration

- **Desktop**: \`1DreamUnited_Desktop_${TIMESTAMP}.tar.gz\`
  - Electron app for Windows, macOS, and Linux
  - Platform-specific installers and executables

- **Roku**: \`1DreamUnited_Roku_${TIMESTAMP}.tar.gz\`
  - Dr33MTV Roku channel package
  - Deployment scripts and documentation

### Complete Package
- **Complete**: \`1DreamUnited_Complete_${TIMESTAMP}.tar.gz\`
  - Full source code for all platforms
  - Build scripts and documentation
  - Ready for development and deployment

## Package Contents
Each package includes:
- Source code
- Build artifacts
- Platform-specific documentation
- Deployment instructions
- Build and deployment scripts

## Usage
1. Extract the desired package
2. Follow the platform-specific README instructions
3. Use the provided build scripts for compilation
4. Deploy using the included deployment guides

## Support
For technical support and documentation:
- Project Website: https://1dreamunited.com
- Documentation: See docs/ directory in complete package
EOF

# Generate checksums
echo -e "${YELLOW}🔐 Generating checksums...${NC}"
cd "$PACKAGE_DIR"
sha256sum *.tar.gz > checksums.sha256

echo -e "${GREEN}✅ All packages created successfully!${NC}"
echo -e "${YELLOW}📁 Packages location: $PACKAGE_DIR${NC}"
echo ""
echo -e "${BLUE}📋 Package Summary:${NC}"
ls -lh "$PACKAGE_DIR"/*.tar.gz
echo ""
echo -e "${BLUE}🔐 Checksums:${NC}"
cat "$PACKAGE_DIR/checksums.sha256"
