import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import type * as VueCompositionApi from 'vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigFloat: { input: any; output: any }
  BigInt: { input: any; output: any }
  Cursor: { input: any; output: any }
  Date: { input: any; output: any }
  Datetime: { input: any; output: any }
  JSON: { input: any; output: any }
  Opaque: { input: any; output: any }
  Time: { input: any; output: any }
  UUID: { input: any; output: any }
}

/** Boolean expression comparing fields on type "BigFloat" */
export type IBigFloatFilter = {
  eq: InputMaybe<Scalars['BigFloat']['input']>
  gt: InputMaybe<Scalars['BigFloat']['input']>
  gte: InputMaybe<Scalars['BigFloat']['input']>
  in: InputMaybe<Array<Scalars['BigFloat']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['BigFloat']['input']>
  lte: InputMaybe<Scalars['BigFloat']['input']>
  neq: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type IBigIntFilter = {
  eq: InputMaybe<Scalars['BigInt']['input']>
  gt: InputMaybe<Scalars['BigInt']['input']>
  gte: InputMaybe<Scalars['BigInt']['input']>
  in: InputMaybe<Array<Scalars['BigInt']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['BigInt']['input']>
  lte: InputMaybe<Scalars['BigInt']['input']>
  neq: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type IBooleanFilter = {
  eq: InputMaybe<Scalars['Boolean']['input']>
  is: InputMaybe<IFilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type IDateFilter = {
  eq: InputMaybe<Scalars['Date']['input']>
  gt: InputMaybe<Scalars['Date']['input']>
  gte: InputMaybe<Scalars['Date']['input']>
  in: InputMaybe<Array<Scalars['Date']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['Date']['input']>
  lte: InputMaybe<Scalars['Date']['input']>
  neq: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type IDatetimeFilter = {
  eq: InputMaybe<Scalars['Datetime']['input']>
  gt: InputMaybe<Scalars['Datetime']['input']>
  gte: InputMaybe<Scalars['Datetime']['input']>
  in: InputMaybe<Array<Scalars['Datetime']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['Datetime']['input']>
  lte: InputMaybe<Scalars['Datetime']['input']>
  neq: InputMaybe<Scalars['Datetime']['input']>
}

export enum IFilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type IFloatFilter = {
  eq: InputMaybe<Scalars['Float']['input']>
  gt: InputMaybe<Scalars['Float']['input']>
  gte: InputMaybe<Scalars['Float']['input']>
  in: InputMaybe<Array<Scalars['Float']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['Float']['input']>
  lte: InputMaybe<Scalars['Float']['input']>
  neq: InputMaybe<Scalars['Float']['input']>
}

/** Boolean expression comparing fields on type "ID" */
export type IIdFilter = {
  eq: InputMaybe<Scalars['ID']['input']>
}

/** Boolean expression comparing fields on type "Int" */
export type IIntFilter = {
  eq: InputMaybe<Scalars['Int']['input']>
  gt: InputMaybe<Scalars['Int']['input']>
  gte: InputMaybe<Scalars['Int']['input']>
  in: InputMaybe<Array<Scalars['Int']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['Int']['input']>
  lte: InputMaybe<Scalars['Int']['input']>
  neq: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type IMutation = {
  /** Deletes zero or more records from the `comments` collection */
  deleteFromcommentsCollection: ICommentsDeleteResponse
  /** Deletes zero or more records from the `posts` collection */
  deleteFrompostsCollection: IPostsDeleteResponse
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: IProfilesDeleteResponse
  /** Deletes zero or more records from the `votes` collection */
  deleteFromvotesCollection: IVotesDeleteResponse
  /** Adds one or more `comments` records to the collection */
  insertIntocommentsCollection: Maybe<ICommentsInsertResponse>
  /** Adds one or more `posts` records to the collection */
  insertIntopostsCollection: Maybe<IPostsInsertResponse>
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection: Maybe<IProfilesInsertResponse>
  /** Adds one or more `votes` records to the collection */
  insertIntovotesCollection: Maybe<IVotesInsertResponse>
  /** Updates zero or more records in the `comments` collection */
  updatecommentsCollection: ICommentsUpdateResponse
  /** Updates zero or more records in the `posts` collection */
  updatepostsCollection: IPostsUpdateResponse
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: IProfilesUpdateResponse
  /** Updates zero or more records in the `votes` collection */
  updatevotesCollection: IVotesUpdateResponse
}

/** The root type for creating and mutating data */
export type IMutationDeleteFromcommentsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<ICommentsFilter>
}

/** The root type for creating and mutating data */
export type IMutationDeleteFrompostsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<IPostsFilter>
}

/** The root type for creating and mutating data */
export type IMutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<IProfilesFilter>
}

/** The root type for creating and mutating data */
export type IMutationDeleteFromvotesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<IVotesFilter>
}

/** The root type for creating and mutating data */
export type IMutationInsertIntocommentsCollectionArgs = {
  objects: Array<ICommentsInsertInput>
}

/** The root type for creating and mutating data */
export type IMutationInsertIntopostsCollectionArgs = {
  objects: Array<IPostsInsertInput>
}

/** The root type for creating and mutating data */
export type IMutationInsertIntoprofilesCollectionArgs = {
  objects: Array<IProfilesInsertInput>
}

/** The root type for creating and mutating data */
export type IMutationInsertIntovotesCollectionArgs = {
  objects: Array<IVotesInsertInput>
}

/** The root type for creating and mutating data */
export type IMutationUpdatecommentsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<ICommentsFilter>
  set: ICommentsUpdateInput
}

