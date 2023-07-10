# bitrock-news

A HackerNews-like clone build with Vue.js 3 and Supabase. Inspired by the [supabase-graphql-example](https://github.com/supabase-community/supabase-graphql-example/tree/main) 

### Backend

- CRUD (Query + Mutation Operations)
- Cursor Based Pagination
- Authorization / Postgres Row Level Security
- [Supabase](https://supabase.com) - Backend with a Postgres Database, Authentication, instant APIs, Realtime subscriptions and Storage.
- [pg_graphql](https://supabase.com/blog/2021/12/03/pg-graphql) - A native [PostgreSQL extension](https://supabase.github.io/pg_graphql/) adding [GraphQL support](https://graphql.org).
- [Postgres Triggers](https://supabase.com/blog/2021/07/30/supabase-functions-updates) and [Postgres Functions](https://supabase.com/docs/guides/database/functions) - When votes are in, use triggers to invoke a Postgres function that updates a post score
- [Postgres Enumerated Types](https://www.postgresql.org/docs/14/datatype-enum.html) - Enums help defined the direction of a vote: UP or DOWN.

### Frontend

- [Vue.js](https://vuejs.org) - Vue.js
- [TypeScript](https://www.typescriptlang.org)
- [graphql-code-generator](https://www.graphql-code-generator.com) - Generate code from your GraphQL schema and operations with a simple CLI
- [vite-plugin-graphql-codegen](https://github.com/danielwaltz/vite-plugin-graphql-codegen) - Zero-config vite plugin that uses the vite file watcher to run graphql codegen programmatically without needing to start a separate watcher.
- [Vue Apollo](https://apollo.vuejs.org/) - Apollo/GraphQL integration for VueJS

### Functionality

- Registration
- Get a feed of posts
- Create Post
- Delete Post
- Create Comment
- Delete Comment
- Upvote/Downvote Post
- View Profile
- Edit Profile
- Pagination (Posts, Comments)

# QuickStart

### Setup env vars

- `cp app/.env.example app/.env.local`
- Fill in your url and anon key from the Supabase Dashboard: https://app.supabase.io/project/_/settings/api

### Install dependencies, run app

```bash
pnpm i
pnpm dev
```
