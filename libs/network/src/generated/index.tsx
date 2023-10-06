import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lat: Scalars['Int'];
  lng: Scalars['Int'];
  skills: Array<Job>;
  updatedAt: Scalars['DateTime'];
};

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<JobOrderByRelationAggregateInput>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export enum AddressScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  UpdatedAt = 'updatedAt'
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  job?: InputMaybe<JobListRelationFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AdminWhereUniqueInput = {
  uid: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String'];
  subCategories: Array<SubCategory>;
};

export type CategoryOrderByWithRelationInput = {
  name?: InputMaybe<SortOrder>;
  subCategories?: InputMaybe<SubCategoryOrderByRelationAggregateInput>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  Name = 'name'
}

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  name?: InputMaybe<StringFilter>;
  subCategories?: InputMaybe<SubCategoryListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  name: Scalars['String'];
};

export type CreateAddressInput = {
  address: Scalars['String'];
  lat: Scalars['Int'];
  lng: Scalars['Int'];
};

export type CreateAdminInput = {
  uid: Scalars['String'];
};

export type CreateCategoryInput = {
  name: Scalars['String'];
};

export type CreateEmployeeInput = {
  uid: Scalars['String'];
};

export type CreateEmployerInput = {
  uid: Scalars['String'];
};

export type CreateJobInput = {
  addressId?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  employerId: Scalars['String'];
  end?: InputMaybe<Scalars['DateTime']>;
  salary?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status: JobStatus;
  title: Scalars['String'];
  type: JobType;
};

export type CreateSubCategoryInput = {
  categoryName: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUserInput = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type Employee = {
  __typename?: 'Employee';
  createdAt: Scalars['DateTime'];
  skills: Array<SubCategory>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type EmployeeListRelationFilter = {
  every?: InputMaybe<EmployeeWhereInput>;
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SubCategoryOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type EmployeeRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>;
  isNot?: InputMaybe<EmployeeWhereInput>;
};

export enum EmployeeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type EmployeeWhereInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  skills?: InputMaybe<SubCategoryListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type EmployeeWhereUniqueInput = {
  uid: Scalars['String'];
};

export type Employer = {
  __typename?: 'Employer';
  createdAt: Scalars['DateTime'];
  jobs: Array<Job>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type EmployerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  jobs?: InputMaybe<JobOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type EmployerRelationFilter = {
  is?: InputMaybe<EmployerWhereInput>;
  isNot?: InputMaybe<EmployerWhereInput>;
};

export enum EmployerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type EmployerWhereInput = {
  AND?: InputMaybe<Array<EmployerWhereInput>>;
  NOT?: InputMaybe<Array<EmployerWhereInput>>;
  OR?: InputMaybe<Array<EmployerWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  jobs?: InputMaybe<JobListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type EmployerWhereUniqueInput = {
  uid: Scalars['String'];
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
};

export type Job = {
  __typename?: 'Job';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  employer: Employer;
  employerId: Scalars['String'];
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  salary?: Maybe<Scalars['Int']>;
  skills: Array<SubCategory>;
  start?: Maybe<Scalars['DateTime']>;
  status: JobStatus;
  title: Scalars['String'];
  type: JobType;
  updatedAt: Scalars['DateTime'];
};

export type JobListRelationFilter = {
  every?: InputMaybe<JobWhereInput>;
  none?: InputMaybe<JobWhereInput>;
  some?: InputMaybe<JobWhereInput>;
};

export type JobOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type JobOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  addressId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  employer?: InputMaybe<EmployerOrderByWithRelationInput>;
  employerId?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SubCategoryOrderByRelationAggregateInput>;
  start?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum JobScalarFieldEnum {
  AddressId = 'addressId',
  CreatedAt = 'createdAt',
  Description = 'description',
  EmployerId = 'employerId',
  End = 'end',
  Id = 'id',
  Salary = 'salary',
  Start = 'start',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export enum JobStatus {
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Open = 'OPEN'
}

export enum JobType {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME',
  PartTime = 'PART_TIME'
}

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  employer?: InputMaybe<EmployerRelationFilter>;
  employerId?: InputMaybe<StringFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  salary?: InputMaybe<IntFilter>;
  skills?: InputMaybe<SubCategoryListRelationFilter>;
  start?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<JobStatus>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<JobType>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type JobWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Address;
  createAdmin: Admin;
  createCategory: Category;
  createEmployee: Employee;
  createEmployer: Employer;
  createJob: Job;
  createSubCategory: SubCategory;
  createUser: User;
  removeAddress: Address;
  removeAdmin: Admin;
  removeCategory: Category;
  removeEmployee: Employee;
  removeEmployer: Employer;
  removeJob: Job;
  removeSubCategory: SubCategory;
  removeUser: User;
  updateAddress: Address;
  updateAdmin: Admin;
  updateCategory: Category;
  updateEmployee: Employee;
  updateEmployer: Employer;
  updateJob: Job;
  updateSubCategory: SubCategory;
  updateUser: User;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateEmployeeArgs = {
  createEmployeeInput: CreateEmployeeInput;
};


export type MutationCreateEmployerArgs = {
  createEmployerInput: CreateEmployerInput;
};


export type MutationCreateJobArgs = {
  createJobInput: CreateJobInput;
};


export type MutationCreateSubCategoryArgs = {
  createSubCategoryInput: CreateSubCategoryInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveAddressArgs = {
  where?: InputMaybe<AddressWhereUniqueInput>;
};


export type MutationRemoveAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>;
};


export type MutationRemoveCategoryArgs = {
  where?: InputMaybe<CategoryWhereUniqueInput>;
};


export type MutationRemoveEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereUniqueInput>;
};


export type MutationRemoveEmployerArgs = {
  where?: InputMaybe<EmployerWhereUniqueInput>;
};


export type MutationRemoveJobArgs = {
  where?: InputMaybe<JobWhereUniqueInput>;
};


export type MutationRemoveSubCategoryArgs = {
  where?: InputMaybe<SubCategoryWhereUniqueInput>;
};


export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};


export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateEmployeeArgs = {
  updateEmployeeInput: UpdateEmployeeInput;
};


export type MutationUpdateEmployerArgs = {
  updateEmployerInput: UpdateEmployerInput;
};


export type MutationUpdateJobArgs = {
  updateJobInput: UpdateJobInput;
};


export type MutationUpdateSubCategoryArgs = {
  updateSubCategoryInput: UpdateSubCategoryInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: Array<Address>;
  admin: Admin;
  admins: Array<Admin>;
  categories: Array<Category>;
  category: Category;
  employee: Employee;
  employees: Array<Employee>;
  employer: Employer;
  employers: Array<Employer>;
  job: Job;
  jobs: Array<Job>;
  subCategories: Array<SubCategory>;
  subCategory: SubCategory;
  user: User;
  users: Array<User>;
};


export type QueryAddressArgs = {
  where?: InputMaybe<AddressWhereUniqueInput>;
};


export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>;
};


export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where?: InputMaybe<CategoryWhereUniqueInput>;
};


export type QueryEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereUniqueInput>;
};


