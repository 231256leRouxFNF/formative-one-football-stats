# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Football Stats is a modern React web application that displays football statistics with interactive charts and visualizations. The application uses comprehensive mock data to provide a fast, reliable user experience showcasing recent matches, player comparisons, and injury timelines with beautiful modern UI design.

## Development Commands

### Setup and Installation
```bash
# Navigate to main app directory
cd football-stats

# Install React app dependencies
npm install
```

### Running the Application
```bash
# Start development server (from football-stats directory)
npm start
# Opens http://localhost:3000

# Build for production
npm run build

# Run tests
npm test

# Run specific test file
npm test App.test.js

# Eject configuration (irreversible)
npm run eject
```

## Architecture Overview

### Application Structure
- **Standard Create React App** setup with React Router for navigation
- **Three main pages**: HomePage (recent matches), ComparisonPage (player stats), InjuryTimeline (injury trends)
- **Component-based architecture** with reusable UI components
- **Custom hooks** for data fetching and state management
- **Mock data service layer** providing instant, reliable data
- **Modern CSS with CSS variables** for consistent theming and design

### Key Directories
- `src/components/` - Reusable UI components (cards, navigation, charts)
- `src/pages/` - Main page components corresponding to routes
- `src/services/` - Mock data service layer (replaces API integration)
- `src/hooks/` - Custom React hooks for data fetching
- `src/Styles/` - Modern CSS with CSS variables and responsive design
- `src/data/` - Comprehensive mock data including matches, players, stats, and injuries

### Data Flow Architecture
1. **Mock Data Service** (`src/services/api.js`) provides simulated API responses using static data
2. **Comprehensive Mock Data** (`src/data/dummyData.js`) includes realistic football statistics and player information
3. **Async Simulation** with artificial delays to mimic real API behavior
4. **Custom Hooks** (`src/hooks/`) manage component-level state and data loading
5. **Error Handling** with loading states and graceful fallbacks

### Mock Data Architecture
- **Static Data Sources** replace external API dependencies
- **Realistic Data Sets** including Premier League teams, players, and statistics
- **Simulated Async Behavior** with loading delays for realistic UX
- **No External Dependencies** - works offline and loads instantly
- **Comprehensive Coverage** - matches, players, team stats, injury data, and standings

## Key Components

### Chart Integration
- Uses **Chart.js** with `react-chartjs-2` for data visualization
- **Recharts** for additional chart types
- **React Vertical Timeline Component** for injury timeline visualization
- All charts use mock data for fast, consistent rendering

### UI Framework & Design System
- **React Bootstrap** for responsive layout and components
- **Material-UI** (@mui/material) for advanced UI components
- **Modern CSS Variables** for consistent theming throughout the application
- **Inter Font Family** for professional typography
- **CSS Grid & Flexbox** for responsive layouts
- **Smooth Animations** with CSS transitions and transforms

### Color Palette & Design
- **Primary Green**: `#00C896` and `#00A67D` for main branding
- **Secondary Blue**: `#2D3748` and `#4A5568` for text and backgrounds
- **Accent Orange**: `#FF6B35` for highlights and call-to-actions
- **Neutral Grays**: Full spectrum from `#F7FAFC` to `#1A202C`
- **Modern Shadows**: Multiple shadow levels for depth and hierarchy

### Navigation
- **React Router DOM** for client-side routing
- Three main routes: `/` (home), `/compare` (player comparison), `/timeline` (injury trends)
- **Responsive Navigation** that adapts to different screen sizes

## Development Notes

### Mock Data System
The application uses a comprehensive mock data system instead of external APIs:
- **Instant Loading** - no network dependencies or rate limits
- **Realistic Data** - authentic Premier League teams, players, and statistics
- **Simulated Delays** - artificial loading states for realistic UX testing
- **Offline Capability** - works without internet connection

### Modern CSS Architecture
- **CSS Variables** for consistent theming and easy customization
- **Mobile-First Design** with responsive breakpoints
- **Component-Scoped Styles** alongside global design system
- **Smooth Animations** for enhanced user experience

### Performance Optimizations
- **Static Data Loading** eliminates network latency
- **CSS-based Animations** for smooth interactions
- **Responsive Images** and optimized assets
- **Modern CSS Features** like Grid and Flexbox for efficient layouts

### Working with Mock Data
- **Mock Data Location**: `src/data/dummyData.js`
- **Data Types**: Matches, players, team statistics, injury data, league standings
- **Easy Customization**: Add or modify data in the mock data file
- **Consistent Structure**: Data mirrors real API response formats for easy component integration