/** The root type for creating and mutating data */
export type IMutationUpdatepostsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<IPostsFilter>
  set: IPostsUpdateInput
}

/** The root type for creating and mutating data */
export type IMutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<IProfilesFilter>
  set: IProfilesUpdateInput
}

/** The root type for creating and mutating data */
export type IMutationUpdatevotesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter: InputMaybe<IVotesFilter>
  set: IVotesUpdateInput
}

export type INode = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type IOpaqueFilter = {
  eq: InputMaybe<Scalars['Opaque']['input']>
  is: InputMaybe<IFilterIs>
}

/** Defines a per-field sorting order */
export enum IOrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type IPageInfo = {
  endCursor: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor: Maybe<Scalars['String']['output']>
}

/** The root type for querying data */
export type IQuery = {
  /** A pagable collection of type `comments` */
  commentsCollection: Maybe<ICommentsConnection>
  /** Retrieve a record by its `ID` */
  node: Maybe<INode>
  /** A pagable collection of type `posts` */
  postsCollection: Maybe<IPostsConnection>
  /** A pagable collection of type `profiles` */
  profilesCollection: Maybe<IProfilesConnection>
  /** A pagable collection of type `votes` */
  votesCollection: Maybe<IVotesConnection>
}

/** The root type for querying data */
export type IQueryCommentsCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<ICommentsFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<ICommentsOrderBy>>
}

/** The root type for querying data */
export type IQueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type IQueryPostsCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<IPostsFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<IPostsOrderBy>>
}

/** The root type for querying data */
export type IQueryProfilesCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<IProfilesFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<IProfilesOrderBy>>
}

/** The root type for querying data */
export type IQueryVotesCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<IVotesFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<IVotesOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type IStringFilter = {
  eq: InputMaybe<Scalars['String']['input']>
  gt: InputMaybe<Scalars['String']['input']>
  gte: InputMaybe<Scalars['String']['input']>
  ilike: InputMaybe<Scalars['String']['input']>
  in: InputMaybe<Array<Scalars['String']['input']>>
  is: InputMaybe<IFilterIs>
  like: InputMaybe<Scalars['String']['input']>
  lt: InputMaybe<Scalars['String']['input']>
  lte: InputMaybe<Scalars['String']['input']>
  neq: InputMaybe<Scalars['String']['input']>
  startsWith: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type ITimeFilter = {
  eq: InputMaybe<Scalars['Time']['input']>
  gt: InputMaybe<Scalars['Time']['input']>
  gte: InputMaybe<Scalars['Time']['input']>
  in: InputMaybe<Array<Scalars['Time']['input']>>
  is: InputMaybe<IFilterIs>
  lt: InputMaybe<Scalars['Time']['input']>
  lte: InputMaybe<Scalars['Time']['input']>
  neq: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type IUuidFilter = {
  eq: InputMaybe<Scalars['UUID']['input']>
  in: InputMaybe<Array<Scalars['UUID']['input']>>
  is: InputMaybe<IFilterIs>
  neq: InputMaybe<Scalars['UUID']['input']>
}

export type IComments = INode & {
  content: Scalars['String']['output']
  created_at: Scalars['Datetime']['output']
  id: Scalars['BigInt']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  post_id: Scalars['BigInt']['output']
  posts: Maybe<IPosts>
  profile_id: Scalars['UUID']['output']
  profiles: Maybe<IProfiles>
}

export type ICommentsConnection = {
  edges: Array<ICommentsEdge>
  pageInfo: IPageInfo
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output']
}

export type ICommentsDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IComments>
}

export type ICommentsEdge = {
  cursor: Scalars['String']['output']
  node: IComments
}

export type ICommentsFilter = {
  content: InputMaybe<IStringFilter>
  created_at: InputMaybe<IDatetimeFilter>
  id: InputMaybe<IBigIntFilter>
  nodeId: InputMaybe<IIdFilter>
  post_id: InputMaybe<IBigIntFilter>
  profile_id: InputMaybe<IUuidFilter>
}

export type ICommentsInsertInput = {
  content: InputMaybe<Scalars['String']['input']>
  created_at: InputMaybe<Scalars['Datetime']['input']>
  post_id: InputMaybe<Scalars['BigInt']['input']>
  profile_id: InputMaybe<Scalars['UUID']['input']>
}

export type ICommentsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IComments>
}

