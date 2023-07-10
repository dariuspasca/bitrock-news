insert into public.profiles (id, username, bio)
values
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'darius', 'Hello world'),
    ('3e223118-04b2-4faa-8ed9-d3995fc50975', 'boris', 'I love programming'),
    ('dc1b4809-2c14-42a3-a384-ca65718e3421', 'alex', 'Coffee addict'),
    ('8a773ce6-9d46-4a76-b06b-436724cd1ce4', 'sara', 'Nature lover'),
    ('5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'emma', 'Tech enthusiast');

insert into public.posts (id, title, profile_id, url)
values
    (1, 'Blog - Supabase', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'https://supabase.com'),
    (2, 'Postgres Auditing in 150 lines of SQL', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2022/03/08/audit'),
    (3, 'Supabase Beta January 2022', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2022/02/22/supabase-beta-january-2022'),
    (4, 'Supabase Beta December 2021', '3e223118-04b2-4faa-8ed9-d3995fc50975', 'https://supabase.com/blog/2022/01/20/supabase-beta-december-2021'),
    (5, 'Golden Kitty Awards Ceremony Watch Party with Supabase', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2022/01/20/product-hunt-golden-kitty-awards-2021'),
    (6, 'Holiday Hackdays Winners 2021', '8a773ce6-9d46-4a76-b06b-436724cd1ce4', 'https://supabase.com/blog/2021/12/17/holiday-hackdays-winners-2021'),
    (7, 'Supabase Beta November 2021: Launch Week Recap', 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'https://supabase.com/blog/2021/12/15/beta-november-2021-launch-week-recap'),
    (8, 'Kicking off the Holiday Hackdays', '3e223118-04b2-4faa-8ed9-d3995fc50975', 'https://supabase.com/blog/2021/12/03/supabase-holiday-hackdays-hackathon'),
    (9, 'pg_graphql: A GraphQL extension for PostgreSQL', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2021/12/03/pg-graphql'),
    (10, 'Five more things', 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'https://supabase.com/blog/2021/12/03/launch-week-three-friday-five-more-things'),
    (11, 'Supabase acquires Logflare', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2021/12/02/supabase-acquires-logflare'),
    (12, 'Realtime Postgres RLS now available on Supabase', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2021/12/01/realtime-row-level-security-in-postgresql'),
    (13, 'Supabase Studio', '3e223118-04b2-4faa-8ed9-d3995fc50975', 'https://supabase.com/blog/2021/11/30/supabase-studio'),
    (14, 'Community Day', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2021/11/29/community-day'),
    (15, 'New in PostgreSQL 14: What every developer should know', 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'https://supabase.com/blog/2021/11/28/whats-new-in-postgres-14'),
    (16, 'PostgREST 9', '8a773ce6-9d46-4a76-b06b-436724cd1ce4', 'https://supabase.com/blog/2021/11/28/postgrest-9'),
    (17, 'Supabase Launch Week III: Holiday Special', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2021/11/26/supabase-launch-week-the-trilogy'),
    (18, 'How we launch at Supabase', 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'https://supabase.com/blog/2021/11/26/supabase-how-we-launch'),
    (19, 'Supabase Beta October 2021', '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 'https://supabase.com/blog/2021/11/05/supabase-beta-october-2021'),
    (20, 'Supabase $30m Series A', 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'https://supabase.com/blog/2021/10/28/supabase-series-a');

insert into public.comments (id, profile_id, post_id, message)
values
    (1, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 1, 'Wow amazing'),
    (2, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 2, 'Yea ... maybe.'),
    (3, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 3, 'Great post!'),
    (4, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 4, 'Interesting read.'),
    (5, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 5, 'Well-written article.'),
    (6, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 6, 'Congrats to the winners!'),
    (7, '3e223118-04b2-4faa-8ed9-d3995fc50975', 7, 'Looking forward to the launch.'),
    (8, '3e223118-04b2-4faa-8ed9-d3995fc50975', 8, 'Exciting hackathon!'),
    (9, '3e223118-04b2-4faa-8ed9-d3995fc50975', 9, 'GraphQL extension sounds promising.'),
    (10, '3e223118-04b2-4faa-8ed9-d3995fc50975', 10, 'Five more great things!'),
    (11, 'dc1b4809-2c14-42a3-a384-ca65718e3421', 11, 'Acquisition news is big!'),
    (12, 'dc1b4809-2c14-42a3-a384-ca65718e3421', 12, 'Realtime security is a game-changer.'),
    (13, '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 13, 'Awesome blog!'),
    (14, '3e223118-04b2-4faa-8ed9-d3995fc50975', 14, 'Great insights.'),
    (15, 'dc1b4809-2c14-42a3-a384-ca65718e3421', 14, 'Well-explained.'),
    (16, '8a773ce6-9d46-4a76-b06b-436724cd1ce4', 15, 'Impressive content.'),
    (17, '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 16, 'Informative article.'),
    (18, '8a773ce6-9d46-4a76-b06b-436724cd1ce4', 17, 'Really enjoyed it.'),
    (19, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 18, 'Insightful post.'),
    (20, '5fdfeaaa-c9aa-40fe-8d8a-d0f3abbf4ceb', 5, 'Congratulations!'),
    (24, 'dc1b4809-2c14-42a3-a384-ca65718e3421', 6, 'Amazing projects.');

insert into public.votes (post_id, profile_id, direction)
values
    (1, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'UP'),
    (2, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'DOWN'),
    (3, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'UP'),
    (4, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'UP'),
    (5, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'UP'),
    (6, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'UP'),
    (7, '3e223118-04b2-4faa-8ed9-d3995fc50975', 'UP'),
    (8, '3e223118-04b2-4faa-8ed9-d3995fc50975', 'UP'),
    (9, '3e223118-04b2-4faa-8ed9-d3995fc50975', 'UP'),
    (10, '3e223118-04b2-4faa-8ed9-d3995fc50975', 'UP'),
    (11, 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'UP'),
    (12, 'dc1b4809-2c14-42a3-a384-ca65718e3421', 'UP');