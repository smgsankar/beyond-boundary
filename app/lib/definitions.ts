export type User = {
  id: string;
  name: string;
  email: string;
  teamName: string;
  points: number;
  rank: number;
  avatar: string;
};

export type Player = {
  id: string;
  name: string;
  role: 'BAT' | 'BOWL' | 'ALL' | 'WK';
  team: string; // Country code like 'IND', 'AUS'
  points: number;
  credits: number;
  imageUrl: string;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
  selectedBy?: string;
};

export type Match = {
  id: string;
  team1: string;
  team1Short: string;
  team1Flag: string;
  team1Score?: string;
  team1Overs?: string;
  team2: string;
  team2Short: string;
  team2Flag: string;
  team2Score?: string;
  team2Overs?: string;
  status: 'LIVE' | 'UPCOMING' | 'COMPLETED';
  date: string;
  time?: string;
  venue: string;
  group?: string;
  result?: string;
  featuredPlayer?: string; // e.g., "Kohli 56* (34)"
};

export type LeaderboardEntry = {
  rank: number;
  user: {
    name: string;
    teamName: string;
    avatar: string;
    country?: string;
  };
  points: number;
  movement: number; // Positive for up, negative for down, 0 for same
};
