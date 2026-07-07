create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  username text unique,
  avatar_url text,
  email text,
  phone text,
  address text,
  gender text,
  date_of_birth date,
  age_verified_at timestamptz,
  age_gate_version text,
  member_id text unique,
  vip_level text default 'Bronze',
  xp integer default 0,
  coins integer default 0,
  total_points integer default 0,
  creator_rank text,
  referral_code text unique,
  assessment_results jsonb default '{}'::jsonb,
  roadmap_progress jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  caption text,
  media_url text,
  media_type text check (media_type in ('photo','spark_clip','sponsored')),
  category text,
  tags text[] default '{}',
  likes_count integer default 0,
  comments_count integer default 0,
  shares_count integer default 0,
  saves_count integer default 0,
  is_sponsored boolean default false,
  brand_name text,
  brand_logo_url text,
  cta_url text,
  created_at timestamptz default now()
);

create table if not exists public.reels (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  caption text,
  video_url text,
  duration_seconds integer check (duration_seconds <= 10),
  category text,
  likes_count integer default 0,
  comments_count integer default 0,
  shares_count integer default 0,
  saves_count integer default 0,
  completion_rate numeric default 0,
  created_at timestamptz default now()
);

create table if not exists public.comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references public.posts(id) on delete cascade,
  reel_id uuid references public.reels(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz default now()
);

create table if not exists public.likes (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references public.posts(id) on delete cascade,
  reel_id uuid references public.reels(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  reaction text default 'support',
  created_at timestamptz default now(),
  unique(post_id, reel_id, user_id)
);

create table if not exists public.follows (
  id uuid primary key default uuid_generate_v4(),
  follower_id uuid references public.profiles(id) on delete cascade,
  following_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz default now(),
  unique(follower_id, following_id)
);

create table if not exists public.challenges (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  category text,
  difficulty text,
  xp_reward integer default 10,
  coin_reward integer default 0,
  created_at timestamptz default now()
);

create table if not exists public.user_challenges (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  challenge_id uuid references public.challenges(id) on delete cascade,
  status text default 'pending',
  proof_url text,
  ai_feedback text,
  completed_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.heart_challenge_days (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  day_number integer check (day_number between 1 and 75),
  completed boolean default false,
  proof_reel_url text,
  points integer default 0,
  completed_at timestamptz,
  unique(user_id, day_number)
);

create table if not exists public.daily_checkins (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  mood integer,
  stress integer,
  energy integer,
  sleep_hours numeric,
  confidence integer,
  daily_score integer,
  created_at timestamptz default now()
);

create table if not exists public.payments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  plan text,
  amount integer,
  payment_id text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.reports (
  id uuid primary key default uuid_generate_v4(),
  reporter_id uuid references public.profiles(id) on delete cascade,
  post_id uuid references public.posts(id) on delete cascade,
  reel_id uuid references public.reels(id) on delete cascade,
  reason text,
  status text default 'open',
  created_at timestamptz default now()
);

create table if not exists public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text,
  body text,
  read boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.collaboration_requests (
  id uuid primary key default uuid_generate_v4(),
  company_name text,
  contact_person text,
  email text,
  phone text,
  website text,
  collaboration_type text,
  budget_range text,
  message text,
  logo_url text,
  status text default 'pending',
  notes text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.reels enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.follows enable row level security;
alter table public.challenges enable row level security;
alter table public.user_challenges enable row level security;
alter table public.heart_challenge_days enable row level security;
alter table public.daily_checkins enable row level security;
alter table public.payments enable row level security;
alter table public.reports enable row level security;
alter table public.notifications enable row level security;
alter table public.collaboration_requests enable row level security;

create policy "profiles own read" on public.profiles for select using (auth.uid() = id);
create policy "profiles own update" on public.profiles for update using (auth.uid() = id);
create policy "profiles own insert" on public.profiles for insert with check (auth.uid() = id);

create policy "public posts read" on public.posts for select using (true);
create policy "posts owner write" on public.posts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "public reels read" on public.reels for select using (true);
create policy "reels owner write" on public.reels for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "comments read" on public.comments for select using (true);
create policy "comments owner write" on public.comments for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "likes read" on public.likes for select using (true);
create policy "likes owner write" on public.likes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "follows owner read" on public.follows for select using (auth.uid() = follower_id or auth.uid() = following_id);
create policy "follows owner write" on public.follows for all using (auth.uid() = follower_id) with check (auth.uid() = follower_id);

create policy "challenges read" on public.challenges for select using (true);
create policy "user challenge owner" on public.user_challenges for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "heart days owner" on public.heart_challenge_days for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "checkins owner" on public.daily_checkins for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "payments owner read" on public.payments for select using (auth.uid() = user_id);
create policy "reports owner insert" on public.reports for insert with check (auth.uid() = reporter_id);
create policy "notifications owner" on public.notifications for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "collaboration public insert" on public.collaboration_requests for insert with check (true);

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true), ('post-media', 'post-media', true), ('reels', 'reels', true), ('challenge-proofs', 'challenge-proofs', true)
on conflict (id) do nothing;