export type ICommentsOrderBy = {
  content: InputMaybe<IOrderByDirection>
  created_at: InputMaybe<IOrderByDirection>
  id: InputMaybe<IOrderByDirection>
  post_id: InputMaybe<IOrderByDirection>
  profile_id: InputMaybe<IOrderByDirection>
}

export type ICommentsUpdateInput = {
  content: InputMaybe<Scalars['String']['input']>
  created_at: InputMaybe<Scalars['Datetime']['input']>
  post_id: InputMaybe<Scalars['BigInt']['input']>
  profile_id: InputMaybe<Scalars['UUID']['input']>
}

export type ICommentsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IComments>
}

export type IPosts = INode & {
  commentsCollection: Maybe<ICommentsConnection>
  created_at: Scalars['Datetime']['output']
  id: Scalars['BigInt']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile_id: Scalars['UUID']['output']
  profiles: Maybe<IProfiles>
  score: Scalars['Int']['output']
  title: Maybe<Scalars['String']['output']>
  url: Maybe<Scalars['String']['output']>
  votesCollection: Maybe<IVotesConnection>
}

export type IPostsCommentsCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<ICommentsFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<ICommentsOrderBy>>
}

export type IPostsVotesCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<IVotesFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<IVotesOrderBy>>
}

export type IPostsConnection = {
  edges: Array<IPostsEdge>
  pageInfo: IPageInfo
}

export type IPostsDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IPosts>
}

export type IPostsEdge = {
  cursor: Scalars['String']['output']
  node: IPosts
}

export type IPostsFilter = {
  created_at: InputMaybe<IDatetimeFilter>
  id: InputMaybe<IBigIntFilter>
  nodeId: InputMaybe<IIdFilter>
  profile_id: InputMaybe<IUuidFilter>
  score: InputMaybe<IIntFilter>
  title: InputMaybe<IStringFilter>
  url: InputMaybe<IStringFilter>
}

export type IPostsInsertInput = {
  created_at: InputMaybe<Scalars['Datetime']['input']>
  profile_id: InputMaybe<Scalars['UUID']['input']>
  score: InputMaybe<Scalars['Int']['input']>
  title: InputMaybe<Scalars['String']['input']>
  url: InputMaybe<Scalars['String']['input']>
}

export type IPostsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IPosts>
}

export type IPostsOrderBy = {
  created_at: InputMaybe<IOrderByDirection>
  id: InputMaybe<IOrderByDirection>
  profile_id: InputMaybe<IOrderByDirection>
  score: InputMaybe<IOrderByDirection>
  title: InputMaybe<IOrderByDirection>
  url: InputMaybe<IOrderByDirection>
}

export type IPostsUpdateInput = {
  created_at: InputMaybe<Scalars['Datetime']['input']>
  profile_id: InputMaybe<Scalars['UUID']['input']>
  score: InputMaybe<Scalars['Int']['input']>
  title: InputMaybe<Scalars['String']['input']>
  url: InputMaybe<Scalars['String']['input']>
}

export type IPostsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IPosts>
}

export type IProfiles = INode & {
  bio: Maybe<Scalars['String']['output']>
  commentsCollection: Maybe<ICommentsConnection>
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  postsCollection: Maybe<IPostsConnection>
  status: IUser_Status
  username: Maybe<Scalars['String']['output']>
  votesCollection: Maybe<IVotesConnection>
}

export type IProfilesCommentsCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<ICommentsFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<ICommentsOrderBy>>
}

export type IProfilesPostsCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<IPostsFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<IPostsOrderBy>>
}

