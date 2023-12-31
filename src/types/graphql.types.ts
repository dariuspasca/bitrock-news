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
  eq?: InputMaybe<Scalars['BigFloat']['input']>
  gt?: InputMaybe<Scalars['BigFloat']['input']>
  gte?: InputMaybe<Scalars['BigFloat']['input']>
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['BigFloat']['input']>
  lte?: InputMaybe<Scalars['BigFloat']['input']>
  neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type IBigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type IBooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>
  is?: InputMaybe<IFilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type IDateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>
  gt?: InputMaybe<Scalars['Date']['input']>
  gte?: InputMaybe<Scalars['Date']['input']>
  in?: InputMaybe<Array<Scalars['Date']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['Date']['input']>
  lte?: InputMaybe<Scalars['Date']['input']>
  neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type IDatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>
  gt?: InputMaybe<Scalars['Datetime']['input']>
  gte?: InputMaybe<Scalars['Datetime']['input']>
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['Datetime']['input']>
  lte?: InputMaybe<Scalars['Datetime']['input']>
  neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum IFilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type IFloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  neq?: InputMaybe<Scalars['Float']['input']>
}

/** Boolean expression comparing fields on type "ID" */
export type IIdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>
}

/** Boolean expression comparing fields on type "Int" */
export type IIntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  neq?: InputMaybe<Scalars['Int']['input']>
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
  insertIntocommentsCollection?: Maybe<ICommentsInsertResponse>
  /** Adds one or more `posts` records to the collection */
  insertIntopostsCollection?: Maybe<IPostsInsertResponse>
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<IProfilesInsertResponse>
  /** Adds one or more `votes` records to the collection */
  insertIntovotesCollection?: Maybe<IVotesInsertResponse>
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
  filter?: InputMaybe<ICommentsFilter>
}

/** The root type for creating and mutating data */
export type IMutationDeleteFrompostsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<IPostsFilter>
}

/** The root type for creating and mutating data */
export type IMutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<IProfilesFilter>
}

/** The root type for creating and mutating data */
export type IMutationDeleteFromvotesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<IVotesFilter>
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
  filter?: InputMaybe<ICommentsFilter>
  set: ICommentsUpdateInput
}

/** The root type for creating and mutating data */
export type IMutationUpdatepostsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<IPostsFilter>
  set: IPostsUpdateInput
}

/** The root type for creating and mutating data */
export type IMutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<IProfilesFilter>
  set: IProfilesUpdateInput
}

/** The root type for creating and mutating data */
export type IMutationUpdatevotesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<IVotesFilter>
  set: IVotesUpdateInput
}

export type INode = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type IOpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>
  is?: InputMaybe<IFilterIs>
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
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

/** The root type for querying data */
export type IQuery = {
  /** A pagable collection of type `comments` */
  commentsCollection?: Maybe<ICommentsConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<INode>
  /** A pagable collection of type `posts` */
  postsCollection?: Maybe<IPostsConnection>
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<IProfilesConnection>
  /** A pagable collection of type `votes` */
  votesCollection?: Maybe<IVotesConnection>
}

/** The root type for querying data */
export type IQueryCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ICommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ICommentsOrderBy>>
}

/** The root type for querying data */
export type IQueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type IQueryPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<IPostsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<IPostsOrderBy>>
}

/** The root type for querying data */
export type IQueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<IProfilesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<IProfilesOrderBy>>
}

/** The root type for querying data */
export type IQueryVotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<IVotesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<IVotesOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type IStringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  is?: InputMaybe<IFilterIs>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type ITimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>
  gt?: InputMaybe<Scalars['Time']['input']>
  gte?: InputMaybe<Scalars['Time']['input']>
  in?: InputMaybe<Array<Scalars['Time']['input']>>
  is?: InputMaybe<IFilterIs>
  lt?: InputMaybe<Scalars['Time']['input']>
  lte?: InputMaybe<Scalars['Time']['input']>
  neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type IUuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>
  in?: InputMaybe<Array<Scalars['UUID']['input']>>
  is?: InputMaybe<IFilterIs>
  neq?: InputMaybe<Scalars['UUID']['input']>
}

export type IComments = INode & {
  created_at: Scalars['Datetime']['output']
  id: Scalars['BigInt']['output']
  message: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  post_id: Scalars['BigInt']['output']
  posts?: Maybe<IPosts>
  profile_id: Scalars['UUID']['output']
  profiles?: Maybe<IProfiles>
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
  created_at?: InputMaybe<IDatetimeFilter>
  id?: InputMaybe<IBigIntFilter>
  message?: InputMaybe<IStringFilter>
  nodeId?: InputMaybe<IIdFilter>
  post_id?: InputMaybe<IBigIntFilter>
  profile_id?: InputMaybe<IUuidFilter>
}

