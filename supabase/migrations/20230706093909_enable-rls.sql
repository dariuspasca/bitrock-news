-- Secure the tables
alter table public.profiles
  enable row level security;
alter table public.posts
  enable row level security;
alter table public.comments
  enable row level security;
alter table public.votes
  enable row level security;

create policy "User profiles are viewable by everyone." on public.profiles
  for select using (true);
create policy "Users can update own profile." on public.profiles
  for update using ( auth.uid() = id );
create policy "Posts are viewable by everyone." on public.posts
  for select using (true);
create policy "Authenticated users can add new posts." on public.posts 
  for insert with check ( auth.role() = 'authenticated');
create policy "Posts can be deleted by the creator." on public.posts
  for delete using ( auth.uid() = profile_id );
create policy "Authenticated users can comment posts." on public.comments 
  for insert with check ( auth.role() = 'authenticated');
create policy "Authenticated users can delete their own comments." on public.comments
  for delete using ( auth.uid() = profile_id );
create policy "Comments are viewable by everyone." on public.comments
  for select using (true);
create policy "Authenticated users can vote posts." on public.votes 
  for insert with check ( auth.role() = 'authenticated');
create policy "Users can create or delete their own votes." on public.votes
  for delete using ( auth.uid() = profile_id );
create policy "Votes are viewable by everyone." on public.votes
  for select using (true);