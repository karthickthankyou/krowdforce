import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CompanyOrderByWithRelationInput = {
  Employer?: InputMaybe<EmployerOrderByRelationAggregateInput>;
  Job?: InputMaybe<JobOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  Employer?: InputMaybe<EmployerListRelationFilter>;
  Job?: InputMaybe<JobListRelationFilter>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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

export type CreateCompanyInput = {
  name: Scalars['String'];
};

export type CreateEmployeeInput = {
  uid: Scalars['String'];
};

export type CreateEmployerInput = {
  company: CreateCompanyInput;
  uid: Scalars['String'];
};

export type CreateJobInput = {
  addressId?: InputMaybe<Scalars['Int']>;
  companyId: Scalars['Int'];
  description: Scalars['String'];
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
  company: Company;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type EmployerListRelationFilter = {
  every?: InputMaybe<EmployerWhereInput>;
  none?: InputMaybe<EmployerWhereInput>;
  some?: InputMaybe<EmployerWhereInput>;
};

export type EmployerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployerOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type EmployerRelationFilter = {
  is?: InputMaybe<EmployerWhereInput>;
  isNot?: InputMaybe<EmployerWhereInput>;
};

export enum EmployerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type EmployerWhereInput = {
  AND?: InputMaybe<Array<EmployerWhereInput>>;
  NOT?: InputMaybe<Array<EmployerWhereInput>>;
  OR?: InputMaybe<Array<EmployerWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
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
  Company?: InputMaybe<CompanyOrderByWithRelationInput>;
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  addressId?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
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
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
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
  Company?: InputMaybe<CompanyRelationFilter>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
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
  createCompany: Company;
  createEmployee: Employee;
  createEmployer: Employer;
  createJob: Job;
  createSubCategory: SubCategory;
  createUser: User;
  removeAddress: Address;
  removeAdmin: Admin;
  removeCategory: Category;
  removeCompany: Company;
  removeEmployee: Employee;
  removeEmployer: Employer;
  removeJob: Job;
  removeSubCategory: SubCategory;
  removeUser: User;
  updateAddress: Address;
  updateAdmin: Admin;
  updateCategory: Category;
  updateCompany: Company;
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


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
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


export type MutationRemoveCompanyArgs = {
  where?: InputMaybe<CompanyWhereUniqueInput>;
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


export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
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
  companies: Array<Company>;
  company: Company;
  employee: Employee;
  employees: Array<Employee>;
  employer: Employer;
  employerMe: Employer;
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


export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  where?: InputMaybe<CompanyWhereUniqueInput>;
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

export type UpdateCompanyInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateEmployeeInput = {
  uid: Scalars['String'];
};

export type UpdateEmployerInput = {
  company?: InputMaybe<CreateCompanyInput>;
  uid: Scalars['String'];
};

export type UpdateJobInput = {
  addressId?: InputMaybe<Scalars['Int']>;
  companyId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
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

export type EmployerMeQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployerMeQuery = { __typename?: 'Query', employerMe: { __typename?: 'Employer', uid: string, company: { __typename?: 'Company', name: string, id: number } } };

export type CreateEmployerMutationVariables = Exact<{
  createEmployerInput: CreateEmployerInput;
}>;


export type CreateEmployerMutation = { __typename?: 'Mutation', createEmployer: { __typename?: 'Employer', uid: string } };

export const namedOperations = {
  Query: {
    Users: 'Users',
    User: 'User',
    EmployerMe: 'EmployerMe'
  },
  Mutation: {
    CreateUser: 'CreateUser',
    createEmployer: 'createEmployer'
  }
}

export const UsersDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const UserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const CreateUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const EmployerMeDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmployerMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employerMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EmployerMeQuery, EmployerMeQueryVariables>;
export const CreateEmployerDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createEmployer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createEmployerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEmployerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createEmployerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createEmployerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<CreateEmployerMutation, CreateEmployerMutationVariables>;