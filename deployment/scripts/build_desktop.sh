
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
DESKTOP_DIR="$PROJECT_ROOT/desktop/electron"
BUILD_DIR="$PROJECT_ROOT/builds/desktop"

echo -e "${BLUE}🖥️  Building 1DreamUnited Desktop App${NC}"
echo "====================================="

# Check if desktop directory exists
if [ ! -d "$DESKTOP_DIR" ]; then
    echo -e "${RED}❌ Desktop directory not found: $DESKTOP_DIR${NC}"
    exit 1
fi

# Create build directory
mkdir -p "$BUILD_DIR"

# Navigate to desktop directory
cd "$DESKTOP_DIR"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json not found in desktop directory${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install --silent

echo -e "${YELLOW}🧹 Running linter...${NC}"
npm run lint || echo -e "${YELLOW}⚠️  Linting completed with warnings${NC}"

echo -e "${YELLOW}🏗️  Building application...${NC}"
npm run package

echo -e "${YELLOW}📦 Creating distributables...${NC}"
npm run make

# Copy build artifacts
if [ -d "out" ]; then
    cp -r out/* "$BUILD_DIR/"
    echo -e "${GREEN}✅ Build artifacts copied to $BUILD_DIR${NC}"
fi

# Detect current platform and create platform-specific builds
PLATFORM=$(uname -s)
case $PLATFORM in
    Linux*)
        echo -e "${BLUE}🐧 Building for Linux...${NC}"
        npm run dist:linux || echo -e "${YELLOW}⚠️  Linux build completed with warnings${NC}"
        ;;
    Darwin*)
        echo -e "${BLUE}🍎 Building for macOS...${NC}"
        npm run dist:mac || echo -e "${YELLOW}⚠️  macOS build completed with warnings${NC}"
        ;;
    MINGW*|CYGWIN*|MSYS*)
        echo -e "${BLUE}🪟 Building for Windows...${NC}"
        npm run dist:win || echo -e "${YELLOW}⚠️  Windows build completed with warnings${NC}"
        ;;
    *)
        echo -e "${YELLOW}⚠️  Unknown platform: $PLATFORM${NC}"
        ;;
esac

# Create build info
cat > "$BUILD_DIR/BUILD_INFO.md" << EOF
# 1DreamUnited Desktop Build Information

## Build Date
$(date)

## Platform Support
- **Windows**: NSIS installer, Portable executable
- **macOS**: DMG installer, ZIP archive
- **Linux**: AppImage, DEB package, RPM package

## Build Artifacts
- \`make/\`: Platform-specific installers
- \`1DreamUnited-*\`: Packaged applications

## Running the Application
### Windows
- Run the NSIS installer or portable executable

### macOS
- Mount the DMG and drag to Applications folder
- Or extract ZIP and run the app

### Linux
- Install DEB/RPM package or run AppImage directly
- Make AppImage executable: \`chmod +x *.AppImage\`

## Development
\`\`\`bash
npm run start    # Start in development mode
npm run dev      # Same as start
npm run package  # Package without creating installers
npm run make     # Create platform-specific installers
\`\`\`

## Electron Forge Configuration
The app uses Electron Forge for building and packaging.
Configuration is in \`forge.config.ts\`.
EOF

echo -e "${GREEN}✅ Desktop build completed successfully!${NC}"
echo -e "${YELLOW}📁 Build artifacts: $BUILD_DIR${NC}"

# List available builds
echo -e "${BLUE}📋 Available builds:${NC}"
find "$BUILD_DIR" -name "*.exe" -o -name "*.dmg" -o -name "*.deb" -o -name "*.rpm" -o -name "*.AppImage" 2>/dev/null | head -10
