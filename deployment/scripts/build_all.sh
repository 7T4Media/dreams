
#!/bin/bash
set -e

echo "🚀 1DreamUnited Multi-Platform Build Script"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
BUILD_DIR="$PROJECT_ROOT/builds"

# Create builds directory
mkdir -p "$BUILD_DIR"

echo -e "${BLUE}📱 Building Mobile (React Native)...${NC}"
./build_mobile.sh

echo -e "${BLUE}🖥️  Building Desktop (Electron)...${NC}"
./build_desktop.sh

echo -e "${BLUE}📺 Building Roku Channel...${NC}"
./build_roku.sh

echo -e "${GREEN}✅ All platforms built successfully!${NC}"
echo -e "${YELLOW}📦 Build artifacts available in: $BUILD_DIR${NC}"

# Generate build summary
echo -e "${BLUE}📋 Build Summary${NC}"
echo "=================="
echo "Mobile (iOS/Android): $BUILD_DIR/mobile/"
echo "Desktop (Windows/macOS/Linux): $BUILD_DIR/desktop/"
echo "Roku Channel: $BUILD_DIR/roku/"
echo ""
echo -e "${GREEN}🎉 Multi-platform build completed successfully!${NC}"
