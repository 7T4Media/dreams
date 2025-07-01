
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
ROKU_DIR="$PROJECT_ROOT/roku"
BUILD_DIR="$PROJECT_ROOT/builds/roku"

echo -e "${BLUE}📺 Building Dr33MTV Roku Channel${NC}"
echo "================================="

# Check if Roku directory exists
if [ ! -d "$ROKU_DIR" ]; then
    echo -e "${RED}❌ Roku directory not found: $ROKU_DIR${NC}"
    exit 1
fi

# Create build directory
mkdir -p "$BUILD_DIR"

# Navigate to Roku directory
cd "$ROKU_DIR"

# Check if manifest exists
if [ ! -f "manifest" ]; then
    echo -e "${RED}❌ manifest file not found in Roku directory${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Packaging Roku channel...${NC}"

# Create channel package
CHANNEL_NAME="Dr33MTV_Channel"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
PACKAGE_NAME="${CHANNEL_NAME}_${TIMESTAMP}.zip"

# Remove existing package if it exists
rm -f "$CHANNEL_NAME.zip"

# Create the channel package
zip -r "$PACKAGE_NAME" . -x "*.git*" "*.DS_Store" "deploy.sh" "README.md" "*.zip"

# Copy to build directory
cp "$PACKAGE_NAME" "$BUILD_DIR/"

# Also create a generic named package
cp "$PACKAGE_NAME" "$BUILD_DIR/Dr33MTV_Channel.zip"

echo -e "${GREEN}✅ Roku channel packaged: $PACKAGE_NAME${NC}"

# Create deployment script
cat > "$BUILD_DIR/deploy_roku.sh" << 'EOF'
#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📺 Dr33MTV Roku Channel Deployment${NC}"
echo "=================================="

# Check if ROKU_DEV_TARGET is set
if [ -z "$ROKU_DEV_TARGET" ]; then
    echo -e "${YELLOW}⚠️  ROKU_DEV_TARGET not set${NC}"
    echo "Please set your Roku device IP address:"
    echo "export ROKU_DEV_TARGET=192.168.1.XXX"
    echo ""
    read -p "Enter Roku device IP address: " ROKU_IP
    export ROKU_DEV_TARGET="$ROKU_IP"
fi

# Check if ROKU_DEV_PASSWORD is set
if [ -z "$ROKU_DEV_PASSWORD" ]; then
    echo -e "${YELLOW}⚠️  ROKU_DEV_PASSWORD not set${NC}"
    echo "Please set your Roku developer password:"
    read -s -p "Enter Roku developer password: " ROKU_PASSWORD
    echo ""
    export ROKU_DEV_PASSWORD="$ROKU_PASSWORD"
fi

echo -e "${BLUE}🚀 Deploying to Roku device: $ROKU_DEV_TARGET${NC}"

# Deploy the channel
curl -s -S -F "mysubmit=Install" -F "archive=@Dr33MTV_Channel.zip" \
     -u "rokudev:$ROKU_DEV_PASSWORD" \
     "http://$ROKU_DEV_TARGET/plugin_install" > /dev/null

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dr33MTV channel deployed successfully!${NC}"
    echo -e "${BLUE}📱 Launch the channel on your Roku device${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    echo "Please check:"
    echo "1. Roku device IP address is correct"
    echo "2. Developer mode is enabled on Roku"
    echo "3. Developer password is correct"
    echo "4. Roku device is on the same network"
    exit 1
fi
EOF

chmod +x "$BUILD_DIR/deploy_roku.sh"

# Create build info
cat > "$BUILD_DIR/BUILD_INFO.md" << EOF
# Dr33MTV Roku Channel Build Information

## Build Date
$(date)

## Package Information
- **Channel Name**: Dr33MTV
- **Version**: 1.0.00001
- **Package**: Dr33MTV_Channel.zip

## Deployment Requirements
1. **Roku Device**: Any Roku device (Roku 2 or newer recommended)
2. **Developer Mode**: Must be enabled on the Roku device
3. **Network**: Roku device and deployment machine on same network
4. **Developer Account**: Roku developer account (free)

## Deployment Steps

### 1. Enable Developer Mode on Roku
1. Go to Settings > System > Advanced system settings > Developer options
2. Enable "Developer mode"
3. Set a developer password
4. Note the device IP address

### 2. Deploy the Channel
\`\`\`bash
# Set environment variables
export ROKU_DEV_TARGET=192.168.1.XXX  # Your Roku IP
export ROKU_DEV_PASSWORD=your_dev_password

# Deploy the channel
./deploy_roku.sh
\`\`\`

### 3. Alternative Manual Deployment
1. Open browser to http://ROKU_IP (replace with your Roku's IP)
2. Login with username "rokudev" and your developer password
3. Upload the Dr33MTV_Channel.zip file
4. Click "Install"

## Channel Features
- **AI-Powered Content**: Intelligent music discovery and recommendations
- **Global Music Streaming**: Access to diverse international music content
- **DRM Protection**: Secure content delivery and copyright protection
- **Multi-Language Support**: Localized content and interface
- **High-Quality Streaming**: HD video and audio streaming

## Testing
- Test on multiple Roku device models if possible
- Verify all video playback functionality
- Test navigation and user interface
- Validate content loading and streaming performance

## Publishing to Roku Channel Store
1. Create Roku Developer Account
2. Submit channel for certification
3. Provide required metadata and screenshots
4. Wait for Roku approval process
EOF

echo -e "${GREEN}✅ Roku build completed successfully!${NC}"
echo -e "${YELLOW}📁 Build artifacts: $BUILD_DIR${NC}"
echo -e "${BLUE}📋 Package: $PACKAGE_NAME${NC}"
echo -e "${BLUE}🚀 Deploy with: ./deploy_roku.sh${NC}"
