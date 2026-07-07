import {
  BadgeCheck,
  BarChart3,
  Brain,
  BrainCircuit,
  Dumbbell,
  Flame,
  Gem,
  HeartHandshake,
  MessageCircle,
  Scissors,
  Shirt,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users
} from "lucide-react";

export const user = {
  name: "LalitRaj",
  username: "@lalitraj.evolve",
  bio: "Starting a fresh EVOLVE AI transformation journey.",
  email: "lalitraj@example.com",
  phone: "Add phone number",
  address: "Private address, visible only to account owner",
  gender: "Men",
  dateOfBirth: "Add date of birth",
  joinDate: "07 Jul 2026",
  memberId: "EVL-NEW-0001",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  plan: "Free",
  score: 0,
  weeklyScore: 0,
  totalPoints: 0,
  streak: 0,
  completed: 0,
  pending: 0,
  level: "Bronze",
  rank: "#0",
  followers: 0,
  following: 0,
  postsCount: 0,
  likesReceived: 0,
  savedPosts: 0,
  suggestion: "Complete your first daily mission to start building your improvement score."
};

export const modules = [
  { title: "Confidence Coach", icon: BrainCircuit, progress: 72, description: "Daily confidence drills, fear removal, and AI feedback." },
  { title: "Body Improvement", icon: Dumbbell, progress: 64, description: "Workout plans, posture correction, and progress photo reviews." },
  { title: "Clothing Style AI", icon: Shirt, progress: 58, description: "Outfit ideas, color matching, and photo-based style ratings." },
  { title: "Hairstyle AI", icon: Scissors, progress: 44, description: "Face-shape suggestions, beard styling, and hair care routines." },
  { title: "Grooming Coach", icon: Sparkles, progress: 80, description: "Skin care, hygiene checklists, perfume tips, and reminders." },
  { title: "Communication Coach", icon: MessageCircle, progress: 69, description: "Chat practice, interview roleplay, and voice confidence tips." },
  { title: "Discipline & Habits", icon: Target, progress: 76, description: "Habit tracker, focus routines, streaks, and reward badges." },
  { title: "EVOLVE Social Media", icon: Users, progress: 52, description: "Post your journey, follow creators, and join challenge feeds." },
  { title: "Progress Report", icon: TrendingUp, progress: 61, description: "Scores, badges, photos, levels, and challenge history." },
  { title: "AI Personal Coach", icon: BrainCircuit, progress: 88, description: "Ask for plans, outfit ideas, challenges, and personal advice." }
];

export const challenges = [
  { title: "Talk to one new person today", category: "Confidence", difficulty: "Medium", points: 10, description: "Start one short conversation and note what went well.", icon: Brain },
  { title: "20-minute posture workout", category: "Fitness", difficulty: "Easy", points: 10, description: "Complete mobility, rows, planks, and neck alignment drills.", icon: Dumbbell },
  { title: "Build a 3-color outfit", category: "Style", difficulty: "Easy", points: 10, description: "Use one base color, one accent, and clean shoes.", icon: Shirt },
  { title: "No distraction focus block", category: "Discipline", difficulty: "Hard", points: 10, description: "Work or study for 90 minutes without social media.", icon: Target },
  { title: "Record interview answer", category: "Communication", difficulty: "Medium", points: 10, description: "Answer 'Tell me about yourself' and request AI feedback.", icon: MessageCircle },
  { title: "Night grooming reset", category: "Grooming", difficulty: "Easy", points: 10, description: "Cleanse, moisturize, prep clothes, and set a reminder.", icon: Sparkles }
];

