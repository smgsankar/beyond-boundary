import { CURRENT_USER, LEADERBOARD, MATCHES, MY_TEAM, PLAYERS } from './data';
import { LeaderboardEntry, Match, Player, User } from './definitions';

const DELAY = 800;

export async function getCurrentUser(): Promise<User> {
  return new Promise((resolve) => setTimeout(() => resolve(CURRENT_USER), DELAY));
}

export async function getMatches(): Promise<Match[]> {
  return new Promise((resolve) => setTimeout(() => resolve(MATCHES), DELAY));
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  return new Promise((resolve) => setTimeout(() => resolve(LEADERBOARD), DELAY));
}

export async function getMyTeam(): Promise<Player[]> {
  return new Promise((resolve) => setTimeout(() => resolve(MY_TEAM), DELAY));
}

export async function getAllPlayers(): Promise<Player[]> {
  return new Promise((resolve) => setTimeout(() => resolve(PLAYERS), DELAY));
}
