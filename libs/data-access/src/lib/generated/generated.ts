import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Badge = {
  __typename?: 'Badge';
  badge_image?: Maybe<UploadFileRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BadgeBadge_ImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BadgeEntity = {
  __typename?: 'BadgeEntity';
  attributes?: Maybe<Badge>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BadgeEntityResponse = {
  __typename?: 'BadgeEntityResponse';
  data?: Maybe<BadgeEntity>;
};

export type BadgeEntityResponseCollection = {
  __typename?: 'BadgeEntityResponseCollection';
  data: Array<BadgeEntity>;
  meta: ResponseCollectionMeta;
};

export type BadgeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BadgeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BadgeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BadgeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BadgeInput = {
  badge_image?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomLinksCustomLink = {
  __typename?: 'CustomLinksCustomLink';
  contentId?: Maybe<Scalars['Long']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type CustomLinksCustomLinkEntity = {
  __typename?: 'CustomLinksCustomLinkEntity';
  attributes?: Maybe<CustomLinksCustomLink>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CustomLinksCustomLinkEntityResponse = {
  __typename?: 'CustomLinksCustomLinkEntityResponse';
  data?: Maybe<CustomLinksCustomLinkEntity>;
};

export type CustomLinksCustomLinkEntityResponseCollection = {
  __typename?: 'CustomLinksCustomLinkEntityResponseCollection';
  data: Array<CustomLinksCustomLinkEntity>;
  meta: ResponseCollectionMeta;
};

export type CustomLinksCustomLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CustomLinksCustomLinkFiltersInput>>>;
  contentId?: InputMaybe<LongFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  kind?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CustomLinksCustomLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CustomLinksCustomLinkFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  uri?: InputMaybe<StringFilterInput>;
};

export type CustomLinksCustomLinkInput = {
  contentId?: InputMaybe<Scalars['Long']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type CustomLinksTempuri = {
  __typename?: 'CustomLinksTempuri';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type CustomLinksTempuriEntity = {
  __typename?: 'CustomLinksTempuriEntity';
  attributes?: Maybe<CustomLinksTempuri>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CustomLinksTempuriEntityResponse = {
  __typename?: 'CustomLinksTempuriEntityResponse';
  data?: Maybe<CustomLinksTempuriEntity>;
};

export type CustomLinksTempuriEntityResponseCollection = {
  __typename?: 'CustomLinksTempuriEntityResponseCollection';
  data: Array<CustomLinksTempuriEntity>;
  meta: ResponseCollectionMeta;
};

export type CustomLinksTempuriFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CustomLinksTempuriFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CustomLinksTempuriFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CustomLinksTempuriFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  uri?: InputMaybe<StringFilterInput>;
};

export type CustomLinksTempuriInput = {
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Day = {
  __typename?: 'Day';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stickies?: Maybe<StickyRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DayStickiesArgs = {
  filters?: InputMaybe<StickyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DayEntity = {
  __typename?: 'DayEntity';
  attributes?: Maybe<Day>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DayEntityResponse = {
  __typename?: 'DayEntityResponse';
  data?: Maybe<DayEntity>;
};

export type DayEntityResponseCollection = {
  __typename?: 'DayEntityResponseCollection';
  data: Array<DayEntity>;
  meta: ResponseCollectionMeta;
};

export type DayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DayFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stickies?: InputMaybe<StickyFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DayInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stickies?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type DayRelationResponseCollection = {
  __typename?: 'DayRelationResponseCollection';
  data: Array<DayEntity>;
};

export enum Enum_Rev1211Role_Role {
  Facilitator = 'Facilitator',
  Sponsor = 'Sponsor',
  Sprinter = 'Sprinter'
}

export enum Enum_Sprint_Type {
  Second = 'second',
  Starter = 'starter'
}

export enum Enum_Sticky_Type {
  Document = 'document',
  Form = 'form',
  Video = 'video'
}

export type EzformsRecipient = {
  __typename?: 'EzformsRecipient';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EzformsRecipientEntity = {
  __typename?: 'EzformsRecipientEntity';
  attributes?: Maybe<EzformsRecipient>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EzformsRecipientEntityResponse = {
  __typename?: 'EzformsRecipientEntityResponse';
  data?: Maybe<EzformsRecipientEntity>;
};

export type EzformsRecipientEntityResponseCollection = {
  __typename?: 'EzformsRecipientEntityResponseCollection';
  data: Array<EzformsRecipientEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsRecipientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EzformsRecipientFiltersInput>;
  number?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsRecipientInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  formName?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EzformsSubmissionEntity = {
  __typename?: 'EzformsSubmissionEntity';
  attributes?: Maybe<EzformsSubmission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EzformsSubmissionEntityResponse = {
  __typename?: 'EzformsSubmissionEntityResponse';
  data?: Maybe<EzformsSubmissionEntity>;
};

export type EzformsSubmissionEntityResponseCollection = {
  __typename?: 'EzformsSubmissionEntityResponseCollection';
  data: Array<EzformsSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  formName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EzformsSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  score?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsSubmissionInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  formName?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Badge | CustomLinksCustomLink | CustomLinksTempuri | Day | EzformsRecipient | EzformsSubmission | I18NLocale | Module | Rev1211Role | Sprint | SprintDay | Sticky | TimeZone | UploadFile | UploadFolder | UserProfile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Module = {
  __typename?: 'Module';
  badge?: Maybe<BadgeEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  days?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  module_days?: Maybe<DayRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ModuleModule_DaysArgs = {
  filters?: InputMaybe<DayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModuleEntity = {
  __typename?: 'ModuleEntity';
  attributes?: Maybe<Module>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ModuleEntityResponse = {
  __typename?: 'ModuleEntityResponse';
  data?: Maybe<ModuleEntity>;
};

export type ModuleEntityResponseCollection = {
  __typename?: 'ModuleEntityResponseCollection';
  data: Array<ModuleEntity>;
  meta: ResponseCollectionMeta;
};

export type ModuleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ModuleFiltersInput>>>;
  badge?: InputMaybe<BadgeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  days?: InputMaybe<IntFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  module_days?: InputMaybe<DayFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ModuleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ModuleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ModuleInput = {
  badge?: InputMaybe<Scalars['ID']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  module_days?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBadge?: Maybe<BadgeEntityResponse>;
  createCustomLinksCustomLink?: Maybe<CustomLinksCustomLinkEntityResponse>;
  createCustomLinksTempuri?: Maybe<CustomLinksTempuriEntityResponse>;
  createDay?: Maybe<DayEntityResponse>;
  createEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  createEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  createModule?: Maybe<ModuleEntityResponse>;
  createRev1211Role?: Maybe<Rev1211RoleEntityResponse>;
  createSprint?: Maybe<SprintEntityResponse>;
  createSprintDay?: Maybe<SprintDayEntityResponse>;
  createSticky?: Maybe<StickyEntityResponse>;
  createTimeZone?: Maybe<TimeZoneEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createUserProfile?: Maybe<UserProfileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBadge?: Maybe<BadgeEntityResponse>;
  deleteCustomLinksCustomLink?: Maybe<CustomLinksCustomLinkEntityResponse>;
  deleteCustomLinksTempuri?: Maybe<CustomLinksTempuriEntityResponse>;
  deleteDay?: Maybe<DayEntityResponse>;
  deleteEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  deleteEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  deleteModule?: Maybe<ModuleEntityResponse>;
  deleteRev1211Role?: Maybe<Rev1211RoleEntityResponse>;
  deleteSprint?: Maybe<SprintEntityResponse>;
  deleteSprintDay?: Maybe<SprintDayEntityResponse>;
  deleteSticky?: Maybe<StickyEntityResponse>;
  deleteTimeZone?: Maybe<TimeZoneEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUserProfile?: Maybe<UserProfileEntityResponse>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBadge?: Maybe<BadgeEntityResponse>;
  updateCustomLinksCustomLink?: Maybe<CustomLinksCustomLinkEntityResponse>;
  updateCustomLinksTempuri?: Maybe<CustomLinksTempuriEntityResponse>;
  updateDay?: Maybe<DayEntityResponse>;
  updateEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  updateEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateModule?: Maybe<ModuleEntityResponse>;
  updateRev1211Role?: Maybe<Rev1211RoleEntityResponse>;
  updateSprint?: Maybe<SprintEntityResponse>;
  updateSprintDay?: Maybe<SprintDayEntityResponse>;
  updateSticky?: Maybe<StickyEntityResponse>;
  updateTimeZone?: Maybe<TimeZoneEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUserProfile?: Maybe<UserProfileEntityResponse>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBadgeArgs = {
  data: BadgeInput;
};


export type MutationCreateCustomLinksCustomLinkArgs = {
  data: CustomLinksCustomLinkInput;
};


export type MutationCreateCustomLinksTempuriArgs = {
  data: CustomLinksTempuriInput;
};


export type MutationCreateDayArgs = {
  data: DayInput;
};


export type MutationCreateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
};


export type MutationCreateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
};


export type MutationCreateModuleArgs = {
  data: ModuleInput;
};


export type MutationCreateRev1211RoleArgs = {
  data: Rev1211RoleInput;
};


export type MutationCreateSprintArgs = {
  data: SprintInput;
};


export type MutationCreateSprintDayArgs = {
  data: SprintDayInput;
};


export type MutationCreateStickyArgs = {
  data: StickyInput;
};


export type MutationCreateTimeZoneArgs = {
  data: TimeZoneInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUserProfileArgs = {
  data: UserProfileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBadgeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomLinksCustomLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomLinksTempuriArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDayArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEzformsRecipientArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEzformsSubmissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRev1211RoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSprintArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSprintDayArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStickyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTimeZoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserProfileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateBadgeArgs = {
  data: BadgeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCustomLinksCustomLinkArgs = {
  data: CustomLinksCustomLinkInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCustomLinksTempuriArgs = {
  data: CustomLinksTempuriInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDayArgs = {
  data: DayInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateModuleArgs = {
  data: ModuleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRev1211RoleArgs = {
  data: Rev1211RoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSprintArgs = {
  data: SprintInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSprintDayArgs = {
  data: SprintDayInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStickyArgs = {
  data: StickyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTimeZoneArgs = {
  data: TimeZoneInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserProfileArgs = {
  data: UserProfileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  badge?: Maybe<BadgeEntityResponse>;
  badges?: Maybe<BadgeEntityResponseCollection>;
  customLinksCustomLink?: Maybe<CustomLinksCustomLinkEntityResponse>;
  customLinksCustomLinks?: Maybe<CustomLinksCustomLinkEntityResponseCollection>;
  customLinksTempuri?: Maybe<CustomLinksTempuriEntityResponseCollection>;
  day?: Maybe<DayEntityResponse>;
  days?: Maybe<DayEntityResponseCollection>;
  ezformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  ezformsRecipients?: Maybe<EzformsRecipientEntityResponseCollection>;
  ezformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  ezformsSubmissions?: Maybe<EzformsSubmissionEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  module?: Maybe<ModuleEntityResponse>;
  modules?: Maybe<ModuleEntityResponseCollection>;
  rev1211Role?: Maybe<Rev1211RoleEntityResponse>;
  rev1211Roles?: Maybe<Rev1211RoleEntityResponseCollection>;
  sprint?: Maybe<SprintEntityResponse>;
  sprintDay?: Maybe<SprintDayEntityResponse>;
  sprintDays?: Maybe<SprintDayEntityResponseCollection>;
  sprints?: Maybe<SprintEntityResponseCollection>;
  stickies?: Maybe<StickyEntityResponseCollection>;
  sticky?: Maybe<StickyEntityResponse>;
  timeZone?: Maybe<TimeZoneEntityResponse>;
  timeZones?: Maybe<TimeZoneEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  userProfile?: Maybe<UserProfileEntityResponse>;
  userProfiles?: Maybe<UserProfileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBadgeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBadgesArgs = {
  filters?: InputMaybe<BadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustomLinksCustomLinkArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomLinksCustomLinksArgs = {
  filters?: InputMaybe<CustomLinksCustomLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCustomLinksTempuriArgs = {
  filters?: InputMaybe<CustomLinksTempuriFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDayArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDaysArgs = {
  filters?: InputMaybe<DayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEzformsRecipientArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEzformsRecipientsArgs = {
  filters?: InputMaybe<EzformsRecipientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEzformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEzformsSubmissionsArgs = {
  filters?: InputMaybe<EzformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModulesArgs = {
  filters?: InputMaybe<ModuleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRev1211RoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRev1211RolesArgs = {
  filters?: InputMaybe<Rev1211RoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySprintArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySprintDayArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySprintDaysArgs = {
  filters?: InputMaybe<SprintDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySprintsArgs = {
  filters?: InputMaybe<SprintFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStickiesArgs = {
  filters?: InputMaybe<StickyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStickyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTimeZoneArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTimeZonesArgs = {
  filters?: InputMaybe<TimeZoneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserProfileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUserProfilesArgs = {
  filters?: InputMaybe<UserProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Rev1211Role = {
  __typename?: 'Rev1211Role';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role: Enum_Rev1211Role_Role;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Rev1211RoleEntity = {
  __typename?: 'Rev1211RoleEntity';
  attributes?: Maybe<Rev1211Role>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Rev1211RoleEntityResponse = {
  __typename?: 'Rev1211RoleEntityResponse';
  data?: Maybe<Rev1211RoleEntity>;
};

export type Rev1211RoleEntityResponseCollection = {
  __typename?: 'Rev1211RoleEntityResponseCollection';
  data: Array<Rev1211RoleEntity>;
  meta: ResponseCollectionMeta;
};

export type Rev1211RoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<Rev1211RoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<Rev1211RoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<Rev1211RoleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type Rev1211RoleInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Enum_Rev1211Role_Role>;
};

export type Rev1211RoleRelationResponseCollection = {
  __typename?: 'Rev1211RoleRelationResponseCollection';
  data: Array<Rev1211RoleEntity>;
};

export type Sprint = {
  __typename?: 'Sprint';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  facilitators?: Maybe<UserProfileRelationResponseCollection>;
  location?: Maybe<Scalars['String']['output']>;
  module?: Maybe<ModuleEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sponsors?: Maybe<UserProfileRelationResponseCollection>;
  sprint_days?: Maybe<SprintDayRelationResponseCollection>;
  sprinters?: Maybe<UserProfileRelationResponseCollection>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Sprint_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SprintFacilitatorsArgs = {
  filters?: InputMaybe<UserProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SprintSponsorsArgs = {
  filters?: InputMaybe<UserProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SprintSprint_DaysArgs = {
  filters?: InputMaybe<SprintDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SprintSprintersArgs = {
  filters?: InputMaybe<UserProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SprintDay = {
  __typename?: 'SprintDay';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  module_day?: Maybe<DayEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  start_date_time?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SprintDayEntity = {
  __typename?: 'SprintDayEntity';
  attributes?: Maybe<SprintDay>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SprintDayEntityResponse = {
  __typename?: 'SprintDayEntityResponse';
  data?: Maybe<SprintDayEntity>;
};

export type SprintDayEntityResponseCollection = {
  __typename?: 'SprintDayEntityResponseCollection';
  data: Array<SprintDayEntity>;
  meta: ResponseCollectionMeta;
};

export type SprintDayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SprintDayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  module_day?: InputMaybe<DayFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SprintDayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SprintDayFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  start_date_time?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SprintDayInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  module_day?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  start_date_time?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SprintDayRelationResponseCollection = {
  __typename?: 'SprintDayRelationResponseCollection';
  data: Array<SprintDayEntity>;
};

export type SprintEntity = {
  __typename?: 'SprintEntity';
  attributes?: Maybe<Sprint>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SprintEntityResponse = {
  __typename?: 'SprintEntityResponse';
  data?: Maybe<SprintEntity>;
};

export type SprintEntityResponseCollection = {
  __typename?: 'SprintEntityResponseCollection';
  data: Array<SprintEntity>;
  meta: ResponseCollectionMeta;
};

export type SprintFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SprintFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end_date?: InputMaybe<DateTimeFilterInput>;
  facilitators?: InputMaybe<UserProfileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  module?: InputMaybe<ModuleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SprintFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SprintFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sponsors?: InputMaybe<UserProfileFiltersInput>;
  sprint_days?: InputMaybe<SprintDayFiltersInput>;
  sprinters?: InputMaybe<UserProfileFiltersInput>;
  start_date?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SprintInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  facilitators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sprint_days?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sprinters?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Sprint_Type>;
};

export type SprintRelationResponseCollection = {
  __typename?: 'SprintRelationResponseCollection';
  data: Array<SprintEntity>;
};

export type Sticky = {
  __typename?: 'Sticky';
  completed: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  media?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type: Enum_Sticky_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StickyEntity = {
  __typename?: 'StickyEntity';
  attributes?: Maybe<Sticky>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StickyEntityResponse = {
  __typename?: 'StickyEntityResponse';
  data?: Maybe<StickyEntity>;
};

export type StickyEntityResponseCollection = {
  __typename?: 'StickyEntityResponseCollection';
  data: Array<StickyEntity>;
  meta: ResponseCollectionMeta;
};

export type StickyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StickyFiltersInput>>>;
  completed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StickyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StickyFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type StickyInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Enum_Sticky_Type>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type StickyRelationResponseCollection = {
  __typename?: 'StickyRelationResponseCollection';
  data: Array<StickyEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TimeZone = {
  __typename?: 'TimeZone';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TimeZoneEntity = {
  __typename?: 'TimeZoneEntity';
  attributes?: Maybe<TimeZone>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TimeZoneEntityResponse = {
  __typename?: 'TimeZoneEntityResponse';
  data?: Maybe<TimeZoneEntity>;
};

export type TimeZoneEntityResponseCollection = {
  __typename?: 'TimeZoneEntityResponseCollection';
  data: Array<TimeZoneEntity>;
  meta: ResponseCollectionMeta;
};

export type TimeZoneFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TimeZoneFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TimeZoneFiltersInput>;
  offset?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<TimeZoneFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TimeZoneInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  facilitated?: Maybe<SprintRelationResponseCollection>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rev_1211_roles?: Maybe<Rev1211RoleRelationResponseCollection>;
  sponsors?: Maybe<SprintRelationResponseCollection>;
  sprints?: Maybe<SprintRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type UserProfileFacilitatedArgs = {
  filters?: InputMaybe<SprintFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UserProfileRev_1211_RolesArgs = {
  filters?: InputMaybe<Rev1211RoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UserProfileSponsorsArgs = {
  filters?: InputMaybe<SprintFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UserProfileSprintsArgs = {
  filters?: InputMaybe<SprintFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserProfileEntity = {
  __typename?: 'UserProfileEntity';
  attributes?: Maybe<UserProfile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UserProfileEntityResponse = {
  __typename?: 'UserProfileEntityResponse';
  data?: Maybe<UserProfileEntity>;
};

export type UserProfileEntityResponseCollection = {
  __typename?: 'UserProfileEntityResponseCollection';
  data: Array<UserProfileEntity>;
  meta: ResponseCollectionMeta;
};

export type UserProfileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UserProfileFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  facilitated?: InputMaybe<SprintFiltersInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UserProfileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UserProfileFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rev_1211_roles?: InputMaybe<Rev1211RoleFiltersInput>;
  sponsors?: InputMaybe<SprintFiltersInput>;
  sprints?: InputMaybe<SprintFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UserProfileInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  facilitated?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rev_1211_roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sponsors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sprints?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type UserProfileRelationResponseCollection = {
  __typename?: 'UserProfileRelationResponseCollection';
  data: Array<UserProfileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_profile?: Maybe<UserProfileEntityResponse>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_profile?: InputMaybe<UserProfileFiltersInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  user_profile?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null } } };

export type UserProfilesQueryVariables = Exact<{
  input?: InputMaybe<UserProfileFiltersInput>;
}>;


export type UserProfilesQuery = { __typename?: 'Query', userProfiles?: { __typename?: 'UserProfileEntityResponseCollection', data: Array<{ __typename?: 'UserProfileEntity', id?: string | null, attributes?: { __typename?: 'UserProfile', email: string, updatedAt?: any | null, createdAt?: any | null, facilitated?: { __typename?: 'SprintRelationResponseCollection', data: Array<{ __typename?: 'SprintEntity', id?: string | null, attributes?: { __typename?: 'Sprint', title?: string | null, description?: string | null, start_date?: any | null, end_date?: any | null, module?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', title?: string | null, name?: string | null, days?: number | null, module_days?: { __typename?: 'DayRelationResponseCollection', data: Array<{ __typename?: 'DayEntity', id?: string | null, attributes?: { __typename?: 'Day', name?: string | null, description?: string | null, stickies?: { __typename?: 'StickyRelationResponseCollection', data: Array<{ __typename?: 'StickyEntity', id?: string | null, attributes?: { __typename?: 'Sticky', name?: string | null, url?: string | null, type: Enum_Sticky_Type, completed: boolean, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null } | null } | null } | null } | null }> } | null, sprints?: { __typename?: 'SprintRelationResponseCollection', data: Array<{ __typename?: 'SprintEntity', id?: string | null, attributes?: { __typename?: 'Sprint', title?: string | null, description?: string | null, start_date?: any | null, end_date?: any | null, module?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', title?: string | null, name?: string | null, days?: number | null, module_days?: { __typename?: 'DayRelationResponseCollection', data: Array<{ __typename?: 'DayEntity', id?: string | null, attributes?: { __typename?: 'Day', name?: string | null, description?: string | null, stickies?: { __typename?: 'StickyRelationResponseCollection', data: Array<{ __typename?: 'StickyEntity', id?: string | null, attributes?: { __typename?: 'Sticky', name?: string | null, url?: string | null, type: Enum_Sticky_Type, completed: boolean, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null } | null } | null } | null } | null }> } | null, sponsors?: { __typename?: 'SprintRelationResponseCollection', data: Array<{ __typename?: 'SprintEntity', id?: string | null, attributes?: { __typename?: 'Sprint', title?: string | null, description?: string | null, start_date?: any | null, end_date?: any | null, module?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', title?: string | null, name?: string | null, days?: number | null, module_days?: { __typename?: 'DayRelationResponseCollection', data: Array<{ __typename?: 'DayEntity', id?: string | null, attributes?: { __typename?: 'Day', name?: string | null, description?: string | null, stickies?: { __typename?: 'StickyRelationResponseCollection', data: Array<{ __typename?: 'StickyEntity', id?: string | null, attributes?: { __typename?: 'Sticky', name?: string | null, url?: string | null, type: Enum_Sticky_Type, completed: boolean, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null } | null } | null } | null } | null }> } | null, users_permissions_user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, provider?: string | null, username: string } | null } | null } | null } | null }> } | null };

export type CreateModuleMutationVariables = Exact<{
  input: ModuleInput;
}>;


export type CreateModuleMutation = { __typename?: 'Mutation', createModule?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', description?: string | null, days?: number | null, title?: string | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null } | null } | null } | null };

export const LoginDocument = gql`
    mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      email
      confirmed
      blocked
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    // @ts-ignore
    document = LoginDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserProfilesDocument = gql`
    query UserProfiles($input: UserProfileFiltersInput) {
  userProfiles(filters: $input) {
    data {
      id
      attributes {
        email
        updatedAt
        createdAt
        facilitated {
          data {
            id
            attributes {
              title
              description
              start_date
              end_date
              module {
                data {
                  id
                  attributes {
                    title
                    name
                    days
                    module_days {
                      data {
                        id
                        attributes {
                          name
                          description
                          stickies {
                            data {
                              id
                              attributes {
                                name
                                url
                                media {
                                  data {
                                    id
                                    attributes {
                                      name
                                      alternativeText
                                    }
                                  }
                                }
                                type
                                completed
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        sprints {
          data {
            id
            attributes {
              title
              description
              start_date
              end_date
              module {
                data {
                  id
                  attributes {
                    title
                    name
                    days
                    module_days {
                      data {
                        id
                        attributes {
                          name
                          description
                          stickies {
                            data {
                              id
                              attributes {
                                name
                                url
                                media {
                                  data {
                                    id
                                    attributes {
                                      name
                                      alternativeText
                                    }
                                  }
                                }
                                type
                                completed
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        sponsors {
          data {
            id
            attributes {
              title
              description
              start_date
              end_date
              module {
                data {
                  id
                  attributes {
                    title
                    name
                    days
                    module_days {
                      data {
                        id
                        attributes {
                          name
                          description
                          stickies {
                            data {
                              id
                              attributes {
                                name
                                url
                                media {
                                  data {
                                    id
                                    attributes {
                                      name
                                      alternativeText
                                    }
                                  }
                                }
                                type
                                completed
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        users_permissions_user {
          data {
            id
            attributes {
              email
              provider
              username
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserProfilesGQL extends Apollo.Query<UserProfilesQuery, UserProfilesQueryVariables> {
    // @ts-ignore
    document = UserProfilesDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateModuleDocument = gql`
    mutation CreateModule($input: ModuleInput!) {
  createModule(data: $input) {
    data {
      id
      attributes {
        description
        days
        title
        name
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateModuleGQL extends Apollo.Mutation<CreateModuleMutation, CreateModuleMutationVariables> {
    // @ts-ignore
    document = CreateModuleDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