export type ICommentsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  message?: InputMaybe<Scalars['String']['input']>
  post_id?: InputMaybe<Scalars['BigInt']['input']>
  profile_id?: InputMaybe<Scalars['UUID']['input']>
}

export type ICommentsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IComments>
}

export type ICommentsOrderBy = {
  created_at?: InputMaybe<IOrderByDirection>
  id?: InputMaybe<IOrderByDirection>
  message?: InputMaybe<IOrderByDirection>
  post_id?: InputMaybe<IOrderByDirection>
  profile_id?: InputMaybe<IOrderByDirection>
}

export type ICommentsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  message?: InputMaybe<Scalars['String']['input']>
  post_id?: InputMaybe<Scalars['BigInt']['input']>
  profile_id?: InputMaybe<Scalars['UUID']['input']>
}

export type ICommentsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IComments>
}

export type IPosts = INode & {
  commentsCollection?: Maybe<ICommentsConnection>
  created_at: Scalars['Datetime']['output']
  id: Scalars['BigInt']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile_id: Scalars['UUID']['output']
  profiles?: Maybe<IProfiles>
  score: Scalars['Int']['output']
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  votesCollection?: Maybe<IVotesConnection>
}

export type IPostsCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ICommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ICommentsOrderBy>>
}

export type IPostsVotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<IVotesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<IVotesOrderBy>>
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
  created_at?: InputMaybe<IDatetimeFilter>
  id?: InputMaybe<IBigIntFilter>
  nodeId?: InputMaybe<IIdFilter>
  profile_id?: InputMaybe<IUuidFilter>
  score?: InputMaybe<IIntFilter>
  title?: InputMaybe<IStringFilter>
  url?: InputMaybe<IStringFilter>
}

export type IPostsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  profile_id?: InputMaybe<Scalars['UUID']['input']>
  score?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type IPostsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IPosts>
}

export type IPostsOrderBy = {
  created_at?: InputMaybe<IOrderByDirection>
  id?: InputMaybe<IOrderByDirection>
  profile_id?: InputMaybe<IOrderByDirection>
  score?: InputMaybe<IOrderByDirection>
  title?: InputMaybe<IOrderByDirection>
  url?: InputMaybe<IOrderByDirection>
}

export type IPostsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  profile_id?: InputMaybe<Scalars['UUID']['input']>
  score?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type IPostsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IPosts>
}

export type IProfiles = INode & {
  bio?: Maybe<Scalars['String']['output']>
  commentsCollection?: Maybe<ICommentsConnection>
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  postsCollection?: Maybe<IPostsConnection>
  status: IUser_Status
  username?: Maybe<Scalars['String']['output']>
  votesCollection?: Maybe<IVotesConnection>
}

export type IProfilesCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ICommentsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ICommentsOrderBy>>
}

export type IProfilesPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<IPostsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<IPostsOrderBy>>
}

export type IProfilesVotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<IVotesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<IVotesOrderBy>>
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
  bio?: InputMaybe<IStringFilter>
  id?: InputMaybe<IUuidFilter>
  nodeId?: InputMaybe<IIdFilter>
  status?: InputMaybe<IUser_StatusFilter>
  username?: InputMaybe<IStringFilter>
}

export type IProfilesInsertInput = {
  bio?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  status?: InputMaybe<IUser_Status>
  username?: InputMaybe<Scalars['String']['input']>
}

export type IProfilesInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>
}

export type IProfilesOrderBy = {
  bio?: InputMaybe<IOrderByDirection>
  id?: InputMaybe<IOrderByDirection>
  status?: InputMaybe<IOrderByDirection>
  username?: InputMaybe<IOrderByDirection>
}

export type IProfilesUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  status?: InputMaybe<IUser_Status>
  username?: InputMaybe<Scalars['String']['input']>
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
  eq?: InputMaybe<IUser_Status>
  in?: InputMaybe<Array<IUser_Status>>
  is?: InputMaybe<IFilterIs>
  neq?: InputMaybe<IUser_Status>
}

export enum IVote_Direction {
  Down = 'DOWN',
  Up = 'UP'
}

