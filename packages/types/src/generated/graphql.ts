import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};



export type Calendar = {
  __typename?: 'Calendar';
  day_id?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  day_of_week?: Maybe<Scalars['Int']>;
  day_of_year?: Maybe<Scalars['Int']>;
  week_of_year?: Maybe<Scalars['Int']>;
};

export type Event = {
  __typename?: 'Event';
  eventId: Scalars['ID'];
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  journal?: Maybe<Journal>;
  date?: Maybe<Calendar>;
  createdAt?: Maybe<Scalars['Date']>;
  dateId?: Maybe<Scalars['String']>;
};

export type Journal = {
  __typename?: 'Journal';
  id: Scalars['ID'];
  entry?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
};

export type CreateJournalInput = {
  entry: Scalars['String'];
  rating: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJournal?: Maybe<Journal>;
  getAccessToken: Auth;
  signIn: Auth;
  signUp: Auth;
};


export type MutationCreateJournalArgs = {
  data: CreateJournalInput;
};


export type MutationGetAccessTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSignInArgs = {
  data: LoginInput;
};


export type MutationSignUpArgs = {
  data: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  date?: Maybe<Calendar>;
  dates?: Maybe<Array<Maybe<Calendar>>>;
  events?: Maybe<Array<Maybe<Event>>>;
  journals?: Maybe<Array<Maybe<Event>>>;
  me?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryMeArgs = {
  id: Scalars['Int'];
};


export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile: ProfileInput;
};

export type ProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  role?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  user: User;
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Calendar: ResolverTypeWrapper<Calendar>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Event: ResolverTypeWrapper<Event>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Journal: ResolverTypeWrapper<Journal>;
  CreateJournalInput: CreateJournalInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  LoginInput: LoginInput;
  SignupInput: SignupInput;
  ProfileInput: ProfileInput;
  User: ResolverTypeWrapper<User>;
  Profile: ResolverTypeWrapper<Profile>;
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Calendar: Calendar;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Event: Event;
  ID: Scalars['ID'];
  Journal: Journal;
  CreateJournalInput: CreateJournalInput;
  Mutation: {};
  Query: {};
  Date: Scalars['Date'];
  LoginInput: LoginInput;
  SignupInput: SignupInput;
  ProfileInput: ProfileInput;
  User: User;
  Profile: Profile;
  Auth: Auth;
  Boolean: Scalars['Boolean'];
};

export type AuthenticatedDirectiveArgs = {  };

export type AuthenticatedDirectiveResolver<Result, Parent, ContextType = any, Args = AuthenticatedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthorizedDirectiveArgs = {   role: Scalars['String']; };

export type AuthorizedDirectiveResolver<Result, Parent, ContextType = any, Args = AuthorizedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CalendarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = {
  day_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quarter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day_of_week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day_of_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  week_of_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  journal?: Resolver<Maybe<ResolversTypes['Journal']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Calendar']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  dateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JournalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Journal'] = ResolversParentTypes['Journal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJournal?: Resolver<Maybe<ResolversTypes['Journal']>, ParentType, ContextType, RequireFields<MutationCreateJournalArgs, 'data'>>;
  getAccessToken?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationGetAccessTokenArgs, 'refreshToken'>>;
  signIn?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'data'>>;
  signUp?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'data'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  date?: Resolver<Maybe<ResolversTypes['Calendar']>, ParentType, ContextType>;
  dates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Calendar']>>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  journals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryMeArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Calendar?: CalendarResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Journal?: JournalResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  authenticated?: AuthenticatedDirectiveResolver<any, any, ContextType>;
  authorized?: AuthorizedDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;