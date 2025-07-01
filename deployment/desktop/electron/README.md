# 1DreamUnited Desktop Application

## Overview

This is the desktop version of the 1DreamUnited AI-driven global music ecosystem platform, built with Electron for cross-platform compatibility across macOS, Windows, and Linux.

## Features

- **AI Ecosystem Integration**: All four specialized AI agents from the web platform
  - Cultural Intelligence Agent (190+ countries, 7,000+ languages)
  - Business Operations Agent (revenue optimization)
  - Artist Development Agent (talent discovery and growth)
  - Customer Experience Agent (24/7 multilingual support)

- **Dr33MTV Streaming Integration**: Desktop access to the revolutionary streaming platform
- **Cross-Platform Compatibility**: Native desktop applications for macOS, Windows, and Linux
- **Desktop-Specific Features**:
  - Native application menus
  - Desktop notifications
  - System tray integration
  - Window management
  - Deep linking support

## Technology Stack

- **Framework**: Electron with React 19 and TypeScript
- **Build System**: Vite 7.0 for fast development and optimized builds
- **Styling**: Tailwind CSS 4.1 with PostCSS
- **Icons**: Lucide React
- **Build Tools**: Electron Forge for packaging and distribution

## Project Structure

```
1DreamUnited_Desktop/
├── main.ts                 # Main Electron process
├── preload.ts             # Preload script for secure IPC
├── forge.config.ts        # Electron Forge configuration
├── src/                   # React application source
│   ├── App.tsx           # Main React component with Electron integration
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React context providers
│   ├── sections/         # Application sections
│   └── pages/           # Page components
├── assets/               # Application icons and resources
├── vite.*.config.ts     # Vite configuration files
└── out/                 # Built application packages
```

## Development

### Prerequisites
- Node.js 18+ 
- npm 8+

### Setup
```bash
npm install
```

### Development Mode
```bash
npm run dev
```

### Building
```bash
# Package for current platform
npm run package

# Build distributables for current platform
npm run make

# Build for specific platforms
npm run dist:win    # Windows
npm run dist:mac    # macOS
npm run dist:linux  # Linux
```

## Build Outputs

The application builds to the following formats:

### Linux
- **AppImage**: Portable application format
- **DEB**: Debian/Ubuntu package
- **RPM**: Red Hat/Fedora package

### Windows
- **NSIS Installer**: Windows installer with options
- **Portable**: Standalone executable

### macOS
- **DMG**: macOS disk image
- **ZIP**: Compressed application bundle

## Desktop Features

### Native Menus
- Application menu with About dialog
- Edit menu with standard shortcuts
- View menu with zoom and developer tools
- Window management
- Help menu with external links

### Window Management
- Minimum window size: 800x600
- Default size: 1400x900
- Proper window state management
- Platform-specific title bar handling

### Security
- Context isolation enabled
- Node integration disabled
- Secure preload script for IPC
- External link handling

## AI Integration

The desktop application maintains full compatibility with all AI ecosystem features:

1. **Cultural Intelligence**: Real-time adaptation across global markets
2. **Business Operations**: Revenue optimization and economic modeling
3. **Artist Development**: Talent discovery and personalized growth paths
4. **Customer Experience**: 24/7 multilingual support system

## Dr33MTV Streaming

Desktop-optimized streaming experience with:
- Native video player integration
- Offline content support
- Desktop notifications for new content
- System media controls integration

## Cross-Platform Compatibility

### Windows
- Windows 10/11 support
- Both x64 and x86 architectures
- Windows Store compatibility ready

### macOS
- macOS 10.15+ support
- Universal binaries (Intel + Apple Silicon)
- App Store distribution ready
- Proper code signing support

### Linux
- Ubuntu 18.04+ support
- Fedora, CentOS, openSUSE compatibility
- AppImage for universal Linux support

## Installation

### From Releases
1. Download the appropriate package for your platform from the releases page
2. Install using your platform's standard method:
   - **Windows**: Run the .exe installer
   - **macOS**: Open the .dmg and drag to Applications
   - **Linux**: Install the .deb/.rpm or run the .AppImage

### From Source
```bash
git clone <repository>
cd 1DreamUnited_Desktop
npm install
npm run make
```

## Configuration

The application supports various configuration options:

- **Deep Linking**: `1dreamunited://` protocol support
- **Auto-updater**: Built-in update mechanism
- **Crash Reporting**: Automatic error reporting
- **Analytics**: Usage analytics (opt-in)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across platforms
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For technical support and bug reports:
- GitHub Issues: [Repository Issues]
- Email: support@1dreamunited.com
- Website: https://1dreamunited.com

## Roadmap

- [ ] Auto-updater implementation
- [ ] System tray integration
- [ ] Offline mode support
- [ ] Enhanced keyboard shortcuts
- [ ] Plugin system for extensions
- [ ] Advanced streaming features
- [ ] AI model local caching