/** Boolean expression comparing fields on type "vote_direction" */
export type IVote_DirectionFilter = {
  eq?: InputMaybe<IVote_Direction>
  in?: InputMaybe<Array<IVote_Direction>>
  is?: InputMaybe<IFilterIs>
  neq?: InputMaybe<IVote_Direction>
}

export type IVotes = INode & {
  created_at: Scalars['Datetime']['output']
  direction: IVote_Direction
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  post_id: Scalars['BigInt']['output']
  posts?: Maybe<IPosts>
  profile_id: Scalars['UUID']['output']
  profiles?: Maybe<IProfiles>
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
  created_at?: InputMaybe<IDatetimeFilter>
  direction?: InputMaybe<IVote_DirectionFilter>
  nodeId?: InputMaybe<IIdFilter>
  post_id?: InputMaybe<IBigIntFilter>
  profile_id?: InputMaybe<IUuidFilter>
}

export type IVotesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  direction?: InputMaybe<IVote_Direction>
  post_id?: InputMaybe<Scalars['BigInt']['input']>
  profile_id?: InputMaybe<Scalars['UUID']['input']>
}

export type IVotesInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IVotes>
}

export type IVotesOrderBy = {
  created_at?: InputMaybe<IOrderByDirection>
  direction?: InputMaybe<IOrderByDirection>
  post_id?: InputMaybe<IOrderByDirection>
  profile_id?: InputMaybe<IOrderByDirection>
}

export type IVotesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>
  direction?: InputMaybe<IVote_Direction>
  post_id?: InputMaybe<Scalars['BigInt']['input']>
  profile_id?: InputMaybe<Scalars['UUID']['input']>
}

export type IVotesUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<IVotes>
}

export type IComment_Fragment = {
  id: any
  message: string
  created_at: any
  posts?: { id: any; title?: string | null } | null
  profiles?: { id: any; username?: string | null } | null
}

export type IFeed_PostFragment = {
  id: any
  title?: string | null
  url?: string | null
  score: number
  created_at: any
  profile?: { id: any; username?: string | null } | null
  commentsCollection?: { totalCount: number } | null
  upVoteByViewer?: { totalCount: number } | null
  downVoteByViewer?: { totalCount: number } | null
}

export type IUser_Fragment = { id: any; username?: string | null; bio?: string | null }

export type IVotes_PostFragment = {
  upVoteByViewer?: { totalCount: number } | null
  downVoteByViewer?: { totalCount: number } | null
}

export type IDeleteCommentMutationVariables = Exact<{
  commentId: Scalars['BigInt']['input']
}>

export type IDeleteCommentMutationResult = {
  deleteFromcommentsCollection: { affectedCount: number }
}

export type IDeletePostVoteMutationVariables = Exact<{
  postId: Scalars['BigInt']['input']
  profileId: Scalars['UUID']['input']
}>

export type IDeletePostVoteMutationResult = {
  deleteFromvotesCollection: { __typename: 'votesDeleteResponse' }
}

export type ISubmitCommentMutationVariables = Exact<{
  postId: Scalars['BigInt']['input']
  profileId: Scalars['UUID']['input']
  message: Scalars['String']['input']
}>

export type ISubmitCommentMutationResult = {
  insertIntocommentsCollection?: { affectedCount: number } | null
}

export type ISubmitPostMutationVariables = Exact<{
  profileId: Scalars['UUID']['input']
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}>

export type ISubmitPostMutationResult = {
  insertIntopostsCollection?: { affectedCount: number } | null
}

export type IUpdateProfileMutationVariables = Exact<{
  profileId: Scalars['UUID']['input']
  username?: InputMaybe<Scalars['String']['input']>
  bio?: InputMaybe<Scalars['String']['input']>
}>

export type IUpdateProfileMutationResult = { updateprofilesCollection: { affectedCount: number } }

export type IVotePostMutationVariables = Exact<{
  postId: Scalars['BigInt']['input']
  profileId: Scalars['UUID']['input']
  voteDirection: IVote_Direction
}>

export type IVotePostMutationResult = {
  insertIntovotesCollection?: {
    __typename: 'votesInsertResponse'
    affectedCount: number
    records: Array<{ post_id: any; profile_id: any; direction: IVote_Direction }>
  } | null
}

export type IFeedQueryVariables = Exact<{
  profileId?: InputMaybe<Scalars['UUID']['input']>
  after?: InputMaybe<Scalars['Cursor']['input']>
  orderBy?: InputMaybe<Array<IPostsOrderBy> | IPostsOrderBy>
}>

