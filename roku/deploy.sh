#!/bin/bash

# Dr33MTV Roku Channel Deployment Script
# This script packages and deploys the Dr33MTV Roku channel

echo "=========================================="
echo "Dr33MTV Roku Channel Deployment"
echo "=========================================="

# Configuration
CHANNEL_NAME="Dr33MTV_Channel"
ROKU_IP="${1:-192.168.1.100}"  # Default IP, can be overridden
ROKU_USER="${2:-rokudev}"      # Default username
ROKU_PASS="${3:-rokudev}"      # Default password

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to validate project structure
validate_structure() {
    print_status "Validating project structure..."
    
    required_files=(
        "manifest"
        "source/main.brs"
        "components/HomeScene.xml"
        "components/HomeScene.brs"
        "images/Icon_HD.png"
        "images/Icon_SD.png"
        "images/splash_hd.jpg"
        "images/splash_sd.jpg"
    )
    
    for file in "${required_files[@]}"; do
        if [[ ! -f "$file" ]]; then
            print_error "Required file missing: $file"
            return 1
        fi
    done
    
    print_success "Project structure validation passed"
    return 0
}

# Function to create deployment package
create_package() {
    print_status "Creating deployment package..."
    
    # Remove any existing package
    rm -f "${CHANNEL_NAME}.zip"
    
    # Create ZIP package (excluding development files)
    zip -r "${CHANNEL_NAME}.zip" . \
        -x "*.git*" \
        -x "README.md" \
        -x "deploy.sh" \
        -x "*.DS_Store" \
        -x "*.log" \
        -x "node_modules/*" \
        -x ".vscode/*" \
        -x "*.tmp"
    
    if [[ $? -eq 0 ]]; then
        print_success "Package created: ${CHANNEL_NAME}.zip"
        
        # Show package contents
        print_status "Package contents:"
        unzip -l "${CHANNEL_NAME}.zip" | head -20
        
        # Show package size
        size=$(du -h "${CHANNEL_NAME}.zip" | cut -f1)
        print_status "Package size: $size"
        
        return 0
    else
        print_error "Failed to create package"
        return 1
    fi
}

# Function to deploy to Roku device
deploy_to_roku() {
    print_status "Deploying to Roku device at $ROKU_IP..."
    
    # Check if curl is available
    if ! command -v curl &> /dev/null; then
        print_error "curl is required for deployment but not installed"
        return 1
    fi
    
    # Test connection to Roku device
    print_status "Testing connection to Roku device..."
    if ! curl -s --connect-timeout 5 "http://${ROKU_IP}:8080" > /dev/null; then
        print_error "Cannot connect to Roku device at $ROKU_IP:8080"
        print_warning "Make sure:"
        print_warning "1. Roku device is on the same network"
        print_warning "2. Developer mode is enabled"
        print_warning "3. IP address is correct"
        return 1
    fi
    
    print_success "Connected to Roku device"
    
    # Deploy the channel
    print_status "Uploading channel package..."
    response=$(curl -s -u "${ROKU_USER}:${ROKU_PASS}" \
        -F "mysubmit=Install" \
        -F "archive=@${CHANNEL_NAME}.zip" \
        "http://${ROKU_IP}:8080/plugin_install")
    
    if [[ $? -eq 0 ]]; then
        # Check if installation was successful
        if echo "$response" | grep -q "Identical to previous version"; then
            print_warning "Channel package is identical to previous version"
        elif echo "$response" | grep -q "Install Success"; then
            print_success "Channel deployed successfully!"
        elif echo "$response" | grep -q "Install Failure"; then
            print_error "Channel installation failed"
            echo "$response" | grep -A 5 -B 5 "Install Failure"
            return 1
        else
            print_success "Channel deployed (status unclear)"
        fi
        
        print_status "Channel should now be available on your Roku device"
        print_status "Look for 'Dr33MTV' in the home screen"
        
        return 0
    else
        print_error "Failed to upload channel package"
        return 1
    fi
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [ROKU_IP] [USERNAME] [PASSWORD]"
    echo ""
    echo "Arguments:"
    echo "  ROKU_IP    IP address of Roku device (default: 192.168.1.100)"
    echo "  USERNAME   Roku developer username (default: rokudev)"
    echo "  PASSWORD   Roku developer password (default: rokudev)"
    echo ""
    echo "Examples:"
    echo "  $0                                    # Use defaults"
    echo "  $0 192.168.1.150                     # Custom IP"
    echo "  $0 192.168.1.150 myuser mypass       # Custom credentials"
    echo ""
    echo "Prerequisites:"
    echo "  1. Roku device with developer mode enabled"
    echo "  2. Device and computer on same network"
    echo "  3. curl installed on this system"
}

# Function to show development tips
show_dev_tips() {
    echo ""
    echo "=========================================="
    echo "Development Tips"
    echo "=========================================="
    echo ""
    echo "1. Enable Developer Mode on Roku:"
    echo "   - Go to Settings > System > Advanced system settings > Developer options"
    echo "   - Enable 'Developer mode'"
    echo "   - Set username and password"
    echo ""
    echo "2. Find Roku IP Address:"
    echo "   - Go to Settings > Network > About"
    echo "   - Note the IP address"
    echo ""
    echo "3. Access Developer Interface:"
    echo "   - Open browser to http://ROKU_IP:8080"
    echo "   - Use developer credentials to login"
    echo ""
    echo "4. Debug Console:"
    echo "   - telnet ROKU_IP 8085"
    echo "   - View real-time debug output"
    echo ""
    echo "5. Channel Testing:"
    echo "   - Test on actual Roku hardware"
    echo "   - Verify all video formats work"
    echo "   - Test remote control navigation"
    echo ""
    echo "6. Performance Monitoring:"
    echo "   - Monitor memory usage"
    echo "   - Check image loading times"
    echo "   - Verify smooth navigation"
}

# Main execution
main() {
    # Check if help requested
    if [[ "$1" == "-h" || "$1" == "--help" ]]; then
        show_usage
        show_dev_tips
        exit 0
    fi
    
    # Validate we're in the right directory
    if [[ ! -f "manifest" ]]; then
        print_error "Must run from Dr33MTV_Roku directory"
        print_status "Current directory: $(pwd)"
        exit 1
    fi
    
    # Run deployment steps
    if validate_structure; then
        if create_package; then
            echo ""
            print_status "Package created successfully!"
            print_status "You can now:"
            print_status "1. Deploy to Roku: $0 [ROKU_IP]"
            print_status "2. Manual install: Upload ${CHANNEL_NAME}.zip via Roku developer interface"
            echo ""
            
            # Ask if user wants to deploy now
            read -p "Deploy to Roku device now? (y/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                deploy_to_roku
            else
                print_status "Deployment skipped. Package ready for manual installation."
            fi
        else
            exit 1
        fi
    else
        exit 1
    fi
}

# Run main function with all arguments
main "$@"
