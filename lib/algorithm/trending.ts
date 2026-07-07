import { getFeedScore, type FeedPost } from "./feedRanking";

export function rankExplore<T extends FeedPost>(posts: T[]) {
  return [...posts].sort((a, b) => {
    const trendA = getFeedScore(a) + a.shares * 0.2 + (a.challengeProof ? 12 : 0) + (a.followed ? 0 : 8);
    const trendB = getFeedScore(b) + b.shares * 0.2 + (b.challengeProof ? 12 : 0) + (b.followed ? 0 : 8);
    return trendB - trendA;
  });
}

export function trendingHashtags(posts: FeedPost[]) {
  const counts = new Map<string, number>();
  posts.forEach((post) => post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1 + post.comments * 0.02)));
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).map(([tag]) => `#${tag}`);
}