export type IFeedQueryResult = {
  postsCollection?: {
    edges: Array<{
      node: {
        id: any
        title?: string | null
        url?: string | null
        score: number
        created_at: any
        profile?: { id: any; username?: string | null } | null
        commentsCollection?: { totalCount: number } | null
        upVoteByViewer?: { totalCount: number } | null
        downVoteByViewer?: { totalCount: number } | null
      }
    }>
    pageInfo: { hasNextPage: boolean; endCursor?: string | null }
  } | null
}

export type ICommentsFeedQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>
}>

export type ICommentsFeedQueryResult = {
  comments?: {
    pageInfo: { hasNextPage: boolean; endCursor?: string | null }
    edges: Array<{
      cursor: string
      node: {
        id: any
        message: string
        created_at: any
        posts?: { id: any; title?: string | null } | null
        profiles?: { id: any; username?: string | null } | null
      }
    }>
  } | null
}

export type IPostQueryVariables = Exact<{
  postId: Scalars['BigInt']['input']
  profileId: Scalars['UUID']['input']
  commentCursor?: InputMaybe<Scalars['Cursor']['input']>
}>

export type IPostQueryResult = {
  post?: {
    edges: Array<{
      cursor: string
      node: {
        id: any
        title?: string | null
        url?: string | null
        score: number
        created_at: any
        comments?: {
          edges: Array<{
            cursor: string
            node: {
              id: any
              message: string
              created_at: any
              posts?: { id: any; title?: string | null } | null
              profiles?: { id: any; username?: string | null } | null
            }
          }>
          pageInfo: { hasNextPage: boolean; endCursor?: string | null }
        } | null
        profile?: { id: any; username?: string | null } | null
        commentsCollection?: { totalCount: number } | null
        upVoteByViewer?: { totalCount: number } | null
        downVoteByViewer?: { totalCount: number } | null
      }
    }>
  } | null
}

export type IDeletePostMutationVariables = Exact<{
  postId: Scalars['BigInt']['input']
}>

export type IDeletePostMutationResult = { deleteFrompostsCollection: { affectedCount: number } }