export const posts = [
  {
    id: "post-1",
    user: "Meera",
    handle: "@meera.moves",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80",
    time: "12m",
    caption: "Day 18: switched to a cleaner college outfit and did my confidence challenge before class. #Style #Confidence",
    media: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    mediaType: "photo",
    likes: 428,
    comments: 38,
    shares: 42,
    saves: 86,
    category: "Style",
    tags: ["Style", "Confidence", "Women"],
    followed: true,
    challengeProof: true,
    completionRate: 0.82,
    savedByViewer: true,
    creatorPoints: 9120,
    quality: 92,
    reports: 0,
    createdHoursAgo: 0.2,
    repeatedCaption: false,
    postingBurst: false
  },
  {
    id: "post-2",
    user: "Kabir",
    handle: "@kabir.levelup",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=180&q=80",
    time: "1h",
    caption: "Posture work is finally showing. Tiny daily reps, big difference. #Fitness #Transformation",
    media: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    mediaType: "photo",
    likes: 312,
    comments: 21,
    shares: 29,
    saves: 54,
    category: "Fitness",
    tags: ["Fitness", "Men", "Transformation"],
    followed: false,
    challengeProof: true,
    completionRate: 0.76,
    savedByViewer: false,
    creatorPoints: 7600,
    quality: 88,
    reports: 0,
    createdHoursAgo: 1,
    repeatedCaption: false,
    postingBurst: false
  },
  {
    id: "post-3",
    user: "Anaya",
    handle: "@anaya.style",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=180&q=80",
    time: "3h",
    caption: "75 Hard Days proof: clean grooming, better posture, and one brave conversation. #75Hard #Grooming",
    media: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=80",
    mediaType: "photo",
    likes: 684,
    comments: 74,
    shares: 91,
    saves: 142,
    category: "Grooming",
    tags: ["Grooming", "Women", "75Hard"],
    followed: true,
    challengeProof: true,
    completionRate: 0.94,
    savedByViewer: true,
    creatorPoints: 11850,
    quality: 96,
    reports: 1,
    createdHoursAgo: 3,
    repeatedCaption: false,
    postingBurst: false
  }
];

export const stories = [
  { user: "LalitRaj", avatar: user.avatar },
  { user: "Meera", avatar: posts[0].avatar },
  { user: "Kabir", avatar: posts[1].avatar },
  { user: "Anaya", avatar: posts[2].avatar }
];

export const heartChallenge = {
  name: "75 Hard Days Challenge",
  completedDays: 0,
  totalDays: 75,
  totalPoints: 0,
  streak: 0,
  days: Array.from({ length: 75 }, (_, index) => ({
    day: index + 1,
    completed: false,
    proofUploaded: false,
    points: 0
  }))
};

export const leaderboard = [
  { rank: 1, name: "Anaya", handle: "@anaya.style", points: 11850, streak: 41, avatar: posts[2].avatar },
  { rank: 2, name: "Meera", handle: "@meera.moves", points: 9120, streak: 33, avatar: posts[0].avatar },
  { rank: 3, name: "LalitRaj", handle: "@lalitraj.evolve", points: user.totalPoints, streak: user.streak, avatar: user.avatar },
  { rank: 4, name: "Kabir", handle: "@kabir.levelup", points: 7600, streak: 19, avatar: posts[1].avatar }
];

export const plans = [
  { name: "Free", price: "Rs 0", icon: HeartHandshake, features: ["Limited daily challenges", "Basic AI tips", "Limited social access"] },
  { name: "Pro", price: "Rs 99/mo", icon: Gem, features: ["Full AI coach", "Daily personalized plan", "Progress tracking", "Style and grooming AI"] },
  { name: "Premium", price: "Rs 299/mo", icon: Trophy, features: ["Advanced AI coach", "Full social features", "Photo recommendations", "Premium challenges", "Deep analytics"] }
];

export const stats = [
  { label: "Total users", value: "24,891" },
  { label: "Active users", value: "8,420" },
  { label: "Paid users", value: "3,104" },
  { label: "Total revenue", value: "Rs 8.7L" },
  { label: "Total posts", value: "61,230" },
  { label: "Completed challenges", value: "1.2M" }
];

export const badges = [
  { label: "First mission ready", icon: Flame },
  { label: "Style sprint", icon: Shirt },
  { label: "Social starter", icon: BadgeCheck },
  { label: "75 Hard starter", icon: HeartHandshake }
];

export const pointRules = [
  { label: "Complete challenge", value: "+10" },
  { label: "Upload proof", value: "+20" },
  { label: "Like received", value: "+1" },
  { label: "Comment received", value: "+2" },
  { label: "75 Hard completion", value: "+1000" }
];
