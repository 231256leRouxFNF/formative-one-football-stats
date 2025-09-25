// Mock data for Football Stats application

// Recent matches data
export const mockMatches = [
  {
    team1: "Manchester City",
    team2: "Arsenal",
    score1: 3,
    score2: 1,
    date: "2024-03-20",
    team1Logo: "/logos/manchester-city.png",
    team2Logo: "/logos/arsenal.png",
    status: "FT"
  },
  {
    team1: "Liverpool",
    team2: "Chelsea",
    score1: 2,
    score2: 2,
    date: "2024-03-19",
    team1Logo: "/logos/liverpool.png",
    team2Logo: "/logos/chelsea.png",
    status: "FT"
  },
  {
    team1: "Manchester United",
    team2: "Tottenham",
    score1: 1,
    score2: 0,
    date: "2024-03-18",
    team1Logo: "/logos/manchester-united.png",
    team2Logo: "/logos/tottenham.png",
    status: "FT"
  },
  {
    team1: "Newcastle",
    team2: "Brighton",
    score1: 4,
    score2: 1,
    date: "2024-03-17",
    team1Logo: "/logos/newcastle.png",
    team2Logo: "/logos/brighton.png",
    status: "FT"
  },
  {
    team1: "Aston Villa",
    team2: "West Ham",
    score1: 2,
    score2: 1,
    date: "2024-03-16",
    team1Logo: "/logos/aston-villa.png",
    team2Logo: "/logos/west-ham.png",
    status: "FT"
  }
];

// Top scorer data
export const mockTopScorer = {
  player: "Erling Haaland",
  team: "Manchester City",
  goals: 28,
  photo: "/players/haaland.jpg"
};

// Team standings data
export const mockStandings = [
  { name: "Manchester City", points: 78, goals: 89 },
  { name: "Arsenal", points: 74, goals: 82 },
  { name: "Liverpool", points: 71, goals: 76 },
  { name: "Newcastle", points: 65, goals: 68 },
  { name: "Manchester United", points: 62, goals: 55 },
  { name: "Tottenham", points: 60, goals: 64 },
  { name: "Brighton", points: 58, goals: 61 },
  { name: "Aston Villa", points: 56, goals: 59 },
  { name: "West Ham", points: 52, goals: 45 },
  { name: "Chelsea", points: 48, goals: 51 }
];

