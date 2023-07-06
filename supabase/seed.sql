insert into public.profiles (id, username, bio)
values
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'darius', 'Hello world');

insert into public.posts (id, title, profile_id, url)
values
    (1, 'This is my first post', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'https://chat.openai.com/'),
    (2, 'This is my second post', '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'https://chat.openai.com/');

insert into public.comments (id, profile_id, post_id, content)
values
    (1, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 1, 'Wow amazing'),
    (2, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 2, 'Yea ... maybe.');

insert into public.votes (post_id, profile_id, direction)
values
    (1, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'UP'),
    (2, '8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'DOWN');