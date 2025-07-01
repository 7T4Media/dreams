
# Dr33MTV Roku Channel

A revolutionary streaming service application for Roku, part of the 1DreamUnited AI-driven global music ecosystem.

## Overview

Dr33MTV brings the power of AI-curated global music content to Roku streaming devices. This channel leverages the 1DreamUnited platform's four specialized AI agents to deliver personalized, culturally-aware music experiences.

## Features

### Core Functionality
- **Content Grid Navigation**: Browse curated music content in an intuitive grid layout
- **Video Playback**: High-quality streaming with standard Roku video controls
- **AI-Powered Recommendations**: Real-time content suggestions based on viewing behavior
- **Cultural Intelligence**: Content adapted for global audiences across 190+ countries

### AI Integration
The channel integrates with 1DreamUnited's AI ecosystem:

1. **Cultural Intelligence Agent**: Adapts content for cultural preferences
2. **Customer Experience Agent**: Provides personalized user experiences  
3. **Artist Development Agent**: Surfaces emerging talent and new discoveries
4. **Business Operations Agent**: Optimizes content delivery and engagement

## Technical Architecture

### Roku SceneGraph Framework
- Built using Roku's modern SceneGraph XML and BrightScript
- Optimized for HD/FHD resolution with automatic scaling
- Component-based architecture for maintainability

### Key Components
- `HomeScene`: Main application scene with content grid
- `ContentGrid`: Custom grid component for content browsing
- `VideoPlayer`: Enhanced video player with AI recommendation hooks
- `ContentTask`: Background task for content loading
- `RecommendationTask`: AI-powered recommendation engine integration

## Project Structure

```
Dr33MTV_Roku/
├── manifest                    # Channel configuration
├── source/
│   ├── main.brs               # Application entry point
│   └── ContentApi.brs         # API integration functions
├── components/
│   ├── HomeScene.xml/.brs     # Main scene
│   ├── ContentGrid.xml/.brs   # Content grid component
│   ├── VideoPlayer.xml/.brs   # Enhanced video player
│   ├── ContentTask.xml/.brs   # Content loading task
│   ├── RecommendationTask.xml/.brs # AI recommendation task
│   └── GridItem.xml/.brs      # Individual grid item
├── images/                    # Channel assets
└── locale/                    # Localization files
```

## Development Setup

### Prerequisites
- Roku device with developer mode enabled
- Roku development environment set up
- Network access to 1DreamUnited platform APIs

### Building and Deployment

1. **Package the Channel**:
   ```bash
   cd Dr33MTV_Roku
   zip -r Dr33MTV_Channel.zip . -x "*.git*" "README.md"
   ```

2. **Sideload to Roku Device**:
   - Enable developer mode on your Roku device
   - Access the developer web interface (http://roku-ip:8080)
   - Upload the ZIP file through the installer

3. **Testing**:
   - Launch the channel from the Roku home screen
   - Test content browsing and video playback
   - Verify AI recommendation functionality

### Configuration

Update the following files for production deployment:

1. **API Endpoints** (`source/ContentApi.brs`):
   - Replace sample endpoints with actual 1DreamUnited API URLs
   - Add authentication tokens and headers
   - Configure AI recommendation service integration

2. **Content Sources**:
   - Update video URLs to point to actual content CDN
   - Configure thumbnail and poster image sources
   - Set up content metadata structure

3. **Branding Assets** (`images/`):
   - Add channel icons (HD: 336x210px, SD: 246x140px)
   - Add splash screens (HD: 1280x720px, SD: 720x480px)
   - Include focus indicators and UI elements

## API Integration

### Content API
The channel expects the following API structure from the 1DreamUnited platform:

```json
{
  "status": "success",
  "data": {
    "categories": [
      {
        "id": "category-id",
        "title": "Category Name",
        "description": "Category description",
        "content": [
          {
            "id": "video-id",
            "title": "Video Title",
            "description": "Video description",
            "url": "https://video-url.mp4",
            "thumbnail": "https://i.ytimg.com/vi/XNs5L8RKobE/maxresdefault.jpg",
            "duration": 300,
            "artist": "Artist Name",
            "genre": "Music Genre"
          }
        ]
      }
    ]
  }
}
```

### AI Recommendations API
```json
{
  "status": "success",
  "recommendations": [
    {
      "type": "similar_artist|cultural_match|trending",
      "confidence": 0.95,
      "content": { /* video object */ }
    }
  ]
}
```

## Customization

### Adding New Features
1. Create new SceneGraph components in `components/`
2. Add corresponding BrightScript logic files
3. Update `HomeScene` to integrate new components
4. Test thoroughly on actual Roku hardware

### Styling and Branding
- Modify colors and fonts in XML component files
- Update layout dimensions for different screen sizes
- Customize focus animations and transitions

## Performance Optimization

- Content loading is handled asynchronously via Task nodes
- Images are cached automatically by Roku framework
- Video streaming uses Roku's optimized video pipeline
- AI recommendations are fetched in background

## Troubleshooting

### Common Issues
1. **Content not loading**: Check API endpoints and network connectivity
2. **Video playback issues**: Verify video URLs and formats (MP4 recommended)
3. **Focus navigation problems**: Review SceneGraph node hierarchy
4. **Performance issues**: Monitor memory usage and optimize image sizes

### Debug Console
Access debug output via telnet to Roku device on port 8085:
```bash
telnet roku-ip 8085
```

## Future Enhancements

- Voice search integration
- Multi-language support expansion
- Enhanced AI recommendation algorithms
- Social features and user profiles
- Live streaming capabilities
- Offline content caching

## Support

For technical support and API documentation, contact the 1DreamUnited development team.

## License

This channel is part of the 1DreamUnited platform ecosystem. All rights reserved.