export type IProfilesVotesCollectionArgs = {
  after: InputMaybe<Scalars['Cursor']['input']>
  before: InputMaybe<Scalars['Cursor']['input']>
  filter: InputMaybe<IVotesFilter>
  first: InputMaybe<Scalars['Int']['input']>
  last: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Array<IVotesOrderBy>>
}

export type IProfilesConnection = {
  edges: Array<IProfilesEdge>
  pageInfo: IPageInfo
}

export type IProfilesDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>
}

export type IProfilesEdge = {
  cursor: Scalars['String']['output']
  node: IProfiles
}

export type IProfilesFilter = {
  bio: InputMaybe<IStringFilter>
  id: InputMaybe<IUuidFilter>
  nodeId: InputMaybe<IIdFilter>
  status: InputMaybe<IUser_StatusFilter>
  username: InputMaybe<IStringFilter>
}

export type IProfilesInsertInput = {
  bio: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['UUID']['input']>
  status: InputMaybe<IUser_Status>
  username: InputMaybe<Scalars['String']['input']>
}

export type IProfilesInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>
}

export type IProfilesOrderBy = {
  bio: InputMaybe<IOrderByDirection>
  id: InputMaybe<IOrderByDirection>
  status: InputMaybe<IOrderByDirection>
  username: InputMaybe<IOrderByDirection>
}

export type IProfilesUpdateInput = {
  bio: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['UUID']['input']>
  status: InputMaybe<IUser_Status>
  username: InputMaybe<Scalars['String']['input']>
}

export type IProfilesUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>
}

export enum IUser_Status {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

/** Boolean expression comparing fields on type "user_status" */
export type IUser_StatusFilter = {
  eq: InputMaybe<IUser_Status>
  in: InputMaybe<Array<IUser_Status>>
  is: InputMaybe<IFilterIs>
  neq: InputMaybe<IUser_Status>
}

export enum IVote_Direction {
  Down = 'DOWN',
  Up = 'UP'
}

/** Boolean expression comparing fields on type "vote_direction" */
export type IVote_DirectionFilter = {
  eq: InputMaybe<IVote_Direction>
  in: InputMaybe<Array<IVote_Direction>>
  is: InputMaybe<IFilterIs>
  neq: InputMaybe<IVote_Direction>
}

export type IVotes = INode & {
  created_at: Scalars['Datetime']['output']
  direction: IVote_Direction
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  post_id: Scalars['BigInt']['output']
  posts: Maybe<IPosts>
  profile_id: Scalars['UUID']['output']
  profiles: Maybe<IProfiles>
}

export type IVotesConnection = {
  edges: Array<IVotesEdge>
  pageInfo: IPageInfo
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output']
}

export type IVotesDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IVotes>
}

export type IVotesEdge = {
  cursor: Scalars['String']['output']
  node: IVotes
}

export type IVotesFilter = {
  created_at: InputMaybe<IDatetimeFilter>
  direction: InputMaybe<IVote_DirectionFilter>
  nodeId: InputMaybe<IIdFilter>
  post_id: InputMaybe<IBigIntFilter>
  profile_id: InputMaybe<IUuidFilter>
}

export type IVotesInsertInput = {
  created_at: InputMaybe<Scalars['Datetime']['input']>
  direction: InputMaybe<IVote_Direction>
  post_id: InputMaybe<Scalars['BigInt']['input']>
  profile_id: InputMaybe<Scalars['UUID']['input']>
}

export type IVotesInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IVotes>
}

export type IVotesOrderBy = {
  created_at: InputMaybe<IOrderByDirection>
  direction: InputMaybe<IOrderByDirection>
  post_id: InputMaybe<IOrderByDirection>
  profile_id: InputMaybe<IOrderByDirection>
}

export type IVotesUpdateInput = {
  created_at: InputMaybe<Scalars['Datetime']['input']>
  direction: InputMaybe<IVote_Direction>
  post_id: InputMaybe<Scalars['BigInt']['input']>
  profile_id: InputMaybe<Scalars['UUID']['input']>
}

export type IVotesUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IVotes>
}

export type IFeed_PostFragment = {
  id: any
  title: string | null
  url: string | null
  score: number
  created_at: any
  profile: { username: string | null } | null
  comments: { totalCount: number } | null
  upVoteByViewer: { totalCount: number } | null
  downVoteByViewer: { totalCount: number } | null
}

export type IUser_Fragment = { id: any; username: string | null; bio: string | null }

export type IVotes_PostFragment = {
  upVoteByViewer: { totalCount: number } | null
  downVoteByViewer: { totalCount: number } | null
}

export type IFeedQueryVariables = Exact<{
  profileId: InputMaybe<Scalars['UUID']['input']>
}>

export type IFeedQueryResult = {
  postsCollection: {
    edges: Array<{
      node: {
        id: any
        title: string | null
        url: string | null
        score: number
        created_at: any
        profile: { username: string | null } | null
        comments: { totalCount: number } | null
        upVoteByViewer: { totalCount: number } | null
        downVoteByViewer: { totalCount: number } | null
      }
    }>
    pageInfo: {
      endCursor: string | null
      startCursor: string | null
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
  } | null
}

export type IUserProfileQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type IUserProfileQueryResult = {
  profilesCollection: {
    edges: Array<{ node: { id: any; username: string | null; bio: string | null } }>
  } | null
}

export const Votes_PostFragmentDoc = gql`
  fragment Votes_PostFragment on posts {
    upVoteByViewer: votesCollection(
      filter: { profile_id: { eq: $profileId }, direction: { eq: UP } }
    ) {
      totalCount
    }
    downVoteByViewer: votesCollection(
      filter: { profile_id: { eq: $profileId }, direction: { eq: DOWN } }
    ) {
      totalCount
    }
  }
`
export const Feed_PostFragmentDoc = gql`
  fragment Feed_PostFragment on posts {
    id
    title
    url
    score
    created_at
    profile: profiles {
      username
    }
    comments: commentsCollection {
      totalCount
    }
    ...Votes_PostFragment
  }
  ${Votes_PostFragmentDoc}
`
export const User_FragmentDoc = gql`
  fragment User_Fragment on profiles {
    id
    username
    bio
  }
`
export const FeedDocument = gql`
  query Feed($profileId: UUID) {
    postsCollection {
      edges {
        node {
          ...Feed_PostFragment
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${Feed_PostFragmentDoc}
`

/**
 * __useFeedQuery__
 *
 * To run a query within a Vue component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFeedQuery({
 *   profileId: // value for 'profileId'
 * });
 */
export function useFeedQuery(
  variables:
    | IFeedQueryVariables
    | VueCompositionApi.Ref<IFeedQueryVariables>
    | ReactiveFunction<IFeedQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<IFeedQueryResult, IFeedQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<IFeedQueryResult, IFeedQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<IFeedQueryResult, IFeedQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<IFeedQueryResult, IFeedQueryVariables>(
    FeedDocument,
    variables,
    options
  )
}
export function useFeedLazyQuery(
  variables:
    | IFeedQueryVariables
    | VueCompositionApi.Ref<IFeedQueryVariables>
    | ReactiveFunction<IFeedQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<IFeedQueryResult, IFeedQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<IFeedQueryResult, IFeedQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<IFeedQueryResult, IFeedQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<IFeedQueryResult, IFeedQueryVariables>(
    FeedDocument,
    variables,
    options
  )
}
export type FeedQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  IFeedQueryResult,
  IFeedQueryVariables
>
export const UserProfileDocument = gql`
  query UserProfile($id: UUID!) {
    profilesCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          ...User_Fragment
        }
      }
    }
  }
  ${User_FragmentDoc}
`

/**
 * __useUserProfileQuery__
 *
 * To run a query within a Vue component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserProfileQuery({
 *   id: // value for 'id'
 * });
 */
export function useUserProfileQuery(
  variables:
    | IUserProfileQueryVariables
    | VueCompositionApi.Ref<IUserProfileQueryVariables>
    | ReactiveFunction<IUserProfileQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<IUserProfileQueryResult, IUserProfileQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<IUserProfileQueryResult, IUserProfileQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<IUserProfileQueryResult, IUserProfileQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<IUserProfileQueryResult, IUserProfileQueryVariables>(
    UserProfileDocument,
    variables,
    options
  )
}
export function useUserProfileLazyQuery(
  variables:
    | IUserProfileQueryVariables
    | VueCompositionApi.Ref<IUserProfileQueryVariables>
    | ReactiveFunction<IUserProfileQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<IUserProfileQueryResult, IUserProfileQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<IUserProfileQueryResult, IUserProfileQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<IUserProfileQueryResult, IUserProfileQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<IUserProfileQueryResult, IUserProfileQueryVariables>(
    UserProfileDocument,
    variables,
    options
  )
}
export type UserProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  IUserProfileQueryResult,
  IUserProfileQueryVariables
>