export type IUserProfileQueryVariables = Exact<{
  profileId?: InputMaybe<Scalars['UUID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}>

export type IUserProfileQueryResult = {
  profilesCollection?: {
    edges: Array<{
      node: {
        id: any
        username?: string | null
        bio?: string | null
        latestPosts?: {
          edges: Array<{
            node: {
              id: any
              title?: string | null
              url?: string | null
              score: number
              created_at: any
              profile?: { id: any; username?: string | null } | null
              commentsCollection?: { totalCount: number } | null
              upVoteByViewer?: { totalCount: number } | null
              downVoteByViewer?: { totalCount: number } | null
            }
          }>
        } | null
      }
    }>
  } | null
}

export const Comment_FragmentDoc = gql`
  fragment Comment_Fragment on comments {
    id
    message
    created_at
    posts {
      id
      title
    }
    profiles {
      id
      username
    }
  }
`
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
      id
      username
    }
    commentsCollection {
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
export const DeleteCommentDocument = gql`
  mutation DeleteComment($commentId: BigInt!) {
    deleteFromcommentsCollection(filter: { id: { eq: $commentId } }) {
      affectedCount
    }
  }
`

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCommentMutation({
 *   variables: {
 *     commentId: // value for 'commentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        IDeleteCommentMutationResult,
        IDeleteCommentMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          IDeleteCommentMutationResult,
          IDeleteCommentMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    IDeleteCommentMutationResult,
    IDeleteCommentMutationVariables
  >(DeleteCommentDocument, options)
}
export type DeleteCommentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  IDeleteCommentMutationResult,
  IDeleteCommentMutationVariables
>
export const DeletePostVoteDocument = gql`
  mutation DeletePostVote($postId: BigInt!, $profileId: UUID!) {
    deleteFromvotesCollection(
      filter: { post_id: { eq: $postId }, profile_id: { eq: $profileId } }
    ) {
      __typename
    }
  }
`

/**
 * __useDeletePostVoteMutation__
 *
 * To run a mutation, you first call `useDeletePostVoteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostVoteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeletePostVoteMutation({
 *   variables: {
 *     postId: // value for 'postId'
 *     profileId: // value for 'profileId'
 *   },
 * });
 */
export function useDeletePostVoteMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        IDeletePostVoteMutationResult,
        IDeletePostVoteMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          IDeletePostVoteMutationResult,
          IDeletePostVoteMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    IDeletePostVoteMutationResult,
    IDeletePostVoteMutationVariables
  >(DeletePostVoteDocument, options)
}
export type DeletePostVoteMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  IDeletePostVoteMutationResult,
  IDeletePostVoteMutationVariables
>
export const SubmitCommentDocument = gql`
  mutation SubmitComment($postId: BigInt!, $profileId: UUID!, $message: String!) {
    insertIntocommentsCollection(
      objects: { post_id: $postId, profile_id: $profileId, message: $message }
    ) {
      affectedCount
    }
  }
`

/**
 * __useSubmitCommentMutation__
 *
 * To run a mutation, you first call `useSubmitCommentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSubmitCommentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSubmitCommentMutation({
 *   variables: {
 *     postId: // value for 'postId'
 *     profileId: // value for 'profileId'
 *     message: // value for 'message'
 *   },
 * });
 */
export function useSubmitCommentMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ISubmitCommentMutationResult,
        ISubmitCommentMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ISubmitCommentMutationResult,
          ISubmitCommentMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    ISubmitCommentMutationResult,
    ISubmitCommentMutationVariables
  >(SubmitCommentDocument, options)
}
export type SubmitCommentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  ISubmitCommentMutationResult,
  ISubmitCommentMutationVariables
>
export const SubmitPostDocument = gql`
  mutation SubmitPost($profileId: UUID!, $title: String, $url: String) {
    insertIntopostsCollection(objects: { profile_id: $profileId, title: $title, url: $url }) {
      affectedCount
    }
  }
`

/**
 * __useSubmitPostMutation__
 *
 * To run a mutation, you first call `useSubmitPostMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPostMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSubmitPostMutation({
 *   variables: {
 *     profileId: // value for 'profileId'
 *     title: // value for 'title'
 *     url: // value for 'url'
 *   },
 * });
 */
export function useSubmitPostMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ISubmitPostMutationResult,
        ISubmitPostMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ISubmitPostMutationResult,
          ISubmitPostMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<ISubmitPostMutationResult, ISubmitPostMutationVariables>(
    SubmitPostDocument,
    options
  )
}
export type SubmitPostMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  ISubmitPostMutationResult,
  ISubmitPostMutationVariables
>
export const UpdateProfileDocument = gql`
  mutation UpdateProfile($profileId: UUID!, $username: String, $bio: String) {
    updateprofilesCollection(set: { id: $profileId, username: $username, bio: $bio }) {
      affectedCount
    }
  }
`

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateProfileMutation({
 *   variables: {
 *     profileId: // value for 'profileId'
 *     username: // value for 'username'
 *     bio: // value for 'bio'
 *   },
 * });
 */
export function useUpdateProfileMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        IUpdateProfileMutationResult,
        IUpdateProfileMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          IUpdateProfileMutationResult,
          IUpdateProfileMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    IUpdateProfileMutationResult,
    IUpdateProfileMutationVariables
  >(UpdateProfileDocument, options)
}
export type UpdateProfileMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  IUpdateProfileMutationResult,
  IUpdateProfileMutationVariables
>
export const VotePostDocument = gql`
  mutation VotePost($postId: BigInt!, $profileId: UUID!, $voteDirection: vote_direction!) {
    insertIntovotesCollection(
      objects: [{ post_id: $postId, profile_id: $profileId, direction: $voteDirection }]
    ) {
      __typename
      affectedCount
      records {
        post_id
        profile_id
        direction
      }
    }
  }
`

/**
 * __useVotePostMutation__
 *
 * To run a mutation, you first call `useVotePostMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useVotePostMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useVotePostMutation({
 *   variables: {
 *     postId: // value for 'postId'
 *     profileId: // value for 'profileId'
 *     voteDirection: // value for 'voteDirection'
 *   },
 * });
 */
export function useVotePostMutation(
  options:
    | VueApolloComposable.UseMutationOptions<IVotePostMutationResult, IVotePostMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<IVotePostMutationResult, IVotePostMutationVariables>
      > = {}
) {
  return VueApolloComposable.useMutation<IVotePostMutationResult, IVotePostMutationVariables>(
    VotePostDocument,
    options
  )
}
export type VotePostMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  IVotePostMutationResult,
  IVotePostMutationVariables
>
export const FeedDocument = gql`
  query Feed($profileId: UUID, $after: Cursor, $orderBy: [postsOrderBy!]) {
    postsCollection(orderBy: $orderBy, first: 10, after: $after) {
      edges {
        node {
          ...Feed_PostFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
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
 *   after: // value for 'after'
 *   orderBy: // value for 'orderBy'
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
export const CommentsFeedDocument = gql`
  query CommentsFeed($after: Cursor) {
    comments: commentsCollection(
      orderBy: [{ created_at: DescNullsFirst }]
      first: 15
      after: $after
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Comment_Fragment
        }
      }
    }
  }
  ${Comment_FragmentDoc}
