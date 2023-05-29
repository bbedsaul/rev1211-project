import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Categories = {
  __typename?: 'Categories';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriesAggregator = {
  __typename?: 'CategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  values?: Maybe<Array<Maybe<Categories>>>;
  groupBy?: Maybe<CategoriesGroupBy>;
  aggregate?: Maybe<CategoriesAggregator>;
};

export type CategoriesConnectionColor = {
  __typename?: 'CategoriesConnectionColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesConnectionCreatedAt = {
  __typename?: 'CategoriesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesConnectionId = {
  __typename?: 'CategoriesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesConnectionName = {
  __typename?: 'CategoriesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesConnectionPublished_At = {
  __typename?: 'CategoriesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesConnectionUpdatedAt = {
  __typename?: 'CategoriesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesConnection_Id = {
  __typename?: 'CategoriesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoriesConnection>;
};

export type CategoriesGroupBy = {
  __typename?: 'CategoriesGroupBy';
  id?: Maybe<Array<Maybe<CategoriesConnectionId>>>;
  _id?: Maybe<Array<Maybe<CategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CategoriesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CategoriesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<CategoriesConnectionName>>>;
  color?: Maybe<Array<Maybe<CategoriesConnectionColor>>>;
  published_at?: Maybe<Array<Maybe<CategoriesConnectionPublished_At>>>;
};

export type CategoryInput = {
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type DefaultStickies = {
  __typename?: 'DefaultStickies';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  category?: Maybe<Categories>;
  method?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type DefaultStickiesAggregator = {
  __typename?: 'DefaultStickiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<DefaultStickiesAggregatorSum>;
  avg?: Maybe<DefaultStickiesAggregatorAvg>;
  min?: Maybe<DefaultStickiesAggregatorMin>;
  max?: Maybe<DefaultStickiesAggregatorMax>;
};

export type DefaultStickiesAggregatorAvg = {
  __typename?: 'DefaultStickiesAggregatorAvg';
  points?: Maybe<Scalars['Float']>;
};

export type DefaultStickiesAggregatorMax = {
  __typename?: 'DefaultStickiesAggregatorMax';
  points?: Maybe<Scalars['Float']>;
};

export type DefaultStickiesAggregatorMin = {
  __typename?: 'DefaultStickiesAggregatorMin';
  points?: Maybe<Scalars['Float']>;
};

export type DefaultStickiesAggregatorSum = {
  __typename?: 'DefaultStickiesAggregatorSum';
  points?: Maybe<Scalars['Float']>;
};

export type DefaultStickiesConnection = {
  __typename?: 'DefaultStickiesConnection';
  values?: Maybe<Array<Maybe<DefaultStickies>>>;
  groupBy?: Maybe<DefaultStickiesGroupBy>;
  aggregate?: Maybe<DefaultStickiesAggregator>;
};

export type DefaultStickiesConnectionCategory = {
  __typename?: 'DefaultStickiesConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionCreatedAt = {
  __typename?: 'DefaultStickiesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionDescription = {
  __typename?: 'DefaultStickiesConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionIcon = {
  __typename?: 'DefaultStickiesConnectionIcon';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionId = {
  __typename?: 'DefaultStickiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionMethod = {
  __typename?: 'DefaultStickiesConnectionMethod';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionName = {
  __typename?: 'DefaultStickiesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionPoints = {
  __typename?: 'DefaultStickiesConnectionPoints';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionPublished_At = {
  __typename?: 'DefaultStickiesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnectionUpdatedAt = {
  __typename?: 'DefaultStickiesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesConnection_Id = {
  __typename?: 'DefaultStickiesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DefaultStickiesConnection>;
};

export type DefaultStickiesGroupBy = {
  __typename?: 'DefaultStickiesGroupBy';
  id?: Maybe<Array<Maybe<DefaultStickiesConnectionId>>>;
  _id?: Maybe<Array<Maybe<DefaultStickiesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<DefaultStickiesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<DefaultStickiesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<DefaultStickiesConnectionName>>>;
  description?: Maybe<Array<Maybe<DefaultStickiesConnectionDescription>>>;
  points?: Maybe<Array<Maybe<DefaultStickiesConnectionPoints>>>;
  category?: Maybe<Array<Maybe<DefaultStickiesConnectionCategory>>>;
  method?: Maybe<Array<Maybe<DefaultStickiesConnectionMethod>>>;
  icon?: Maybe<Array<Maybe<DefaultStickiesConnectionIcon>>>;
  published_at?: Maybe<Array<Maybe<DefaultStickiesConnectionPublished_At>>>;
};

export type DefaultStickyInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  method?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Sprintactivitylog_Activity {
  StartSprint = 'startSprint',
  EndSprint = 'endSprint',
  StartMeeting = 'startMeeting'
}

export enum Enum_Stickies_Status {
  Todo = 'todo',
  Doing = 'doing',
  Completed = 'completed'
}

export enum Enum_Stickyactivitylog_Activity {
  TodoToDoing = 'todoToDoing',
  TodoToCompleted = 'todoToCompleted',
  DoingToTodo = 'doingToTodo',
  DoingToCompleted = 'doingToCompleted',
  CompletedToTodo = 'completedToTodo',
  CompletedToDoing = 'completedToDoing',
  TodoToTodo = 'todoToTodo',
  DoingToDoing = 'doingToDoing',
  CompletedToCompleted = 'completedToCompleted',
  AddedTodo = 'addedTodo'
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Categories | CategoriesConnection | CategoriesAggregator | CategoriesGroupBy | CategoriesConnectionId | CategoriesConnection_Id | CategoriesConnectionCreatedAt | CategoriesConnectionUpdatedAt | CategoriesConnectionName | CategoriesConnectionColor | CategoriesConnectionPublished_At | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | DefaultStickies | DefaultStickiesConnection | DefaultStickiesAggregator | DefaultStickiesAggregatorSum | DefaultStickiesAggregatorAvg | DefaultStickiesAggregatorMin | DefaultStickiesAggregatorMax | DefaultStickiesGroupBy | DefaultStickiesConnectionId | DefaultStickiesConnection_Id | DefaultStickiesConnectionCreatedAt | DefaultStickiesConnectionUpdatedAt | DefaultStickiesConnectionName | DefaultStickiesConnectionDescription | DefaultStickiesConnectionPoints | DefaultStickiesConnectionCategory | DefaultStickiesConnectionMethod | DefaultStickiesConnectionIcon | DefaultStickiesConnectionPublished_At | CreateDefaultStickyPayload | UpdateDefaultStickyPayload | DeleteDefaultStickyPayload | NextStickies | NextStickiesConnection | NextStickiesAggregator | NextStickiesGroupBy | NextStickiesConnectionId | NextStickiesConnection_Id | NextStickiesConnectionCreatedAt | NextStickiesConnectionUpdatedAt | NextStickiesConnectionDefault_Sticky | NextStickiesConnectionSprint | NextStickiesConnectionSprinter | NextStickiesConnectionPublished_At | CreateNextStickyPayload | UpdateNextStickyPayload | DeleteNextStickyPayload | SprintActivityLog | SprintActivityLogConnection | SprintActivityLogAggregator | SprintActivityLogAggregatorSum | SprintActivityLogAggregatorAvg | SprintActivityLogAggregatorMin | SprintActivityLogAggregatorMax | SprintActivityLogGroupBy | SprintActivityLogConnectionId | SprintActivityLogConnection_Id | SprintActivityLogConnectionCreatedAt | SprintActivityLogConnectionUpdatedAt | SprintActivityLogConnectionSprint | SprintActivityLogConnectionActivity | SprintActivityLogConnectionDetail | SprintActivityLogConnectionSprintno | SprintActivityLogConnectionPublished_At | CreateSprintActivityLogPayload | UpdateSprintActivityLogPayload | DeleteSprintActivityLogPayload | Sprinters | SprintersConnection | SprintersAggregator | SprintersGroupBy | SprintersConnectionId | SprintersConnection_Id | SprintersConnectionCreatedAt | SprintersConnectionUpdatedAt | SprintersConnectionLastname | SprintersConnectionFirstname | SprintersConnectionDisplayname | SprintersConnectionUser | SprintersConnectionFacilitator | SprintersConnectionPublished_At | CreateSprinterPayload | UpdateSprinterPayload | DeleteSprinterPayload | Sprints | SprintsConnection | SprintsAggregator | SprintsGroupBy | SprintsConnectionId | SprintsConnection_Id | SprintsConnectionCreatedAt | SprintsConnectionUpdatedAt | SprintsConnectionName | SprintsConnectionDescription | SprintsConnectionPublished_At | CreateSprintPayload | UpdateSprintPayload | DeleteSprintPayload | Stickies | StickiesConnection | StickiesAggregator | StickiesAggregatorSum | StickiesAggregatorAvg | StickiesAggregatorMin | StickiesAggregatorMax | StickiesGroupBy | StickiesConnectionId | StickiesConnection_Id | StickiesConnectionCreatedAt | StickiesConnectionUpdatedAt | StickiesConnectionName | StickiesConnectionSprinter | StickiesConnectionDescription | StickiesConnectionPoints | StickiesConnectionStatus | StickiesConnectionOrder | StickiesConnectionIcon | StickiesConnectionMethod | StickiesConnectionCategory | StickiesConnectionSprint | StickiesConnectionPublished_At | CreateStickyPayload | UpdateStickyPayload | DeleteStickyPayload | StickyActivityLog | StickyActivityLogConnection | StickyActivityLogAggregator | StickyActivityLogGroupBy | StickyActivityLogConnectionId | StickyActivityLogConnection_Id | StickyActivityLogConnectionCreatedAt | StickyActivityLogConnectionUpdatedAt | StickyActivityLogConnectionSticky | StickyActivityLogConnectionActivity | StickyActivityLogConnectionDetails | StickyActivityLogConnectionPublished_At | CreateStickyActivityLogPayload | UpdateStickyActivityLogPayload | DeleteStickyActivityLogPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionSprinter | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  createDefaultSticky?: Maybe<CreateDefaultStickyPayload>;
  updateDefaultSticky?: Maybe<UpdateDefaultStickyPayload>;
  deleteDefaultSticky?: Maybe<DeleteDefaultStickyPayload>;
  createNextSticky?: Maybe<CreateNextStickyPayload>;
  updateNextSticky?: Maybe<UpdateNextStickyPayload>;
  deleteNextSticky?: Maybe<DeleteNextStickyPayload>;
  createSprintActivityLog?: Maybe<CreateSprintActivityLogPayload>;
  updateSprintActivityLog?: Maybe<UpdateSprintActivityLogPayload>;
  deleteSprintActivityLog?: Maybe<DeleteSprintActivityLogPayload>;
  createSprinter?: Maybe<CreateSprinterPayload>;
  updateSprinter?: Maybe<UpdateSprinterPayload>;
  deleteSprinter?: Maybe<DeleteSprinterPayload>;
  createSprint?: Maybe<CreateSprintPayload>;
  updateSprint?: Maybe<UpdateSprintPayload>;
  deleteSprint?: Maybe<DeleteSprintPayload>;
  createSticky?: Maybe<CreateStickyPayload>;
  updateSticky?: Maybe<UpdateStickyPayload>;
  deleteSticky?: Maybe<DeleteStickyPayload>;
  createStickyActivityLog?: Maybe<CreateStickyActivityLogPayload>;
  updateStickyActivityLog?: Maybe<UpdateStickyActivityLogPayload>;
  deleteStickyActivityLog?: Maybe<DeleteStickyActivityLogPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationCreateDefaultStickyArgs = {
  input?: Maybe<CreateDefaultStickyInput>;
};


export type MutationUpdateDefaultStickyArgs = {
  input?: Maybe<UpdateDefaultStickyInput>;
};


export type MutationDeleteDefaultStickyArgs = {
  input?: Maybe<DeleteDefaultStickyInput>;
};


export type MutationCreateNextStickyArgs = {
  input?: Maybe<CreateNextStickyInput>;
};


export type MutationUpdateNextStickyArgs = {
  input?: Maybe<UpdateNextStickyInput>;
};


export type MutationDeleteNextStickyArgs = {
  input?: Maybe<DeleteNextStickyInput>;
};


export type MutationCreateSprintActivityLogArgs = {
  input?: Maybe<CreateSprintActivityLogInput>;
};


export type MutationUpdateSprintActivityLogArgs = {
  input?: Maybe<UpdateSprintActivityLogInput>;
};


export type MutationDeleteSprintActivityLogArgs = {
  input?: Maybe<DeleteSprintActivityLogInput>;
};


export type MutationCreateSprinterArgs = {
  input?: Maybe<CreateSprinterInput>;
};


export type MutationUpdateSprinterArgs = {
  input?: Maybe<UpdateSprinterInput>;
};


export type MutationDeleteSprinterArgs = {
  input?: Maybe<DeleteSprinterInput>;
};


export type MutationCreateSprintArgs = {
  input?: Maybe<CreateSprintInput>;
};


export type MutationUpdateSprintArgs = {
  input?: Maybe<UpdateSprintInput>;
};


export type MutationDeleteSprintArgs = {
  input?: Maybe<DeleteSprintInput>;
};


export type MutationCreateStickyArgs = {
  input?: Maybe<CreateStickyInput>;
};


export type MutationUpdateStickyArgs = {
  input?: Maybe<UpdateStickyInput>;
};


export type MutationDeleteStickyArgs = {
  input?: Maybe<DeleteStickyInput>;
};


export type MutationCreateStickyActivityLogArgs = {
  input?: Maybe<CreateStickyActivityLogInput>;
};


export type MutationUpdateStickyActivityLogArgs = {
  input?: Maybe<UpdateStickyActivityLogInput>;
};


export type MutationDeleteStickyActivityLogArgs = {
  input?: Maybe<DeleteStickyActivityLogInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type NextStickies = {
  __typename?: 'NextStickies';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  default_sticky?: Maybe<DefaultStickies>;
  sprint?: Maybe<Sprints>;
  sprinter?: Maybe<Sprinters>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type NextStickiesAggregator = {
  __typename?: 'NextStickiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NextStickiesConnection = {
  __typename?: 'NextStickiesConnection';
  values?: Maybe<Array<Maybe<NextStickies>>>;
  groupBy?: Maybe<NextStickiesGroupBy>;
  aggregate?: Maybe<NextStickiesAggregator>;
};

export type NextStickiesConnectionCreatedAt = {
  __typename?: 'NextStickiesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnectionDefault_Sticky = {
  __typename?: 'NextStickiesConnectionDefault_sticky';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnectionId = {
  __typename?: 'NextStickiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnectionPublished_At = {
  __typename?: 'NextStickiesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnectionSprint = {
  __typename?: 'NextStickiesConnectionSprint';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnectionSprinter = {
  __typename?: 'NextStickiesConnectionSprinter';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnectionUpdatedAt = {
  __typename?: 'NextStickiesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesConnection_Id = {
  __typename?: 'NextStickiesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NextStickiesConnection>;
};

export type NextStickiesGroupBy = {
  __typename?: 'NextStickiesGroupBy';
  id?: Maybe<Array<Maybe<NextStickiesConnectionId>>>;
  _id?: Maybe<Array<Maybe<NextStickiesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<NextStickiesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<NextStickiesConnectionUpdatedAt>>>;
  default_sticky?: Maybe<Array<Maybe<NextStickiesConnectionDefault_Sticky>>>;
  sprint?: Maybe<Array<Maybe<NextStickiesConnectionSprint>>>;
  sprinter?: Maybe<Array<Maybe<NextStickiesConnectionSprinter>>>;
  published_at?: Maybe<Array<Maybe<NextStickiesConnectionPublished_At>>>;
};

export type NextStickyInput = {
  default_sticky?: Maybe<Scalars['ID']>;
  sprint?: Maybe<Scalars['ID']>;
  sprinter?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Categories>;
  categories?: Maybe<Array<Maybe<Categories>>>;
  categoriesConnection?: Maybe<CategoriesConnection>;
  defaultSticky?: Maybe<DefaultStickies>;
  defaultStickies?: Maybe<Array<Maybe<DefaultStickies>>>;
  defaultStickiesConnection?: Maybe<DefaultStickiesConnection>;
  nextSticky?: Maybe<NextStickies>;
  nextStickies?: Maybe<Array<Maybe<NextStickies>>>;
  nextStickiesConnection?: Maybe<NextStickiesConnection>;
  sprintActivityLog?: Maybe<SprintActivityLog>;
  sprintActivityLogs?: Maybe<Array<Maybe<SprintActivityLog>>>;
  sprintActivityLogsConnection?: Maybe<SprintActivityLogConnection>;
  sprinter?: Maybe<Sprinters>;
  sprinters?: Maybe<Array<Maybe<Sprinters>>>;
  sprintersConnection?: Maybe<SprintersConnection>;
  sprint?: Maybe<Sprints>;
  sprints?: Maybe<Array<Maybe<Sprints>>>;
  sprintsConnection?: Maybe<SprintsConnection>;
  sticky?: Maybe<Stickies>;
  stickies?: Maybe<Array<Maybe<Stickies>>>;
  stickiesConnection?: Maybe<StickiesConnection>;
  stickyActivityLog?: Maybe<StickyActivityLog>;
  stickyActivityLogs?: Maybe<Array<Maybe<StickyActivityLog>>>;
  stickyActivityLogsConnection?: Maybe<StickyActivityLogConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDefaultStickyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDefaultStickiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDefaultStickiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryNextStickyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryNextStickiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryNextStickiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySprintActivityLogArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySprintActivityLogsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySprintActivityLogsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySprinterArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySprintersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySprintersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySprintArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySprintsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySprintsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStickyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryStickiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryStickiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStickyActivityLogArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryStickyActivityLogsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryStickyActivityLogsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SprintActivityLog = {
  __typename?: 'SprintActivityLog';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  sprint?: Maybe<Sprints>;
  activity?: Maybe<Enum_Sprintactivitylog_Activity>;
  detail?: Maybe<Scalars['String']>;
  sprintno: Scalars['Int'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SprintActivityLogAggregator = {
  __typename?: 'SprintActivityLogAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<SprintActivityLogAggregatorSum>;
  avg?: Maybe<SprintActivityLogAggregatorAvg>;
  min?: Maybe<SprintActivityLogAggregatorMin>;
  max?: Maybe<SprintActivityLogAggregatorMax>;
};

export type SprintActivityLogAggregatorAvg = {
  __typename?: 'SprintActivityLogAggregatorAvg';
  sprintno?: Maybe<Scalars['Float']>;
};

export type SprintActivityLogAggregatorMax = {
  __typename?: 'SprintActivityLogAggregatorMax';
  sprintno?: Maybe<Scalars['Float']>;
};

export type SprintActivityLogAggregatorMin = {
  __typename?: 'SprintActivityLogAggregatorMin';
  sprintno?: Maybe<Scalars['Float']>;
};

export type SprintActivityLogAggregatorSum = {
  __typename?: 'SprintActivityLogAggregatorSum';
  sprintno?: Maybe<Scalars['Float']>;
};

export type SprintActivityLogConnection = {
  __typename?: 'SprintActivityLogConnection';
  values?: Maybe<Array<Maybe<SprintActivityLog>>>;
  groupBy?: Maybe<SprintActivityLogGroupBy>;
  aggregate?: Maybe<SprintActivityLogAggregator>;
};

export type SprintActivityLogConnectionActivity = {
  __typename?: 'SprintActivityLogConnectionActivity';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionCreatedAt = {
  __typename?: 'SprintActivityLogConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionDetail = {
  __typename?: 'SprintActivityLogConnectionDetail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionId = {
  __typename?: 'SprintActivityLogConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionPublished_At = {
  __typename?: 'SprintActivityLogConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionSprint = {
  __typename?: 'SprintActivityLogConnectionSprint';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionSprintno = {
  __typename?: 'SprintActivityLogConnectionSprintno';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnectionUpdatedAt = {
  __typename?: 'SprintActivityLogConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogConnection_Id = {
  __typename?: 'SprintActivityLogConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintActivityLogConnection>;
};

export type SprintActivityLogGroupBy = {
  __typename?: 'SprintActivityLogGroupBy';
  id?: Maybe<Array<Maybe<SprintActivityLogConnectionId>>>;
  _id?: Maybe<Array<Maybe<SprintActivityLogConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SprintActivityLogConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SprintActivityLogConnectionUpdatedAt>>>;
  sprint?: Maybe<Array<Maybe<SprintActivityLogConnectionSprint>>>;
  activity?: Maybe<Array<Maybe<SprintActivityLogConnectionActivity>>>;
  detail?: Maybe<Array<Maybe<SprintActivityLogConnectionDetail>>>;
  sprintno?: Maybe<Array<Maybe<SprintActivityLogConnectionSprintno>>>;
  published_at?: Maybe<Array<Maybe<SprintActivityLogConnectionPublished_At>>>;
};

export type SprintActivityLogInput = {
  sprint?: Maybe<Scalars['ID']>;
  activity?: Maybe<Enum_Sprintactivitylog_Activity>;
  detail?: Maybe<Scalars['String']>;
  sprintno: Scalars['Int'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SprintInput = {
  name?: Maybe<Scalars['String']>;
  sprinters?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  facilitators?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SprinterInput = {
  lastname?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  stickies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sprints?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  displayname?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  facilitator?: Maybe<Scalars['ID']>;
  next_stickies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Sprinters = {
  __typename?: 'Sprinters';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  lastname?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  displayname?: Maybe<Scalars['String']>;
  user?: Maybe<UsersPermissionsUser>;
  facilitator?: Maybe<Sprints>;
  published_at?: Maybe<Scalars['DateTime']>;
  stickies?: Maybe<Array<Maybe<Stickies>>>;
  sprints?: Maybe<Array<Maybe<Sprints>>>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
  next_stickies?: Maybe<Array<Maybe<NextStickies>>>;
};


export type SprintersStickiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type SprintersSprintsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type SprintersImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type SprintersNext_StickiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SprintersAggregator = {
  __typename?: 'SprintersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SprintersConnection = {
  __typename?: 'SprintersConnection';
  values?: Maybe<Array<Maybe<Sprinters>>>;
  groupBy?: Maybe<SprintersGroupBy>;
  aggregate?: Maybe<SprintersAggregator>;
};

export type SprintersConnectionCreatedAt = {
  __typename?: 'SprintersConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionDisplayname = {
  __typename?: 'SprintersConnectionDisplayname';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionFacilitator = {
  __typename?: 'SprintersConnectionFacilitator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionFirstname = {
  __typename?: 'SprintersConnectionFirstname';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionId = {
  __typename?: 'SprintersConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionLastname = {
  __typename?: 'SprintersConnectionLastname';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionPublished_At = {
  __typename?: 'SprintersConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionUpdatedAt = {
  __typename?: 'SprintersConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnectionUser = {
  __typename?: 'SprintersConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersConnection_Id = {
  __typename?: 'SprintersConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintersConnection>;
};

export type SprintersGroupBy = {
  __typename?: 'SprintersGroupBy';
  id?: Maybe<Array<Maybe<SprintersConnectionId>>>;
  _id?: Maybe<Array<Maybe<SprintersConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SprintersConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SprintersConnectionUpdatedAt>>>;
  lastname?: Maybe<Array<Maybe<SprintersConnectionLastname>>>;
  firstname?: Maybe<Array<Maybe<SprintersConnectionFirstname>>>;
  displayname?: Maybe<Array<Maybe<SprintersConnectionDisplayname>>>;
  user?: Maybe<Array<Maybe<SprintersConnectionUser>>>;
  facilitator?: Maybe<Array<Maybe<SprintersConnectionFacilitator>>>;
  published_at?: Maybe<Array<Maybe<SprintersConnectionPublished_At>>>;
};

export type Sprints = {
  __typename?: 'Sprints';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  sprinters?: Maybe<Array<Maybe<Sprinters>>>;
  facilitators?: Maybe<Array<Maybe<Sprinters>>>;
};


export type SprintsSprintersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type SprintsFacilitatorsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SprintsAggregator = {
  __typename?: 'SprintsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SprintsConnection = {
  __typename?: 'SprintsConnection';
  values?: Maybe<Array<Maybe<Sprints>>>;
  groupBy?: Maybe<SprintsGroupBy>;
  aggregate?: Maybe<SprintsAggregator>;
};

export type SprintsConnectionCreatedAt = {
  __typename?: 'SprintsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsConnectionDescription = {
  __typename?: 'SprintsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsConnectionId = {
  __typename?: 'SprintsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsConnectionName = {
  __typename?: 'SprintsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsConnectionPublished_At = {
  __typename?: 'SprintsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsConnectionUpdatedAt = {
  __typename?: 'SprintsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsConnection_Id = {
  __typename?: 'SprintsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SprintsConnection>;
};

export type SprintsGroupBy = {
  __typename?: 'SprintsGroupBy';
  id?: Maybe<Array<Maybe<SprintsConnectionId>>>;
  _id?: Maybe<Array<Maybe<SprintsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SprintsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SprintsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<SprintsConnectionName>>>;
  description?: Maybe<Array<Maybe<SprintsConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<SprintsConnectionPublished_At>>>;
};

export type Stickies = {
  __typename?: 'Stickies';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  sprinter?: Maybe<Sprinters>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Stickies_Status>;
  order?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  category?: Maybe<Categories>;
  sprint?: Maybe<Sprints>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StickiesAggregator = {
  __typename?: 'StickiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<StickiesAggregatorSum>;
  avg?: Maybe<StickiesAggregatorAvg>;
  min?: Maybe<StickiesAggregatorMin>;
  max?: Maybe<StickiesAggregatorMax>;
};

export type StickiesAggregatorAvg = {
  __typename?: 'StickiesAggregatorAvg';
  points?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type StickiesAggregatorMax = {
  __typename?: 'StickiesAggregatorMax';
  points?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type StickiesAggregatorMin = {
  __typename?: 'StickiesAggregatorMin';
  points?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type StickiesAggregatorSum = {
  __typename?: 'StickiesAggregatorSum';
  points?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type StickiesConnection = {
  __typename?: 'StickiesConnection';
  values?: Maybe<Array<Maybe<Stickies>>>;
  groupBy?: Maybe<StickiesGroupBy>;
  aggregate?: Maybe<StickiesAggregator>;
};

export type StickiesConnectionCategory = {
  __typename?: 'StickiesConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionCreatedAt = {
  __typename?: 'StickiesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionDescription = {
  __typename?: 'StickiesConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionIcon = {
  __typename?: 'StickiesConnectionIcon';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionId = {
  __typename?: 'StickiesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionMethod = {
  __typename?: 'StickiesConnectionMethod';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionName = {
  __typename?: 'StickiesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionOrder = {
  __typename?: 'StickiesConnectionOrder';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionPoints = {
  __typename?: 'StickiesConnectionPoints';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionPublished_At = {
  __typename?: 'StickiesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionSprint = {
  __typename?: 'StickiesConnectionSprint';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionSprinter = {
  __typename?: 'StickiesConnectionSprinter';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionStatus = {
  __typename?: 'StickiesConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnectionUpdatedAt = {
  __typename?: 'StickiesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesConnection_Id = {
  __typename?: 'StickiesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickiesConnection>;
};

export type StickiesGroupBy = {
  __typename?: 'StickiesGroupBy';
  id?: Maybe<Array<Maybe<StickiesConnectionId>>>;
  _id?: Maybe<Array<Maybe<StickiesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<StickiesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<StickiesConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<StickiesConnectionName>>>;
  sprinter?: Maybe<Array<Maybe<StickiesConnectionSprinter>>>;
  description?: Maybe<Array<Maybe<StickiesConnectionDescription>>>;
  points?: Maybe<Array<Maybe<StickiesConnectionPoints>>>;
  status?: Maybe<Array<Maybe<StickiesConnectionStatus>>>;
  order?: Maybe<Array<Maybe<StickiesConnectionOrder>>>;
  icon?: Maybe<Array<Maybe<StickiesConnectionIcon>>>;
  method?: Maybe<Array<Maybe<StickiesConnectionMethod>>>;
  category?: Maybe<Array<Maybe<StickiesConnectionCategory>>>;
  sprint?: Maybe<Array<Maybe<StickiesConnectionSprint>>>;
  published_at?: Maybe<Array<Maybe<StickiesConnectionPublished_At>>>;
};

export type StickyActivityLog = {
  __typename?: 'StickyActivityLog';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  sticky?: Maybe<Stickies>;
  activity?: Maybe<Enum_Stickyactivitylog_Activity>;
  details?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StickyActivityLogAggregator = {
  __typename?: 'StickyActivityLogAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StickyActivityLogConnection = {
  __typename?: 'StickyActivityLogConnection';
  values?: Maybe<Array<Maybe<StickyActivityLog>>>;
  groupBy?: Maybe<StickyActivityLogGroupBy>;
  aggregate?: Maybe<StickyActivityLogAggregator>;
};

export type StickyActivityLogConnectionActivity = {
  __typename?: 'StickyActivityLogConnectionActivity';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnectionCreatedAt = {
  __typename?: 'StickyActivityLogConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnectionDetails = {
  __typename?: 'StickyActivityLogConnectionDetails';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnectionId = {
  __typename?: 'StickyActivityLogConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnectionPublished_At = {
  __typename?: 'StickyActivityLogConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnectionSticky = {
  __typename?: 'StickyActivityLogConnectionSticky';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnectionUpdatedAt = {
  __typename?: 'StickyActivityLogConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogConnection_Id = {
  __typename?: 'StickyActivityLogConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StickyActivityLogConnection>;
};

export type StickyActivityLogGroupBy = {
  __typename?: 'StickyActivityLogGroupBy';
  id?: Maybe<Array<Maybe<StickyActivityLogConnectionId>>>;
  _id?: Maybe<Array<Maybe<StickyActivityLogConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<StickyActivityLogConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<StickyActivityLogConnectionUpdatedAt>>>;
  sticky?: Maybe<Array<Maybe<StickyActivityLogConnectionSticky>>>;
  activity?: Maybe<Array<Maybe<StickyActivityLogConnectionActivity>>>;
  details?: Maybe<Array<Maybe<StickyActivityLogConnectionDetails>>>;
  published_at?: Maybe<Array<Maybe<StickyActivityLogConnectionPublished_At>>>;
};

export type StickyActivityLogInput = {
  sticky?: Maybe<Scalars['ID']>;
  activity?: Maybe<Enum_Stickyactivitylog_Activity>;
  details?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StickyInput = {
  name?: Maybe<Scalars['String']>;
  sprinter?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Stickies_Status>;
  order?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['ID']>;
  sprint?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  sprinter?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  sprinter?: Maybe<Sprinters>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionSprinter = {
  __typename?: 'UsersPermissionsUserConnectionSprinter';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  sprinter?: Maybe<Array<Maybe<UsersPermissionsUserConnectionSprinter>>>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Categories>;
};

export type CreateDefaultStickyInput = {
  data?: Maybe<DefaultStickyInput>;
};

export type CreateDefaultStickyPayload = {
  __typename?: 'createDefaultStickyPayload';
  defaultSticky?: Maybe<DefaultStickies>;
};

export type CreateNextStickyInput = {
  data?: Maybe<NextStickyInput>;
};

export type CreateNextStickyPayload = {
  __typename?: 'createNextStickyPayload';
  nextSticky?: Maybe<NextStickies>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSprintActivityLogInput = {
  data?: Maybe<SprintActivityLogInput>;
};

export type CreateSprintActivityLogPayload = {
  __typename?: 'createSprintActivityLogPayload';
  sprintActivityLog?: Maybe<SprintActivityLog>;
};

export type CreateSprintInput = {
  data?: Maybe<SprintInput>;
};

export type CreateSprintPayload = {
  __typename?: 'createSprintPayload';
  sprint?: Maybe<Sprints>;
};

export type CreateSprinterInput = {
  data?: Maybe<SprinterInput>;
};

export type CreateSprinterPayload = {
  __typename?: 'createSprinterPayload';
  sprinter?: Maybe<Sprinters>;
};

export type CreateStickyActivityLogInput = {
  data?: Maybe<StickyActivityLogInput>;
};

export type CreateStickyActivityLogPayload = {
  __typename?: 'createStickyActivityLogPayload';
  stickyActivityLog?: Maybe<StickyActivityLog>;
};

export type CreateStickyInput = {
  data?: Maybe<StickyInput>;
};

export type CreateStickyPayload = {
  __typename?: 'createStickyPayload';
  sticky?: Maybe<Stickies>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Categories>;
};

export type DeleteDefaultStickyInput = {
  where?: Maybe<InputId>;
};

export type DeleteDefaultStickyPayload = {
  __typename?: 'deleteDefaultStickyPayload';
  defaultSticky?: Maybe<DefaultStickies>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteNextStickyInput = {
  where?: Maybe<InputId>;
};

export type DeleteNextStickyPayload = {
  __typename?: 'deleteNextStickyPayload';
  nextSticky?: Maybe<NextStickies>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSprintActivityLogInput = {
  where?: Maybe<InputId>;
};

export type DeleteSprintActivityLogPayload = {
  __typename?: 'deleteSprintActivityLogPayload';
  sprintActivityLog?: Maybe<SprintActivityLog>;
};

export type DeleteSprintInput = {
  where?: Maybe<InputId>;
};

export type DeleteSprintPayload = {
  __typename?: 'deleteSprintPayload';
  sprint?: Maybe<Sprints>;
};

export type DeleteSprinterInput = {
  where?: Maybe<InputId>;
};

export type DeleteSprinterPayload = {
  __typename?: 'deleteSprinterPayload';
  sprinter?: Maybe<Sprinters>;
};

export type DeleteStickyActivityLogInput = {
  where?: Maybe<InputId>;
};

export type DeleteStickyActivityLogPayload = {
  __typename?: 'deleteStickyActivityLogPayload';
  stickyActivityLog?: Maybe<StickyActivityLog>;
};

export type DeleteStickyInput = {
  where?: Maybe<InputId>;
};

export type DeleteStickyPayload = {
  __typename?: 'deleteStickyPayload';
  sticky?: Maybe<Stickies>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDefaultStickyInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  method?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditNextStickyInput = {
  default_sticky?: Maybe<Scalars['ID']>;
  sprint?: Maybe<Scalars['ID']>;
  sprinter?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSprintActivityLogInput = {
  sprint?: Maybe<Scalars['ID']>;
  activity?: Maybe<Enum_Sprintactivitylog_Activity>;
  detail?: Maybe<Scalars['String']>;
  sprintno?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSprintInput = {
  name?: Maybe<Scalars['String']>;
  sprinters?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  facilitators?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSprinterInput = {
  lastname?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  stickies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sprints?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  displayname?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  facilitator?: Maybe<Scalars['ID']>;
  next_stickies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditStickyActivityLogInput = {
  sticky?: Maybe<Scalars['ID']>;
  activity?: Maybe<Enum_Stickyactivitylog_Activity>;
  details?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditStickyActivityLogInput = {
  sticky?: Maybe<Scalars['ID']>;
  activity?: Maybe<Enum_Stickyactivitylog_Activity>;
  details?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditStickyInput = {
  name?: Maybe<Scalars['String']>;
  sprinter?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Stickies_Status>;
  order?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['ID']>;
  sprint?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  sprinter?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Categories>;
};

export type UpdateDefaultStickyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDefaultStickyInput>;
};

export type UpdateDefaultStickyPayload = {
  __typename?: 'updateDefaultStickyPayload';
  defaultSticky?: Maybe<DefaultStickies>;
};

export type UpdateNextStickyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditNextStickyInput>;
};

export type UpdateNextStickyPayload = {
  __typename?: 'updateNextStickyPayload';
  nextSticky?: Maybe<NextStickies>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSprintActivityLogInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSprintActivityLogInput>;
};

export type UpdateSprintActivityLogPayload = {
  __typename?: 'updateSprintActivityLogPayload';
  sprintActivityLog?: Maybe<SprintActivityLog>;
};

export type UpdateSprintInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSprintInput>;
};

export type UpdateSprintPayload = {
  __typename?: 'updateSprintPayload';
  sprint?: Maybe<Sprints>;
};

export type UpdateSprinterInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSprinterInput>;
};

export type UpdateSprinterPayload = {
  __typename?: 'updateSprinterPayload';
  sprinter?: Maybe<Sprinters>;
};

export type UpdateStickyActivityLogInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStickyActivityLogInput>;
};

export type UpdateStickyActivityLogPayload = {
  __typename?: 'updateStickyActivityLogPayload';
  stickyActivityLog?: Maybe<StickyActivityLog>;
};

export type UpdateStickyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStickyInput>;
};

export type UpdateStickyPayload = {
  __typename?: 'updateStickyPayload';
  sticky?: Maybe<Stickies>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'username' | 'email'>
  )>>> }
);

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id' | 'email' | 'confirmed' | 'blocked'>
    ) }
  ) }
);

export const UsersDocument = gql`
    query Users {
  users {
    username
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }