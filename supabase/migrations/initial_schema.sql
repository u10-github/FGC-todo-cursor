-- ユーザープロフィール
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  description text,
  x_account text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ユーザーの格闘ゲーム
create table user_games (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  game_title text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- タスクリスト
create table task_lists (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  description text,
  is_public boolean default false,
  likes_count integer default 0,
  deleted_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- タスク
create table tasks (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  task_list_id uuid references task_lists(id) on delete set null,
  title text not null,
  description text,
  completion_count integer default 0,
  is_completed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- タグ
create table tags (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  type text not null, -- 'game_title' or 'player_level' or 'custom'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- タスクリストのタグ
create table task_list_tags (
  task_list_id uuid references task_lists(id) on delete cascade not null,
  tag_id uuid references tags(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (task_list_id, tag_id)
);

-- いいね
create table likes (
  user_id uuid references profiles(id) on delete cascade not null,
  task_list_id uuid references task_lists(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, task_list_id)
);

-- 通知
create table notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  type text not null, -- 'like'
  data jsonb not null,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
); 