`

/**
 * __useCommentsFeedQuery__
 *
 * To run a query within a Vue component, call `useCommentsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsFeedQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCommentsFeedQuery({
 *   after: // value for 'after'
 * });
 */
export function useCommentsFeedQuery(
  variables:
    | ICommentsFeedQueryVariables
    | VueCompositionApi.Ref<ICommentsFeedQueryVariables>
    | ReactiveFunction<ICommentsFeedQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>(
    CommentsFeedDocument,
    variables,
    options
  )
}
export function useCommentsFeedLazyQuery(
  variables:
    | ICommentsFeedQueryVariables
    | VueCompositionApi.Ref<ICommentsFeedQueryVariables>
    | ReactiveFunction<ICommentsFeedQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<ICommentsFeedQueryResult, ICommentsFeedQueryVariables>(
    CommentsFeedDocument,
    variables,
    options
  )
}
export type CommentsFeedQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  ICommentsFeedQueryResult,
  ICommentsFeedQueryVariables
>
export const PostDocument = gql`
  query Post($postId: BigInt!, $profileId: UUID!, $commentCursor: Cursor) {
    post: postsCollection(filter: { id: { eq: $postId } }, first: 1) {
      edges {
        cursor
        node {
          ...Feed_PostFragment
          comments: commentsCollection(
            first: 15
            after: $commentCursor
            orderBy: [{ created_at: DescNullsLast }]
          ) {
            edges {
              cursor
              node {
                ...Comment_Fragment
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    }
  }
  ${Feed_PostFragmentDoc}
  ${Comment_FragmentDoc}
`

/**
 * __usePostQuery__
 *
 * To run a query within a Vue component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePostQuery({
 *   postId: // value for 'postId'
 *   profileId: // value for 'profileId'
 *   commentCursor: // value for 'commentCursor'
 * });
 */
export function usePostQuery(
  variables:
    | IPostQueryVariables
    | VueCompositionApi.Ref<IPostQueryVariables>
    | ReactiveFunction<IPostQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<IPostQueryResult, IPostQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<IPostQueryResult, IPostQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<IPostQueryResult, IPostQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<IPostQueryResult, IPostQueryVariables>(
    PostDocument,
    variables,
    options
  )
}
export function usePostLazyQuery(
  variables:
    | IPostQueryVariables
    | VueCompositionApi.Ref<IPostQueryVariables>
    | ReactiveFunction<IPostQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<IPostQueryResult, IPostQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<IPostQueryResult, IPostQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<IPostQueryResult, IPostQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<IPostQueryResult, IPostQueryVariables>(
    PostDocument,
    variables,
    options
  )
}
export type PostQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  IPostQueryResult,
  IPostQueryVariables
>
export const DeletePostDocument = gql`
  mutation DeletePost($postId: BigInt!) {
    deleteFrompostsCollection(filter: { id: { eq: $postId } }) {
      affectedCount
    }
  }
`

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeletePostMutation({
 *   variables: {
 *     postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        IDeletePostMutationResult,
        IDeletePostMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          IDeletePostMutationResult,
          IDeletePostMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<IDeletePostMutationResult, IDeletePostMutationVariables>(
    DeletePostDocument,
    options
  )
}
export type DeletePostMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  IDeletePostMutationResult,
  IDeletePostMutationVariables
>
export const UserProfileDocument = gql`
  query UserProfile($profileId: UUID, $username: String) {
    profilesCollection(filter: { id: { eq: $profileId }, username: { eq: $username } }) {
      edges {
        node {
          id
          username
          bio
          latestPosts: postsCollection(orderBy: [{ created_at: DescNullsFirst }], first: 5) {
            edges {
              node {
                ...Feed_PostFragment
              }
            }
          }
        }
      }
    }
  }
  ${Feed_PostFragmentDoc}
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
 *   profileId: // value for 'profileId'
 *   username: // value for 'username'
 * });
 */
export function useUserProfileQuery(
  variables:
    | IUserProfileQueryVariables
    | VueCompositionApi.Ref<IUserProfileQueryVariables>
    | ReactiveFunction<IUserProfileQueryVariables> = {},
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
    | ReactiveFunction<IUserProfileQueryVariables> = {},
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