export type QueryEmployeesArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryEmployerArgs = {
  where?: InputMaybe<EmployerWhereUniqueInput>;
};


export type QueryEmployersArgs = {
  cursor?: InputMaybe<EmployerWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmployerWhereInput>;
};


export type QueryJobArgs = {
  where?: InputMaybe<JobWhereUniqueInput>;
};


export type QueryJobsArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};


export type QuerySubCategoriesArgs = {
  cursor?: InputMaybe<SubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubCategoryWhereInput>;
};


export type QuerySubCategoryArgs = {
  where?: InputMaybe<SubCategoryWhereUniqueInput>;
};


export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type SubCategory = {
  __typename?: 'SubCategory';
  category: Category;
  categoryName: Scalars['String'];
  employees: Array<Employee>;
  jobs: Array<Job>;
  name: Scalars['String'];
};

export type SubCategoryListRelationFilter = {
  every?: InputMaybe<SubCategoryWhereInput>;
  none?: InputMaybe<SubCategoryWhereInput>;
  some?: InputMaybe<SubCategoryWhereInput>;
};

export type SubCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubCategoryOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryName?: InputMaybe<SortOrder>;
  employees?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  jobs?: InputMaybe<JobOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export enum SubCategoryScalarFieldEnum {
  CategoryName = 'categoryName',
  Name = 'name'
}

export type SubCategoryWhereInput = {
  AND?: InputMaybe<Array<SubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<SubCategoryWhereInput>>;
  OR?: InputMaybe<Array<SubCategoryWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryName?: InputMaybe<StringFilter>;
  employees?: InputMaybe<EmployeeListRelationFilter>;
  jobs?: InputMaybe<JobListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SubCategoryWhereUniqueInput = {
  name: Scalars['String'];
};

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lat?: InputMaybe<Scalars['Int']>;
  lng?: InputMaybe<Scalars['Int']>;
};

export type UpdateAdminInput = {
  uid: Scalars['String'];
};

export type UpdateCategoryInput = {
  name: Scalars['String'];
};

export type UpdateEmployeeInput = {
  uid: Scalars['String'];
};

export type UpdateEmployerInput = {
  uid: Scalars['String'];
};

export type UpdateJobInput = {
  addressId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  employerId?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  salary?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<JobStatus>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<JobType>;
};

export type UpdateSubCategoryInput = {
  categoryName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  employee: Employee;
  employer: Employer;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserOrderByWithRelationInput = {
  Admin?: InputMaybe<AdminOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employer?: InputMaybe<EmployerOrderByWithRelationInput>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Admin?: InputMaybe<AdminRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employer?: InputMaybe<EmployerRelationFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  uid: Scalars['String'];
};

export type UsersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  where?: InputMaybe<UserWhereInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', image?: string | null, uid: string, createdAt: any, name?: string | null }> };

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereUniqueInput>;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', name?: string | null, image?: string | null, updatedAt: any, createdAt: any, uid: string } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', image?: string | null } };

export const namedOperations = {
  Query: {
    Users: 'Users',
    User: 'User'
  },
  Mutation: {
    CreateUser: 'CreateUser'
  }
}

export const UsersDocument = /*#__PURE__*/ gql`
    query Users($skip: Int, $take: Int, $cursor: UserWhereUniqueInput, $orderBy: [UserOrderByWithRelationInput!], $where: UserWhereInput, $distinct: [UserScalarFieldEnum!]) {
  users(
    skip: $skip
    take: $take
    cursor: $cursor
    orderBy: $orderBy
    where: $where
    distinct: $distinct
  ) {
    image
    uid
    createdAt
    name
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = /*#__PURE__*/ gql`
    query User($where: UserWhereUniqueInput) {
  user(where: $where) {
    name
    image
    updatedAt
    createdAt
    uid
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    image
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;