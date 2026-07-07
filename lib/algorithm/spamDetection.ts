export type ModerationSignals = {
  postingBurst?: boolean;
  repeatedCaption?: boolean;
  fakeLikePattern?: boolean;
  lowWatchTime?: boolean;
  reports?: number;
  caption?: string;
};

const blockedWords = ["hate", "scam", "abuse"];

export function spamPenalty(item: ModerationSignals) {
  let penalty = 0;
  if (item.postingBurst) penalty += 18;
  if (item.repeatedCaption) penalty += 14;
  if (item.fakeLikePattern) penalty += 20;
  if (item.lowWatchTime) penalty += 12;
  if ((item.reports ?? 0) > 0) penalty += Math.min(30, (item.reports ?? 0) * 8);
  if (blockedWords.some((word) => item.caption?.toLowerCase().includes(word))) penalty += 40;
  return penalty;
}

export function isReviewRequired(item: ModerationSignals) {
  return spamPenalty(item) >= 25;
}
