import { spamPenalty } from "./spamDetection";

export type FeedPost = {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  createdHoursAgo: number;
  tags: string[];
  category: string;
  followed: boolean;
  challengeProof: boolean;
  completionRate: number;
  savedByViewer: boolean;
  quality: number;
  reports?: number;
  caption?: string;
  postingBurst?: boolean;
  repeatedCaption?: boolean;
};

export type ViewerProfile = {
  interests: string[];
  commentedCategories: string[];
  savedCategories: string[];
  streak: number;
  completedChallenges: number;
};

export const defaultViewer: ViewerProfile = {
  interests: ["Fitness", "Style", "Grooming", "Confidence", "Men", "Women"],
  commentedCategories: ["Confidence", "Fitness"],
  savedCategories: ["Style", "Grooming"],
  streak: 14,
  completedChallenges: 28
};

export function getFeedScore(post: FeedPost, viewer: ViewerProfile = defaultViewer) {
  const recencyScore = Math.max(0, 100 - post.createdHoursAgo * 7);
  const engagementScore = Math.min(100, post.likes * 0.08 + post.comments * 0.55 + post.shares * 0.7 + post.saves * 0.4);
  const interestHits = post.tags.filter((tag) => viewer.interests.includes(tag) || viewer.savedCategories.includes(tag) || viewer.commentedCategories.includes(tag)).length;
  const interestMatchScore = Math.min(100, interestHits * 28 + (viewer.interests.includes(post.category) ? 20 : 0));
  const followingScore = post.followed ? 100 : 35;
  const challengeScore = (post.challengeProof ? 70 : 20) + Math.min(30, viewer.streak + viewer.completedChallenges * 0.4);
  const contentQualityScore = Math.min(100, post.quality + post.completionRate * 10 + (post.savedByViewer ? 8 : 0));

  const feedScore =
    recencyScore * 0.25 +
    engagementScore * 0.25 +
    interestMatchScore * 0.2 +
    followingScore * 0.15 +
    challengeScore * 0.1 +
    contentQualityScore * 0.05 -
    spamPenalty(post);

  return Number(feedScore.toFixed(2));
}

export function rankFeed<T extends FeedPost>(posts: T[], viewer: ViewerProfile = defaultViewer) {
  return [...posts].sort((a, b) => getFeedScore(b, viewer) - getFeedScore(a, viewer));
}