// Player data for comparisons
export const mockPlayers = [
  {
    id: 1,
    name: "Erling Haaland",
    team: "Manchester City",
    position: "Forward",
    photo: "/players/haaland.jpg",
    stats: {
      goals: 28,
      assists: 6,
      appearances: 32,
      minutesPlayed: 2640,
      shotsPerGame: 4.2,
      passAccuracy: 78,
      tackles: 0.8,
      interceptions: 0.3,
      rating: 8.4
    },
    attributes: {
      attack: 95,
      defense: 25,
      stamina: 88,
      speed: 92,
      skill: 85
    }
  },
  {
    id: 2,
    name: "Mohamed Salah",
    team: "Liverpool",
    position: "Forward",
    photo: "/players/salah.jpg",
    stats: {
      goals: 24,
      assists: 12,
      appearances: 35,
      minutesPlayed: 3080,
      shotsPerGame: 3.8,
      passAccuracy: 82,
      tackles: 1.2,
      interceptions: 0.7,
      rating: 8.2
    },
    attributes: {
      attack: 92,
      defense: 35,
      stamina: 90,
      speed: 94,
      skill: 90
    }
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    team: "Manchester City",
    position: "Midfielder",
    photo: "/players/debruyne.jpg",
    stats: {
      goals: 8,
      assists: 18,
      appearances: 28,
      minutesPlayed: 2380,
      shotsPerGame: 2.1,
      passAccuracy: 88,
      tackles: 2.1,
      interceptions: 1.4,
      rating: 8.6
    },
    attributes: {
      attack: 88,
      defense: 65,
      stamina: 85,
      speed: 75,
      skill: 96
    }
  },
  {
    id: 4,
    name: "Virgil van Dijk",
    team: "Liverpool",
    position: "Defender",
    photo: "/players/vandijk.jpg",
    stats: {
      goals: 3,
      assists: 2,
      appearances: 34,
      minutesPlayed: 3060,
      shotsPerGame: 0.8,
      passAccuracy: 91,
      tackles: 1.8,
      interceptions: 1.2,
      rating: 8.1
    },
    attributes: {
      attack: 45,
      defense: 96,
      stamina: 88,
      speed: 78,
      skill: 85
    }
  },
  {
    id: 5,
    name: "Bruno Fernandes",
    team: "Manchester United",
    position: "Midfielder",
    photo: "/players/fernandes.jpg",
    stats: {
      goals: 12,
      assists: 8,
      appearances: 33,
      minutesPlayed: 2970,
      shotsPerGame: 3.2,
      passAccuracy: 84,
      tackles: 2.3,
      interceptions: 1.1,
      rating: 7.8
    },
    attributes: {
      attack: 82,
      defense: 55,
      stamina: 87,
      speed: 74,
      skill: 89
    }
  },
  {
    id: 6,
    name: "Harry Kane",
    team: "Bayern Munich",
    position: "Forward",
    photo: "/players/kane.jpg",
    stats: {
      goals: 31,
      assists: 9,
      appearances: 30,
      minutesPlayed: 2640,
      shotsPerGame: 4.8,
      passAccuracy: 79,
      tackles: 0.9,
      interceptions: 0.4,
      rating: 8.7
    },
    attributes: {
      attack: 94,
      defense: 30,
      stamina: 86,
      speed: 78,
      skill: 91
    }
  }
];

// Injury timeline data
export const mockInjuryData = [
  { date: "2024-01-01", count: 12 },
  { date: "2024-01-15", count: 15 },
  { date: "2024-02-01", count: 18 },
  { date: "2024-02-15", count: 22 },
  { date: "2024-03-01", count: 19 },
  { date: "2024-03-15", count: 16 },
  { date: "2024-03-30", count: 14 },
  { date: "2024-04-15", count: 11 },
  { date: "2024-05-01", count: 8 },
  { date: "2024-05-15", count: 6 },
  { date: "2024-05-30", count: 9 }
];

// Team statistics for goals per league visualization
export const mockGoalsPerLeague = [
  { name: "Manchester City", goals: 89 },
  { name: "Arsenal", goals: 82 },
  { name: "Liverpool", goals: 76 },
  { name: "Newcastle", goals: 68 },
  { name: "Tottenham", goals: 64 },
  { name: "Brighton", goals: 61 },
  { name: "Aston Villa", goals: 59 },
  { name: "Manchester United", goals: 55 },
  { name: "Chelsea", goals: 51 },
  { name: "West Ham", goals: 45 }
];

// Team statistics data
export const mockTeamStats = {
  "Manchester City": {
    attack: 95,
    defense: 88,
    stamina: 92,
    speed: 87,
    skill: 94
  },
  "Arsenal": {
    attack: 89,
    defense: 82,
    stamina: 88,
    speed: 85,
    skill: 87
  },
  "Liverpool": {
    attack: 87,
    defense: 85,
    stamina: 91,
    speed: 89,
    skill: 88
  }
};

// Function to simulate async data loading
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const getMockData = async (dataType, options = {}) => {
  // Simulate API delay
  await delay(500 + Math.random() * 1000);
  
  switch (dataType) {
    case 'matches':
      return mockMatches.slice(0, options.limit || 5);
    case 'topScorer':
      return mockTopScorer;
    case 'standings':
      return mockStandings;
    case 'players':
      return mockPlayers;
    case 'injuryData':
      return mockInjuryData;
    case 'goalsPerLeague':
      return mockGoalsPerLeague;
    case 'teamStats':
      return mockTeamStats[options.teamName] || mockTeamStats["Manchester City"];
    default:
      return null;
  }
};