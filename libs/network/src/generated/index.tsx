import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type AddEmployerInput = {
  uid: Scalars['String']
}

export type Address = {
  __typename?: 'Address'
  address: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  jobs: Array<Job>
  lat: Scalars['Float']
  lng: Scalars['Float']
  updatedAt: Scalars['DateTime']
}

export type AddressOrderByWithRelationInput = {
  Company?: InputMaybe<CompanyOrderByRelationAggregateInput>
  Employee?: InputMaybe<EmployeeOrderByRelationAggregateInput>
  address?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  job?: InputMaybe<JobOrderByRelationAggregateInput>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>
  isNot?: InputMaybe<AddressWhereInput>
}

export enum AddressScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  UpdatedAt = 'updatedAt',
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>
  Company?: InputMaybe<CompanyListRelationFilter>
  Employee?: InputMaybe<EmployeeListRelationFilter>
  NOT?: InputMaybe<Array<AddressWhereInput>>
  OR?: InputMaybe<Array<AddressWhereInput>>
  address?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  job?: InputMaybe<JobListRelationFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>
  isNot?: InputMaybe<AdminWhereInput>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type AdminWhereUniqueInput = {
  uid: Scalars['String']
}

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput'
  count: Scalars['Int']
}

export type Application = {
  __typename?: 'Application'
  createdAt: Scalars['DateTime']
  employee: Employee
  employeeId: Scalars['String']
  job: Job
  jobId: Scalars['Int']
  status: ApplicationStatus
  updatedAt: Scalars['DateTime']
}

export type ApplicationCountByStatus = {
  __typename?: 'ApplicationCountByStatus'
  count: Scalars['Int']
  name: ApplicationStatus
}

export type ApplicationListRelationFilter = {
  every?: InputMaybe<ApplicationWhereInput>
  none?: InputMaybe<ApplicationWhereInput>
  some?: InputMaybe<ApplicationWhereInput>
}

export type ApplicationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ApplicationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>
  employeeId?: InputMaybe<SortOrder>
  job?: InputMaybe<JobOrderByWithRelationInput>
  jobId?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ApplicationScalarFieldEnum {
  CreatedAt = 'createdAt',
  EmployeeId = 'employeeId',
  JobId = 'jobId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum ApplicationStatus {
  Accepted = 'ACCEPTED',
  Employed = 'EMPLOYED',
  Interviewed = 'INTERVIEWED',
  Offered = 'OFFERED',
  Rejected = 'REJECTED',
  Submitted = 'SUBMITTED',
  UnderReview = 'UNDER_REVIEW',
  Withdraw = 'WITHDRAW',
}

export type ApplicationWhereInput = {
  AND?: InputMaybe<Array<ApplicationWhereInput>>
  NOT?: InputMaybe<Array<ApplicationWhereInput>>
  OR?: InputMaybe<Array<ApplicationWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  employee?: InputMaybe<EmployeeRelationFilter>
  employeeId?: InputMaybe<StringFilter>
  job?: InputMaybe<JobRelationFilter>
  jobId?: InputMaybe<IntFilter>
  status?: InputMaybe<ApplicationStatus>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ApplicationWhereUniqueInput = {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}

export type Bookmark = {
  __typename?: 'Bookmark'
  createdAt: Scalars['DateTime']
  employee: Employee
  employeeId: Scalars['String']
  job: Job
  jobId: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type BookmarkListRelationFilter = {
  every?: InputMaybe<BookmarkWhereInput>
  none?: InputMaybe<BookmarkWhereInput>
  some?: InputMaybe<BookmarkWhereInput>
}

export type BookmarkOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookmarkOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>
  employeeId?: InputMaybe<SortOrder>
  job?: InputMaybe<JobOrderByWithRelationInput>
  jobId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum BookmarkScalarFieldEnum {
  CreatedAt = 'createdAt',
  EmployeeId = 'employeeId',
  JobId = 'jobId',
  UpdatedAt = 'updatedAt',
}

export type BookmarkWhereInput = {
  AND?: InputMaybe<Array<BookmarkWhereInput>>
  NOT?: InputMaybe<Array<BookmarkWhereInput>>
  OR?: InputMaybe<Array<BookmarkWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  employee?: InputMaybe<EmployeeRelationFilter>
  employeeId?: InputMaybe<StringFilter>
  job?: InputMaybe<JobRelationFilter>
  jobId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type BookmarkWhereUniqueInput = {
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}

export type Category = {
  __typename?: 'Category'
  name: Scalars['String']
  subCategories: Array<SubCategory>
}

export type CategoryOrderByWithRelationInput = {
  name?: InputMaybe<SortOrder>
  subCategories?: InputMaybe<SubCategoryOrderByRelationAggregateInput>
}

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>
  isNot?: InputMaybe<CategoryWhereInput>
}

export enum CategoryScalarFieldEnum {
  Name = 'name',
}

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  OR?: InputMaybe<Array<CategoryWhereInput>>
  name?: InputMaybe<StringFilter>
  subCategories?: InputMaybe<SubCategoryListRelationFilter>
}

export type CategoryWhereUniqueInput = {
  name: Scalars['String']
}

export type Company = {
  __typename?: 'Company'
  address: Address
  addressId: Scalars['Int']
  description?: Maybe<Scalars['String']>
  employers: Array<Employer>
  id: Scalars['Int']
  jobs: Array<Job>
  name: Scalars['String']
}

export type CompanyListRelationFilter = {
  every?: InputMaybe<CompanyWhereInput>
  none?: InputMaybe<CompanyWhereInput>
  some?: InputMaybe<CompanyWhereInput>
}

export type CompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CompanyOrderByWithRelationInput = {
  Employer?: InputMaybe<EmployerOrderByRelationAggregateInput>
  Job?: InputMaybe<JobOrderByRelationAggregateInput>
  address?: InputMaybe<AddressOrderByWithRelationInput>
  addressId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
}

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>
  isNot?: InputMaybe<CompanyWhereInput>
}

export enum CompanyScalarFieldEnum {
  AddressId = 'addressId',
  Description = 'description',
  Id = 'id',
  Name = 'name',
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>
  Employer?: InputMaybe<EmployerListRelationFilter>
  Job?: InputMaybe<JobListRelationFilter>
  NOT?: InputMaybe<Array<CompanyWhereInput>>
  OR?: InputMaybe<Array<CompanyWhereInput>>
  address?: InputMaybe<AddressRelationFilter>
  addressId?: InputMaybe<IntFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
}

export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type ConnectSubCategoryInput = {
  name: Scalars['String']
}

export type CreateAddressInput = {
  address: Scalars['String']
  lat: Scalars['Float']
  lng: Scalars['Float']
}

export type CreateAdminInput = {
  uid: Scalars['String']
}

export type CreateApplicationInput = {
  employeeId: Scalars['String']
  jobId: Scalars['Int']
}

export type CreateBookmarkInput = {
  employeeId: Scalars['String']
  jobId: Scalars['Int']
}

export type CreateCategoryInput = {
  name: Scalars['String']
}

export type CreateCompanyInput = {
  address: CreateAddressInput
  description?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateEmployeeInput = {
  about: Scalars['String']
  address: CreateAddressInput
  contactInfo?: InputMaybe<Scalars['String']>
  skills: Array<Scalars['String']>
  uid: Scalars['String']
}

export type CreateEmployerInput = {
  uid: Scalars['String']
}

export type CreateEmploymentInput = {
  employeeId: Scalars['String']
  jobId: Scalars['Int']
  startDate: Scalars['DateTime']
}

export type CreateFollowInput = {
  followerId: Scalars['String']
  followingId: Scalars['String']
}

export type CreateJobInput = {
  address?: InputMaybe<CreateAddressInput>
  companyAddressId?: InputMaybe<Scalars['Int']>
  companyId: Scalars['Int']
  description: Scalars['String']
  employerId?: InputMaybe<Scalars['String']>
  end?: InputMaybe<Scalars['DateTime']>
  salary?: InputMaybe<Scalars['Int']>
  shiftInformation?: InputMaybe<CreateShiftInformationInputWithoutJobId>
  skills: Array<ConnectSubCategoryInput>
  start?: InputMaybe<Scalars['DateTime']>
  status: JobStatus
  title: Scalars['String']
  type: JobType
}

export type CreatePostInput = {
  authorId: Scalars['String']
  content: Scalars['String']
  image?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type CreateShiftInformationInput = {
  days?: InputMaybe<Array<Weekday>>
  endTime: Scalars['String']
  jobId: Scalars['Int']
  startTime: Scalars['String']
}

export type CreateShiftInformationInputWithoutJobId = {
  days?: InputMaybe<Array<Weekday>>
  endTime: Scalars['String']
  startTime: Scalars['String']
}

export type CreateSubCategoryInput = {
  categoryName: Scalars['String']
  name: Scalars['String']
}

export type CreateUserInput = {
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type Employee = {
  __typename?: 'Employee'
  about: Scalars['String']
  address: Address
  addressId: Scalars['Int']
  applications: Array<Application>
  bookmarks: Array<Bookmark>
  contactInfo?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  skills: Array<SubCategory>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type EmployeeFilter = {
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmployeeWhereInput>
}

export type EmployeeIdJobIdCompoundUniqueInput = {
  employeeId: Scalars['String']
  jobId: Scalars['Int']
}

export type EmployeeListRelationFilter = {
  every?: InputMaybe<EmployeeWhereInput>
  none?: InputMaybe<EmployeeWhereInput>
  some?: InputMaybe<EmployeeWhereInput>
}

export type EmployeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type EmployeeOrderByWithRelationInput = {
  Application?: InputMaybe<ApplicationOrderByRelationAggregateInput>
  Bookmark?: InputMaybe<BookmarkOrderByRelationAggregateInput>
  Employment?: InputMaybe<EmploymentOrderByRelationAggregateInput>
  about?: InputMaybe<SortOrder>
  address?: InputMaybe<AddressOrderByWithRelationInput>
  addressId?: InputMaybe<SortOrder>
  contactInfo?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  skills?: InputMaybe<SubCategoryOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type EmployeeRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>
  isNot?: InputMaybe<EmployeeWhereInput>
}

export enum EmployeeScalarFieldEnum {
  About = 'about',
  AddressId = 'addressId',
  ContactInfo = 'contactInfo',
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type EmployeeStats = {
  __typename?: 'EmployeeStats'
  applications: Scalars['Int']
  bookmarks: Scalars['Int']
  followedBy: Scalars['Int']
  followers: Scalars['Int']
}

export type EmployeeWhereInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>
  Application?: InputMaybe<ApplicationListRelationFilter>
  Bookmark?: InputMaybe<BookmarkListRelationFilter>
  Employment?: InputMaybe<EmploymentListRelationFilter>
  NOT?: InputMaybe<Array<EmployeeWhereInput>>
  OR?: InputMaybe<Array<EmployeeWhereInput>>
  about?: InputMaybe<StringFilter>
  address?: InputMaybe<AddressRelationFilter>
  addressId?: InputMaybe<IntFilter>
  contactInfo?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  skills?: InputMaybe<SubCategoryListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type EmployeeWhereUniqueInput = {
  uid: Scalars['String']
}

export type Employer = {
  __typename?: 'Employer'
  company?: Maybe<Company>
  companyId?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  jobs: Array<Job>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type EmployerListRelationFilter = {
  every?: InputMaybe<EmployerWhereInput>
  none?: InputMaybe<EmployerWhereInput>
  some?: InputMaybe<EmployerWhereInput>
}

export type EmployerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type EmployerOrderByWithRelationInput = {
  Job?: InputMaybe<JobOrderByRelationAggregateInput>
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type EmployerRelationFilter = {
  is?: InputMaybe<EmployerWhereInput>
  isNot?: InputMaybe<EmployerWhereInput>
}

export enum EmployerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type EmployerStats = {
  __typename?: 'EmployerStats'
  applications: Array<ApplicationCountByStatus>
  jobs: Array<JobCountByStatus>
}

export type EmployerWhereInput = {
  AND?: InputMaybe<Array<EmployerWhereInput>>
  Job?: InputMaybe<JobListRelationFilter>
  NOT?: InputMaybe<Array<EmployerWhereInput>>
  OR?: InputMaybe<Array<EmployerWhereInput>>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type EmployerWhereUniqueInput = {
  uid: Scalars['String']
}

export type Employment = {
  __typename?: 'Employment'
  createdAt: Scalars['DateTime']
  employee: Employee
  employeeId: Scalars['String']
  endDate?: Maybe<Scalars['DateTime']>
  id: Scalars['Int']
  job: Job
  jobId: Scalars['Int']
  startDate: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type EmploymentListRelationFilter = {
  every?: InputMaybe<EmploymentWhereInput>
  none?: InputMaybe<EmploymentWhereInput>
  some?: InputMaybe<EmploymentWhereInput>
}

export type EmploymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type EmploymentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>
  employeeId?: InputMaybe<SortOrder>
  endDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  job?: InputMaybe<JobOrderByWithRelationInput>
  jobId?: InputMaybe<SortOrder>
  startDate?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum EmploymentScalarFieldEnum {
  CreatedAt = 'createdAt',
  EmployeeId = 'employeeId',
  EndDate = 'endDate',
  Id = 'id',
  JobId = 'jobId',
  StartDate = 'startDate',
  UpdatedAt = 'updatedAt',
}

export type EmploymentWhereInput = {
  AND?: InputMaybe<Array<EmploymentWhereInput>>
  NOT?: InputMaybe<Array<EmploymentWhereInput>>
  OR?: InputMaybe<Array<EmploymentWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  employee?: InputMaybe<EmployeeRelationFilter>
  employeeId?: InputMaybe<StringFilter>
  endDate?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  job?: InputMaybe<JobRelationFilter>
  jobId?: InputMaybe<IntFilter>
  startDate?: InputMaybe<DateTimeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type EmploymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type EnumWeekdayListFilter = {
  equals: Array<Weekday>
  has: Weekday
  hasEvery?: InputMaybe<Array<Weekday>>
  hasSome?: InputMaybe<Array<Weekday>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
}

export type Follow = {
  __typename?: 'Follow'
  createdAt: Scalars['DateTime']
  follower: User
  followerId: Scalars['String']
  following: User
  followingId: Scalars['String']
  id: Scalars['Int']
}

export type FollowFollowerIdFollowingIdCompoundUniqueInput = {
  followerId: Scalars['String']
  followingId: Scalars['String']
}

export type FollowListRelationFilter = {
  every?: InputMaybe<FollowWhereInput>
  none?: InputMaybe<FollowWhereInput>
  some?: InputMaybe<FollowWhereInput>
}

export type FollowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type FollowOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  follower?: InputMaybe<UserOrderByWithRelationInput>
  followerId?: InputMaybe<SortOrder>
  following?: InputMaybe<UserOrderByWithRelationInput>
  followingId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
}

export enum FollowScalarFieldEnum {
  CreatedAt = 'createdAt',
  FollowerId = 'followerId',
  FollowingId = 'followingId',
  Id = 'id',
}

export type FollowWhereInput = {
  AND?: InputMaybe<Array<FollowWhereInput>>
  NOT?: InputMaybe<Array<FollowWhereInput>>
  OR?: InputMaybe<Array<FollowWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  follower?: InputMaybe<UserRelationFilter>
  followerId?: InputMaybe<StringFilter>
  following?: InputMaybe<UserRelationFilter>
  followingId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
}

export type FollowWhereUniqueInput = {
  followerId_followingId?: InputMaybe<FollowFollowerIdFollowingIdCompoundUniqueInput>
  id?: InputMaybe<Scalars['Int']>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
}

export type Job = {
  __typename?: 'Job'
  address?: Maybe<Address>
  addressId?: Maybe<Scalars['Int']>
  applications: Array<Application>
  applicationsCount: Scalars['Int']
  bookmarks: Array<Bookmark>
  company: Company
  companyId: Scalars['Int']
  contactInfo?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  description: Scalars['String']
  employer?: Maybe<Employer>
  employerId?: Maybe<Scalars['String']>
  end?: Maybe<Scalars['DateTime']>
  id: Scalars['Int']
  salary?: Maybe<Scalars['Int']>
  shiftInformation?: Maybe<ShiftInformation>
  skills: Array<SubCategory>
  start?: Maybe<Scalars['DateTime']>
  status: JobStatus
  title: Scalars['String']
  type: JobType
  updatedAt: Scalars['DateTime']
}

export type JobCountByStatus = {
  __typename?: 'JobCountByStatus'
  count: Scalars['Int']
  name: JobStatus
}

export type JobFilter = {
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<JobWhereInput>
}

export type JobListRelationFilter = {
  every?: InputMaybe<JobWhereInput>
  none?: InputMaybe<JobWhereInput>
  some?: InputMaybe<JobWhereInput>
}

export type JobOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type JobOrderByWithRelationInput = {
  Application?: InputMaybe<ApplicationOrderByRelationAggregateInput>
  Bookmark?: InputMaybe<BookmarkOrderByRelationAggregateInput>
  Company?: InputMaybe<CompanyOrderByWithRelationInput>
  Employer?: InputMaybe<EmployerOrderByWithRelationInput>
  Employment?: InputMaybe<EmploymentOrderByRelationAggregateInput>
  address?: InputMaybe<AddressOrderByWithRelationInput>
  addressId?: InputMaybe<SortOrder>
  companyId?: InputMaybe<SortOrder>
  contactInfo?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  employerId?: InputMaybe<SortOrder>
  end?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  salary?: InputMaybe<SortOrder>
  shiftInformation?: InputMaybe<ShiftInformationOrderByWithRelationInput>
  skills?: InputMaybe<SubCategoryOrderByRelationAggregateInput>
  start?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type JobRelationFilter = {
  is?: InputMaybe<JobWhereInput>
  isNot?: InputMaybe<JobWhereInput>
}

export enum JobScalarFieldEnum {
  AddressId = 'addressId',
  CompanyId = 'companyId',
  ContactInfo = 'contactInfo',
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
  UpdatedAt = 'updatedAt',
}

export enum JobStatus {
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Open = 'OPEN',
}

export enum JobType {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME',
  PartTime = 'PART_TIME',
}

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>
  Application?: InputMaybe<ApplicationListRelationFilter>
  Bookmark?: InputMaybe<BookmarkListRelationFilter>
  Company?: InputMaybe<CompanyRelationFilter>
  Employer?: InputMaybe<EmployerRelationFilter>
  Employment?: InputMaybe<EmploymentListRelationFilter>
  NOT?: InputMaybe<Array<JobWhereInput>>
  OR?: InputMaybe<Array<JobWhereInput>>
  address?: InputMaybe<AddressRelationFilter>
  addressId?: InputMaybe<IntFilter>
  companyId?: InputMaybe<IntFilter>
  contactInfo?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  employerId?: InputMaybe<StringFilter>
  end?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  salary?: InputMaybe<IntFilter>
  shiftInformation?: InputMaybe<ShiftInformationRelationFilter>
  skills?: InputMaybe<SubCategoryListRelationFilter>
  start?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<JobStatus>
  title?: InputMaybe<StringFilter>
  type?: InputMaybe<JobType>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type JobWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type LocationFilterInput = {
  ne_lat: Scalars['Float']
  ne_lng: Scalars['Float']
  sw_lat: Scalars['Float']
  sw_lng: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  acceptOffer: Application
  addEmployer: Company
  createAddress: Address
  createAdmin: Admin
  createApplication: Application
  createBookmark: Bookmark
  createCategory: Category
  createCompany: Company
  createEmployee: Employee
  createEmployer?: Maybe<Employer>
  createEmployment: Employment
  createFollow: Follow
  createJob: Job
  createPost: Post
  createShiftInformation: ShiftInformation
  createSubCategory: SubCategory
  createUser: User
  removeAddress: Address
  removeAdmin: Admin
  removeApplication: Application
  removeBookmark: Bookmark
  removeCategory: Category
  removeCompany: Company
  removeEmployee: Employee
  removeEmployer: Employer
  removeEmployment: Employment
  removeFollow: Follow
  removeJob: Job
  removePost: Post
  removeShiftInformation: ShiftInformation
  removeSubCategory: SubCategory
  removeUser: User
  updateAddress: Address
  updateAdmin: Admin
  updateApplication: Application
  updateBookmark: Bookmark
  updateCategory: Category
  updateCompany: Company
  updateEmployee: Employee
  updateEmployer: Employer
  updateEmployment: Employment
  updateFollow: Follow
  updateJob: Job
  updatePost: Post
  updateShiftInformation: ShiftInformation
  updateSubCategory: SubCategory
  updateUser: User
}

export type MutationAcceptOfferArgs = {
  updateApplicationInput: UpdateApplicationInput
}

export type MutationAddEmployerArgs = {
  addEmployerInput: AddEmployerInput
}

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateApplicationArgs = {
  createApplicationInput: CreateApplicationInput
}

export type MutationCreateBookmarkArgs = {
  createBookmarkInput: CreateBookmarkInput
}

export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput
}

export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput
}

export type MutationCreateEmployeeArgs = {
  createEmployeeInput: CreateEmployeeInput
}

export type MutationCreateEmployerArgs = {
  createEmployerInput: CreateEmployerInput
}

export type MutationCreateEmploymentArgs = {
  createEmploymentInput: CreateEmploymentInput
}

export type MutationCreateFollowArgs = {
  createFollowInput: CreateFollowInput
}

export type MutationCreateJobArgs = {
  createJobInput: CreateJobInput
}

export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput
}

export type MutationCreateShiftInformationArgs = {
  createShiftInformationInput: CreateShiftInformationInput
}

export type MutationCreateSubCategoryArgs = {
  createSubCategoryInput: CreateSubCategoryInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationRemoveAddressArgs = {
  where?: InputMaybe<AddressWhereUniqueInput>
}

export type MutationRemoveAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>
}

export type MutationRemoveApplicationArgs = {
  where?: InputMaybe<ApplicationWhereUniqueInput>
}

export type MutationRemoveBookmarkArgs = {
  where?: InputMaybe<BookmarkWhereUniqueInput>
}

export type MutationRemoveCategoryArgs = {
  where?: InputMaybe<CategoryWhereUniqueInput>
}

export type MutationRemoveCompanyArgs = {
  where?: InputMaybe<CompanyWhereUniqueInput>
}

export type MutationRemoveEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereUniqueInput>
}

export type MutationRemoveEmployerArgs = {
  where?: InputMaybe<EmployerWhereUniqueInput>
}

export type MutationRemoveEmploymentArgs = {
  where?: InputMaybe<EmploymentWhereUniqueInput>
}

export type MutationRemoveFollowArgs = {
  where?: InputMaybe<FollowWhereUniqueInput>
}

export type MutationRemoveJobArgs = {
  where?: InputMaybe<JobWhereUniqueInput>
}

export type MutationRemovePostArgs = {
  where?: InputMaybe<PostWhereUniqueInput>
}

export type MutationRemoveShiftInformationArgs = {
  where?: InputMaybe<ShiftInformationWhereUniqueInput>
}

export type MutationRemoveSubCategoryArgs = {
  where?: InputMaybe<SubCategoryWhereUniqueInput>
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateApplicationArgs = {
  updateApplicationInput: UpdateApplicationInput
}

export type MutationUpdateBookmarkArgs = {
  updateBookmarkInput: UpdateBookmarkInput
}

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput
}

export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput
}

export type MutationUpdateEmployeeArgs = {
  updateEmployeeInput: UpdateEmployeeInput
}

export type MutationUpdateEmployerArgs = {
  updateEmployerInput: UpdateEmployerInput
}

export type MutationUpdateEmploymentArgs = {
  updateEmploymentInput: UpdateEmploymentInput
}

export type MutationUpdateFollowArgs = {
  updateFollowInput: UpdateFollowInput
}

export type MutationUpdateJobArgs = {
  updateJobInput: UpdateJobInput
}

export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput
}

export type MutationUpdateShiftInformationArgs = {
  updateShiftInformationInput: UpdateShiftInformationInput
}

export type MutationUpdateSubCategoryArgs = {
  updateSubCategoryInput: UpdateSubCategoryInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Post = {
  __typename?: 'Post'
  author: User
  authorId: Scalars['String']
  content: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  image?: Maybe<Scalars['String']>
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>
  none?: InputMaybe<PostWhereInput>
  some?: InputMaybe<PostWhereInput>
}

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>
  authorId?: InputMaybe<SortOrder>
  content?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>
  NOT?: InputMaybe<Array<PostWhereInput>>
  OR?: InputMaybe<Array<PostWhereInput>>
  author?: InputMaybe<UserRelationFilter>
  authorId?: InputMaybe<StringFilter>
  content?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  image?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  address: Address
  addresses: Array<Address>
  admin: Admin
  admins: Array<Admin>
  application: Application
  applications: Array<Application>
  bookmark: Bookmark
  bookmarks: Array<Bookmark>
  categories: Array<Category>
  category: Category
  companies: Array<Company>
  company: Company
  companyApplications: Array<Application>
  companyEmployees: Array<Employee>
  companyEmployers: Array<Employer>
  companyJobs: Array<Job>
  companyStats: EmployerStats
  employee: Employee
  employeeAggregate: AggregateCountOutput
  employeeMe?: Maybe<Employee>
  employeeStats: EmployeeStats
  employees: Array<Employee>
  employer: Employer
  employerCompany: Company
  employerJobs: Array<Job>
  employerMe: Employer
  employers: Array<Employer>
  employment: Employment
  employments: Array<Employment>
  follow: Follow
  followedByMe: Array<Follow>
  followers: Array<Follow>
  follows: Array<Follow>
  job: Job
  jobAggregate: AggregateCountOutput
  jobs: Array<Job>
  myApplications: Array<Application>
  myBookmarks: Array<Bookmark>
  myEmployments: Array<Employment>
  post: Post
  postFeed: Array<Post>
  posts: Array<Post>
  searchEmployees: Array<Employee>
  searchJobs: Array<Job>
  shiftInformation: ShiftInformation
  shiftInformations: Array<ShiftInformation>
  subCategories: Array<SubCategory>
  subCategory: SubCategory
  user: User
  users: Array<User>
}

export type QueryAddressArgs = {
  where?: InputMaybe<AddressWhereUniqueInput>
}

export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AddressWhereInput>
}

export type QueryAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryApplicationArgs = {
  where?: InputMaybe<ApplicationWhereUniqueInput>
}

export type QueryApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ApplicationWhereInput>
}

export type QueryBookmarkArgs = {
  where?: InputMaybe<BookmarkWhereUniqueInput>
}

export type QueryBookmarksArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>
  distinct?: InputMaybe<Array<BookmarkScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BookmarkWhereInput>
}

export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoryArgs = {
  where?: InputMaybe<CategoryWhereUniqueInput>
}

export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CompanyWhereInput>
}

export type QueryCompanyArgs = {
  where?: InputMaybe<CompanyWhereUniqueInput>
}

export type QueryCompanyApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ApplicationWhereInput>
}

export type QueryCompanyEmployeesArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmployeeWhereInput>
}

export type QueryCompanyEmployersArgs = {
  cursor?: InputMaybe<EmployerWhereUniqueInput>
  distinct?: InputMaybe<Array<EmployerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<EmployerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmployerWhereInput>
}

export type QueryCompanyJobsArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<JobWhereInput>
}

export type QueryEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereUniqueInput>
}

export type QueryEmployeeAggregateArgs = {
  employeeFilter?: InputMaybe<EmployeeFilter>
  locationFilter: LocationFilterInput
}

export type QueryEmployeesArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmployeeWhereInput>
}

export type QueryEmployerArgs = {
  where?: InputMaybe<EmployerWhereUniqueInput>
}

export type QueryEmployerJobsArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<JobWhereInput>
}

export type QueryEmployersArgs = {
  cursor?: InputMaybe<EmployerWhereUniqueInput>
  distinct?: InputMaybe<Array<EmployerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<EmployerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmployerWhereInput>
}

export type QueryEmploymentArgs = {
  where?: InputMaybe<EmploymentWhereUniqueInput>
}

export type QueryEmploymentsArgs = {
  cursor?: InputMaybe<EmploymentWhereUniqueInput>
  distinct?: InputMaybe<Array<EmploymentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<EmploymentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmploymentWhereInput>
}

export type QueryFollowArgs = {
  where?: InputMaybe<FollowWhereUniqueInput>
}

export type QueryFollowedByMeArgs = {
  cursor?: InputMaybe<FollowWhereUniqueInput>
  distinct?: InputMaybe<Array<FollowScalarFieldEnum>>
  orderBy?: InputMaybe<Array<FollowOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FollowWhereInput>
}

export type QueryFollowersArgs = {
  cursor?: InputMaybe<FollowWhereUniqueInput>
  distinct?: InputMaybe<Array<FollowScalarFieldEnum>>
  orderBy?: InputMaybe<Array<FollowOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FollowWhereInput>
}

export type QueryFollowsArgs = {
  cursor?: InputMaybe<FollowWhereUniqueInput>
  distinct?: InputMaybe<Array<FollowScalarFieldEnum>>
  orderBy?: InputMaybe<Array<FollowOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FollowWhereInput>
}

export type QueryJobArgs = {
  where?: InputMaybe<JobWhereUniqueInput>
}

export type QueryJobAggregateArgs = {
  jobFilter?: InputMaybe<JobFilter>
  locationFilter: LocationFilterInput
}

export type QueryJobsArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<JobWhereInput>
}

export type QueryMyApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ApplicationWhereInput>
}

export type QueryMyBookmarksArgs = {
  cursor?: InputMaybe<BookmarkWhereUniqueInput>
  distinct?: InputMaybe<Array<BookmarkScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookmarkOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BookmarkWhereInput>
}

export type QueryMyEmploymentsArgs = {
  cursor?: InputMaybe<EmploymentWhereUniqueInput>
  distinct?: InputMaybe<Array<EmploymentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<EmploymentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EmploymentWhereInput>
}

export type QueryPostArgs = {
  where?: InputMaybe<PostWhereUniqueInput>
}

export type QueryPostFeedArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type QuerySearchEmployeesArgs = {
  employeeFilter?: InputMaybe<EmployeeFilter>
  locationFilter: LocationFilterInput
}

export type QuerySearchJobsArgs = {
  jobFilter?: InputMaybe<JobFilter>
  locationFilter: LocationFilterInput
}

export type QueryShiftInformationArgs = {
  where?: InputMaybe<ShiftInformationWhereUniqueInput>
}

export type QueryShiftInformationsArgs = {
  cursor?: InputMaybe<ShiftInformationWhereUniqueInput>
  distinct?: InputMaybe<Array<ShiftInformationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ShiftInformationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ShiftInformationWhereInput>
}

export type QuerySubCategoriesArgs = {
  cursor?: InputMaybe<SubCategoryWhereUniqueInput>
  distinct?: InputMaybe<Array<SubCategoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SubCategoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SubCategoryWhereInput>
}

export type QuerySubCategoryArgs = {
  where?: InputMaybe<SubCategoryWhereUniqueInput>
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type ShiftInformation = {
  __typename?: 'ShiftInformation'
  days?: Maybe<Array<Weekday>>
  endTime: Scalars['String']
  jobId: Scalars['Int']
  startTime: Scalars['String']
}

export type ShiftInformationOrderByWithRelationInput = {
  Job?: InputMaybe<JobOrderByWithRelationInput>
  days?: InputMaybe<SortOrder>
  endTime?: InputMaybe<SortOrder>
  jobId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
}

export type ShiftInformationRelationFilter = {
  is?: InputMaybe<ShiftInformationWhereInput>
  isNot?: InputMaybe<ShiftInformationWhereInput>
}

export enum ShiftInformationScalarFieldEnum {
  Days = 'days',
  EndTime = 'endTime',
  JobId = 'jobId',
  StartTime = 'startTime',
}

export type ShiftInformationWhereInput = {
  AND?: InputMaybe<Array<ShiftInformationWhereInput>>
  Job?: InputMaybe<JobRelationFilter>
  NOT?: InputMaybe<Array<ShiftInformationWhereInput>>
  OR?: InputMaybe<Array<ShiftInformationWhereInput>>
  days?: InputMaybe<EnumWeekdayListFilter>
  endTime?: InputMaybe<StringFilter>
  jobId?: InputMaybe<IntFilter>
  startTime?: InputMaybe<StringFilter>
}

export type ShiftInformationWhereUniqueInput = {
  jobId: Scalars['Int']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type SubCategory = {
  __typename?: 'SubCategory'
  category: Category
  categoryName: Scalars['String']
  employees: Array<Employee>
  jobs: Array<Job>
  name: Scalars['String']
}

export type SubCategoryListRelationFilter = {
  every?: InputMaybe<SubCategoryWhereInput>
  none?: InputMaybe<SubCategoryWhereInput>
  some?: InputMaybe<SubCategoryWhereInput>
}

export type SubCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SubCategoryOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>
  categoryName?: InputMaybe<SortOrder>
  employees?: InputMaybe<EmployeeOrderByRelationAggregateInput>
  jobs?: InputMaybe<JobOrderByRelationAggregateInput>
  name?: InputMaybe<SortOrder>
}

export enum SubCategoryScalarFieldEnum {
  CategoryName = 'categoryName',
  Name = 'name',
}

export type SubCategoryWhereInput = {
  AND?: InputMaybe<Array<SubCategoryWhereInput>>
  NOT?: InputMaybe<Array<SubCategoryWhereInput>>
  OR?: InputMaybe<Array<SubCategoryWhereInput>>
  category?: InputMaybe<CategoryRelationFilter>
  categoryName?: InputMaybe<StringFilter>
  employees?: InputMaybe<EmployeeListRelationFilter>
  jobs?: InputMaybe<JobListRelationFilter>
  name?: InputMaybe<StringFilter>
}

export type SubCategoryWhereUniqueInput = {
  name: Scalars['String']
}

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
}

export type UpdateAdminInput = {
  uid: Scalars['String']
}

export type UpdateApplicationInput = {
  employeeId?: InputMaybe<Scalars['String']>
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
  jobId?: InputMaybe<Scalars['Int']>
  status: ApplicationStatus
}

export type UpdateBookmarkInput = {
  employeeId?: InputMaybe<Scalars['String']>
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
  jobId?: InputMaybe<Scalars['Int']>
}

export type UpdateCategoryInput = {
  name: Scalars['String']
}

export type UpdateCompanyInput = {
  address?: InputMaybe<CreateAddressInput>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateEmployeeInput = {
  about?: InputMaybe<Scalars['String']>
  address?: InputMaybe<CreateAddressInput>
  contactInfo?: InputMaybe<Scalars['String']>
  skills?: InputMaybe<Array<Scalars['String']>>
  uid: Scalars['String']
}

export type UpdateEmployerInput = {
  uid: Scalars['String']
}

export type UpdateEmploymentInput = {
  employeeId?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  jobId?: InputMaybe<Scalars['Int']>
  startDate?: InputMaybe<Scalars['DateTime']>
}

export type UpdateFollowInput = {
  followerId?: InputMaybe<Scalars['String']>
  followingId?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
}

export type UpdateJobInput = {
  companyAddressId?: InputMaybe<Scalars['Int']>
  companyId?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  employerId?: InputMaybe<Scalars['String']>
  end?: InputMaybe<Scalars['DateTime']>
  id: Scalars['Int']
  salary?: InputMaybe<Scalars['Int']>
  shiftInformation?: InputMaybe<CreateShiftInformationInputWithoutJobId>
  start?: InputMaybe<Scalars['DateTime']>
  status?: InputMaybe<JobStatus>
  title?: InputMaybe<Scalars['String']>
  type?: InputMaybe<JobType>
}

export type UpdatePostInput = {
  authorId?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  image?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdateShiftInformationInput = {
  days?: InputMaybe<Array<Weekday>>
  endTime?: InputMaybe<Scalars['String']>
  jobId: Scalars['Int']
  startTime?: InputMaybe<Scalars['String']>
}

export type UpdateSubCategoryInput = {
  categoryName?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  employee: Employee
  employer: Employer
  followedBy: Array<Follow>
  following: Array<Follow>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type UserOrderByWithRelationInput = {
  Admin?: InputMaybe<AdminOrderByWithRelationInput>
  Post?: InputMaybe<PostOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>
  employer?: InputMaybe<EmployerOrderByWithRelationInput>
  followedBy?: InputMaybe<FollowOrderByRelationAggregateInput>
  following?: InputMaybe<FollowOrderByRelationAggregateInput>
  image?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  Admin?: InputMaybe<AdminRelationFilter>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  Post?: InputMaybe<PostListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  employee?: InputMaybe<EmployeeRelationFilter>
  employer?: InputMaybe<EmployerRelationFilter>
  followedBy?: InputMaybe<FollowListRelationFilter>
  following?: InputMaybe<FollowListRelationFilter>
  image?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']
}

export enum Weekday {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

export type UsersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<UserWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput
  >
  where?: InputMaybe<UserWhereInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>
}>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    image?: string | null
    uid: string
    createdAt: any
    name?: string | null
  }>
}

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereUniqueInput>
}>

export type UserQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'User'
    name?: string | null
    image?: string | null
    updatedAt: any
    createdAt: any
    uid: string
  }
}

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: { __typename?: 'User'; image?: string | null }
}

export type EmployerMeQueryVariables = Exact<{ [key: string]: never }>

export type EmployerMeQuery = {
  __typename?: 'Query'
  employerMe: {
    __typename?: 'Employer'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name?: string | null }
    company?: {
      __typename?: 'Company'
      name: string
      description?: string | null
      address: {
        __typename?: 'Address'
        address: string
        lat: number
        lng: number
      }
    } | null
  }
}

export type EmployeeMeQueryVariables = Exact<{ [key: string]: never }>

export type EmployeeMeQuery = {
  __typename?: 'Query'
  employeeMe?: {
    __typename?: 'Employee'
    uid: string
    about: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name?: string | null }
  } | null
}

export type CreateEmployerMutationVariables = Exact<{
  createEmployerInput: CreateEmployerInput
}>

export type CreateEmployerMutation = {
  __typename?: 'Mutation'
  createEmployer?: { __typename?: 'Employer'; uid: string } | null
}

export type CreateEmployeeMutationVariables = Exact<{
  createEmployeeInput: CreateEmployeeInput
}>

export type CreateEmployeeMutation = {
  __typename?: 'Mutation'
  createEmployee: { __typename?: 'Employee'; uid: string }
}

export type ApplicationsFragment = {
  __typename?: 'Application'
  status: ApplicationStatus
  job: { __typename?: 'Job'; id: number }
  employee: {
    __typename?: 'Employee'
    uid: string
    about: string
    skills: Array<{ __typename?: 'SubCategory'; name: string }>
    user: {
      __typename?: 'User'
      uid: string
      name?: string | null
      image?: string | null
    }
  }
}

export type EmployerJobDetailsFragment = {
  __typename?: 'Job'
  id: number
  salary?: number | null
  applicationsCount: number
  description: string
  end?: any | null
  start?: any | null
  status: JobStatus
  title: string
  type: JobType
  skills: Array<{
    __typename?: 'SubCategory'
    name: string
    category: { __typename?: 'Category'; name: string }
  }>
  address?: {
    __typename?: 'Address'
    address: string
    lat: number
    lng: number
  } | null
  company: {
    __typename?: 'Company'
    name: string
    address: {
      __typename?: 'Address'
      address: string
      lat: number
      lng: number
    }
  }
  applications: Array<{
    __typename?: 'Application'
    status: ApplicationStatus
    job: { __typename?: 'Job'; id: number }
    employee: {
      __typename?: 'Employee'
      uid: string
      about: string
      skills: Array<{ __typename?: 'SubCategory'; name: string }>
      user: {
        __typename?: 'User'
        uid: string
        name?: string | null
        image?: string | null
      }
    }
  }>
}

export type CompanyJobsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<JobWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<JobOrderByWithRelationInput> | JobOrderByWithRelationInput
  >
  where?: InputMaybe<JobWhereInput>
  distinct?: InputMaybe<Array<JobScalarFieldEnum> | JobScalarFieldEnum>
}>

export type CompanyJobsQuery = {
  __typename?: 'Query'
  companyJobs: Array<{
    __typename?: 'Job'
    id: number
    salary?: number | null
    applicationsCount: number
    description: string
    end?: any | null
    start?: any | null
    status: JobStatus
    title: string
    type: JobType
    skills: Array<{
      __typename?: 'SubCategory'
      name: string
      category: { __typename?: 'Category'; name: string }
    }>
    address?: {
      __typename?: 'Address'
      address: string
      lat: number
      lng: number
    } | null
    company: {
      __typename?: 'Company'
      name: string
      address: {
        __typename?: 'Address'
        address: string
        lat: number
        lng: number
      }
    }
    applications: Array<{
      __typename?: 'Application'
      status: ApplicationStatus
      job: { __typename?: 'Job'; id: number }
      employee: {
        __typename?: 'Employee'
        uid: string
        about: string
        skills: Array<{ __typename?: 'SubCategory'; name: string }>
        user: {
          __typename?: 'User'
          uid: string
          name?: string | null
          image?: string | null
        }
      }
    }>
  }>
}

export type EmployerJobsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<JobWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<JobOrderByWithRelationInput> | JobOrderByWithRelationInput
  >
  where?: InputMaybe<JobWhereInput>
  distinct?: InputMaybe<Array<JobScalarFieldEnum> | JobScalarFieldEnum>
}>

export type EmployerJobsQuery = {
  __typename?: 'Query'
  employerJobs: Array<{
    __typename?: 'Job'
    id: number
    salary?: number | null
    applicationsCount: number
    description: string
    end?: any | null
    start?: any | null
    status: JobStatus
    title: string
    type: JobType
    skills: Array<{
      __typename?: 'SubCategory'
      name: string
      category: { __typename?: 'Category'; name: string }
    }>
    address?: {
      __typename?: 'Address'
      address: string
      lat: number
      lng: number
    } | null
    company: {
      __typename?: 'Company'
      name: string
      address: {
        __typename?: 'Address'
        address: string
        lat: number
        lng: number
      }
    }
    applications: Array<{
      __typename?: 'Application'
      status: ApplicationStatus
      job: { __typename?: 'Job'; id: number }
      employee: {
        __typename?: 'Employee'
        uid: string
        about: string
        skills: Array<{ __typename?: 'SubCategory'; name: string }>
        user: {
          __typename?: 'User'
          uid: string
          name?: string | null
          image?: string | null
        }
      }
    }>
  }>
}

export type CreateJobMutationVariables = Exact<{
  createJobInput: CreateJobInput
}>

export type CreateJobMutation = {
  __typename?: 'Mutation'
  createJob: { __typename?: 'Job'; id: number }
}

export type EmployerCompanyQueryVariables = Exact<{ [key: string]: never }>

export type EmployerCompanyQuery = {
  __typename?: 'Query'
  employerCompany: {
    __typename?: 'Company'
    id: number
    name: string
    address: {
      __typename?: 'Address'
      id: number
      address: string
      lat: number
      lng: number
    }
  }
}

export type SubCategoriesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<SubCategoryWhereUniqueInput>
  orderBy?: InputMaybe<
    | Array<SubCategoryOrderByWithRelationInput>
    | SubCategoryOrderByWithRelationInput
  >
  where?: InputMaybe<SubCategoryWhereInput>
  distinct?: InputMaybe<
    Array<SubCategoryScalarFieldEnum> | SubCategoryScalarFieldEnum
  >
}>

export type SubCategoriesQuery = {
  __typename?: 'Query'
  subCategories: Array<{
    __typename?: 'SubCategory'
    name: string
    categoryName: string
  }>
}

export type SearchJobsQueryVariables = Exact<{
  locationFilter: LocationFilterInput
  jobFilter?: InputMaybe<JobFilter>
}>

export type SearchJobsQuery = {
  __typename?: 'Query'
  searchJobs: Array<{
    __typename?: 'Job'
    id: number
    description: string
    end?: any | null
    salary?: number | null
    start?: any | null
    status: JobStatus
    title: string
    type: JobType
    company: { __typename?: 'Company'; name: string }
    skills: Array<{
      __typename?: 'SubCategory'
      name: string
      categoryName: string
    }>
    address?: {
      __typename?: 'Address'
      id: number
      lat: number
      lng: number
      address: string
    } | null
  }>
  jobAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type JobQueryVariables = Exact<{
  where?: InputMaybe<JobWhereUniqueInput>
}>

export type JobQuery = {
  __typename?: 'Query'
  job: {
    __typename?: 'Job'
    id: number
    salary?: number | null
    contactInfo?: string | null
    start?: any | null
    status: JobStatus
    title: string
    type: JobType
    end?: any | null
    description: string
    createdAt: any
    skills: Array<{
      __typename?: 'SubCategory'
      name: string
      categoryName: string
    }>
    company: {
      __typename?: 'Company'
      name: string
      address: {
        __typename?: 'Address'
        address: string
        lat: number
        lng: number
      }
    }
    address?: {
      __typename?: 'Address'
      address: string
      lat: number
      lng: number
    } | null
    employer?: {
      __typename?: 'Employer'
      uid: string
      user: { __typename?: 'User'; image?: string | null; name?: string | null }
    } | null
  }
}

export type CompanyQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhereUniqueInput>
}>

export type CompanyQuery = {
  __typename?: 'Query'
  company: {
    __typename?: 'Company'
    id: number
    name: string
    description?: string | null
    address: {
      __typename?: 'Address'
      lat: number
      lng: number
      address: string
    }
    jobs: Array<{
      __typename?: 'Job'
      id: number
      title: string
      status: JobStatus
      type: JobType
      skills: Array<{ __typename?: 'SubCategory'; name: string }>
    }>
    employers: Array<{
      __typename?: 'Employer'
      uid: string
      user: { __typename?: 'User'; name?: string | null; image?: string | null }
    }>
  }
}

export type AddEmployerMutationVariables = Exact<{
  addEmployerInput: AddEmployerInput
}>

export type AddEmployerMutation = {
  __typename?: 'Mutation'
  addEmployer: { __typename?: 'Company'; id: number }
}

export type CreateCompanyMutationVariables = Exact<{
  createCompanyInput: CreateCompanyInput
}>

export type CreateCompanyMutation = {
  __typename?: 'Mutation'
  createCompany: { __typename?: 'Company'; id: number }
}

export type BookmarkQueryVariables = Exact<{
  where?: InputMaybe<BookmarkWhereUniqueInput>
}>

export type BookmarkQuery = {
  __typename?: 'Query'
  bookmark: { __typename?: 'Bookmark'; jobId: number; employeeId: string }
}

export type CreateBookmarkMutationVariables = Exact<{
  createBookmarkInput: CreateBookmarkInput
}>

export type CreateBookmarkMutation = {
  __typename?: 'Mutation'
  createBookmark: { __typename?: 'Bookmark'; jobId: number; employeeId: string }
}

export type RemoveBookmarkMutationVariables = Exact<{
  where?: InputMaybe<BookmarkWhereUniqueInput>
}>

export type RemoveBookmarkMutation = {
  __typename?: 'Mutation'
  removeBookmark: { __typename?: 'Bookmark'; employeeId: string; jobId: number }
}

export type JobFragFragment = {
  __typename?: 'Job'
  id: number
  type: JobType
  title: string
  status: JobStatus
  start?: any | null
  salary?: number | null
  end?: any | null
  companyId: number
  description: string
  createdAt: any
  skills: Array<{ __typename?: 'SubCategory'; name: string }>
  address?: {
    __typename?: 'Address'
    lat: number
    lng: number
    address: string
  } | null
}

export type MyBookmarksQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<BookmarkWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<BookmarkOrderByWithRelationInput> | BookmarkOrderByWithRelationInput
  >
  where?: InputMaybe<BookmarkWhereInput>
  distinct?: InputMaybe<
    Array<BookmarkScalarFieldEnum> | BookmarkScalarFieldEnum
  >
}>

export type MyBookmarksQuery = {
  __typename?: 'Query'
  myBookmarks: Array<{
    __typename?: 'Bookmark'
    job: {
      __typename?: 'Job'
      id: number
      type: JobType
      title: string
      status: JobStatus
      start?: any | null
      salary?: number | null
      end?: any | null
      companyId: number
      description: string
      createdAt: any
      skills: Array<{ __typename?: 'SubCategory'; name: string }>
      address?: {
        __typename?: 'Address'
        lat: number
        lng: number
        address: string
      } | null
    }
  }>
}

export type MyApplicationsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<ApplicationWhereUniqueInput>
  orderBy?: InputMaybe<
    | Array<ApplicationOrderByWithRelationInput>
    | ApplicationOrderByWithRelationInput
  >
  where?: InputMaybe<ApplicationWhereInput>
  distinct?: InputMaybe<
    Array<ApplicationScalarFieldEnum> | ApplicationScalarFieldEnum
  >
}>

export type MyApplicationsQuery = {
  __typename?: 'Query'
  myApplications: Array<{
    __typename?: 'Application'
    job: {
      __typename?: 'Job'
      id: number
      type: JobType
      title: string
      status: JobStatus
      start?: any | null
      salary?: number | null
      end?: any | null
      companyId: number
      description: string
      createdAt: any
      skills: Array<{ __typename?: 'SubCategory'; name: string }>
      address?: {
        __typename?: 'Address'
        lat: number
        lng: number
        address: string
      } | null
    }
  }>
}

export type CompanyApplicationsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<ApplicationWhereUniqueInput>
  orderBy?: InputMaybe<
    | Array<ApplicationOrderByWithRelationInput>
    | ApplicationOrderByWithRelationInput
  >
  where?: InputMaybe<ApplicationWhereInput>
  distinct?: InputMaybe<
    Array<ApplicationScalarFieldEnum> | ApplicationScalarFieldEnum
  >
}>

export type CompanyApplicationsQuery = {
  __typename?: 'Query'
  companyApplications: Array<{
    __typename?: 'Application'
    status: ApplicationStatus
    job: {
      __typename?: 'Job'
      id: number
      type: JobType
      title: string
      status: JobStatus
      start?: any | null
      salary?: number | null
      end?: any | null
      companyId: number
      description: string
      createdAt: any
      skills: Array<{ __typename?: 'SubCategory'; name: string }>
      address?: {
        __typename?: 'Address'
        lat: number
        lng: number
        address: string
      } | null
    }
    employee: {
      __typename?: 'Employee'
      uid: string
      user: { __typename?: 'User'; name?: string | null; image?: string | null }
    }
  }>
}

export type CreateApplicationMutationVariables = Exact<{
  createApplicationInput: CreateApplicationInput
}>

export type CreateApplicationMutation = {
  __typename?: 'Mutation'
  createApplication: {
    __typename?: 'Application'
    jobId: number
    employeeId: string
    status: ApplicationStatus
  }
}

export type RemoveApplicationMutationVariables = Exact<{
  where?: InputMaybe<ApplicationWhereUniqueInput>
}>

export type RemoveApplicationMutation = {
  __typename?: 'Mutation'
  removeApplication: {
    __typename?: 'Application'
    employeeId: string
    jobId: number
  }
}

export type ApplicationQueryVariables = Exact<{
  where?: InputMaybe<ApplicationWhereUniqueInput>
}>

export type ApplicationQuery = {
  __typename?: 'Query'
  application: {
    __typename?: 'Application'
    jobId: number
    employeeId: string
    status: ApplicationStatus
  }
}

export type UpdateApplicationMutationVariables = Exact<{
  updateApplicationInput: UpdateApplicationInput
}>

export type UpdateApplicationMutation = {
  __typename?: 'Mutation'
  updateApplication: {
    __typename?: 'Application'
    status: ApplicationStatus
    jobId: number
  }
}

export type ApplicationsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<ApplicationWhereUniqueInput>
  orderBy?: InputMaybe<
    | Array<ApplicationOrderByWithRelationInput>
    | ApplicationOrderByWithRelationInput
  >
  where?: InputMaybe<ApplicationWhereInput>
  distinct?: InputMaybe<
    Array<ApplicationScalarFieldEnum> | ApplicationScalarFieldEnum
  >
}>

export type ApplicationsQuery = {
  __typename?: 'Query'
  applications: Array<{
    __typename?: 'Application'
    status: ApplicationStatus
    job: { __typename?: 'Job'; id: number }
    employee: {
      __typename?: 'Employee'
      uid: string
      about: string
      skills: Array<{ __typename?: 'SubCategory'; name: string }>
      user: {
        __typename?: 'User'
        uid: string
        name?: string | null
        image?: string | null
      }
    }
  }>
}

export type SearchEmployeesQueryVariables = Exact<{
  locationFilter: LocationFilterInput
  employeeFilter?: InputMaybe<EmployeeFilter>
}>

export type SearchEmployeesQuery = {
  __typename?: 'Query'
  searchEmployees: Array<{
    __typename?: 'Employee'
    about: string
    skills: Array<{ __typename?: 'SubCategory'; name: string }>
    address: {
      __typename?: 'Address'
      lng: number
      lat: number
      address: string
    }
    user: {
      __typename?: 'User'
      uid: string
      name?: string | null
      image?: string | null
    }
  }>
  employeeAggregate: { __typename?: 'AggregateCountOutput'; count: number }
}

export type EmployeeQueryVariables = Exact<{
  where?: InputMaybe<EmployeeWhereUniqueInput>
}>

export type EmployeeQuery = {
  __typename?: 'Query'
  employee: {
    __typename?: 'Employee'
    createdAt: any
    uid: string
    contactInfo?: string | null
    about: string
    user: { __typename?: 'User'; name?: string | null; image?: string | null }
    skills: Array<{ __typename?: 'SubCategory'; name: string }>
    address: {
      __typename?: 'Address'
      lat: number
      lng: number
      address: string
    }
  }
}

export type CreateFollowMutationVariables = Exact<{
  createFollowInput: CreateFollowInput
}>

export type CreateFollowMutation = {
  __typename?: 'Mutation'
  createFollow: {
    __typename?: 'Follow'
    id: number
    followingId: string
    followerId: string
  }
}

export type FollowQueryVariables = Exact<{
  where?: InputMaybe<FollowWhereUniqueInput>
}>

export type FollowQuery = {
  __typename?: 'Query'
  follow: {
    __typename?: 'Follow'
    id: number
    followingId: string
    followerId: string
    createdAt: any
  }
}

export type RemoveFollowMutationVariables = Exact<{
  where?: InputMaybe<FollowWhereUniqueInput>
}>

export type RemoveFollowMutation = {
  __typename?: 'Mutation'
  removeFollow: { __typename?: 'Follow'; id: number }
}

export type FollowInfoFragment = {
  __typename?: 'User'
  name?: string | null
  uid: string
  image?: string | null
  createdAt: any
}

export type FollowedByMeQueryVariables = Exact<{ [key: string]: never }>

export type FollowedByMeQuery = {
  __typename?: 'Query'
  followedByMe: Array<{
    __typename?: 'Follow'
    id: number
    createdAt: any
    following: {
      __typename?: 'User'
      name?: string | null
      uid: string
      image?: string | null
      createdAt: any
    }
  }>
}

export type FollowersQueryVariables = Exact<{ [key: string]: never }>

export type FollowersQuery = {
  __typename?: 'Query'
  followers: Array<{
    __typename?: 'Follow'
    id: number
    createdAt: any
    follower: {
      __typename?: 'User'
      name?: string | null
      uid: string
      image?: string | null
      createdAt: any
    }
  }>
}

export type FollowSuggestionsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<UserWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput
  >
  where?: InputMaybe<UserWhereInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>
}>

export type FollowSuggestionsQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'User'
    name?: string | null
    uid: string
    image?: string | null
    createdAt: any
  }>
}

export type EmployeeStatsQueryVariables = Exact<{ [key: string]: never }>

export type EmployeeStatsQuery = {
  __typename?: 'Query'
  employeeStats: {
    __typename?: 'EmployeeStats'
    followers: number
    followedBy: number
    bookmarks: number
    applications: number
  }
}

export type CompanyStatsQueryVariables = Exact<{ [key: string]: never }>

export type CompanyStatsQuery = {
  __typename?: 'Query'
  companyStats: {
    __typename?: 'EmployerStats'
    jobs: Array<{
      __typename?: 'JobCountByStatus'
      name: JobStatus
      count: number
    }>
    applications: Array<{
      __typename?: 'ApplicationCountByStatus'
      name: ApplicationStatus
      count: number
    }>
  }
}

export type CompanyEmployeesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<EmployeeWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<EmployeeOrderByWithRelationInput> | EmployeeOrderByWithRelationInput
  >
  where?: InputMaybe<EmployeeWhereInput>
  distinct?: InputMaybe<
    Array<EmployeeScalarFieldEnum> | EmployeeScalarFieldEnum
  >
}>

export type CompanyEmployeesQuery = {
  __typename?: 'Query'
  companyEmployees: Array<{
    __typename?: 'Employee'
    createdAt: any
    user: {
      __typename?: 'User'
      uid: string
      name?: string | null
      image?: string | null
    }
    skills: Array<{ __typename?: 'SubCategory'; name: string }>
  }>
}

export type CompanyEmployersQueryVariables = Exact<{ [key: string]: never }>

export type CompanyEmployersQuery = {
  __typename?: 'Query'
  companyEmployers: Array<{
    __typename?: 'Employer'
    createdAt: any
    user: {
      __typename?: 'User'
      name?: string | null
      image?: string | null
      uid: string
    }
  }>
}

export type CreateEmploymentMutationVariables = Exact<{
  createEmploymentInput: CreateEmploymentInput
}>

export type CreateEmploymentMutation = {
  __typename?: 'Mutation'
  createEmployment: { __typename?: 'Employment'; id: number }
}

export type AcceptOfferMutationVariables = Exact<{
  updateApplicationInput: UpdateApplicationInput
}>

export type AcceptOfferMutation = {
  __typename?: 'Mutation'
  acceptOffer: { __typename?: 'Application'; jobId: number; employeeId: string }
}

export type MyEmploymentsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<
    | Array<EmploymentOrderByWithRelationInput>
    | EmploymentOrderByWithRelationInput
  >
  where?: InputMaybe<EmploymentWhereInput>
}>

export type MyEmploymentsQuery = {
  __typename?: 'Query'
  myEmployments: Array<{
    __typename?: 'Employment'
    id: number
    startDate: any
    endDate?: any | null
    job: {
      __typename?: 'Job'
      id: number
      title: string
      company: { __typename?: 'Company'; name: string }
      shiftInformation?: {
        __typename?: 'ShiftInformation'
        startTime: string
        endTime: string
        days?: Array<Weekday> | null
      } | null
    }
  }>
}

export const namedOperations = {
  Query: {
    Users: 'Users',
    User: 'User',
    EmployerMe: 'EmployerMe',
    EmployeeMe: 'EmployeeMe',
    CompanyJobs: 'CompanyJobs',
    EmployerJobs: 'EmployerJobs',
    EmployerCompany: 'EmployerCompany',
    SubCategories: 'SubCategories',
    SearchJobs: 'SearchJobs',
    Job: 'Job',
    Company: 'Company',
    Bookmark: 'Bookmark',
    myBookmarks: 'myBookmarks',
    myApplications: 'myApplications',
    companyApplications: 'companyApplications',
    application: 'application',
    Applications: 'Applications',
    SearchEmployees: 'SearchEmployees',
    Employee: 'Employee',
    follow: 'follow',
    followedByMe: 'followedByMe',
    followers: 'followers',
    followSuggestions: 'followSuggestions',
    EmployeeStats: 'EmployeeStats',
    CompanyStats: 'CompanyStats',
    CompanyEmployees: 'CompanyEmployees',
    CompanyEmployers: 'CompanyEmployers',
    MyEmployments: 'MyEmployments',
  },
  Mutation: {
    CreateUser: 'CreateUser',
    createEmployer: 'createEmployer',
    createEmployee: 'createEmployee',
    createJob: 'createJob',
    addEmployer: 'addEmployer',
    createCompany: 'createCompany',
    createBookmark: 'createBookmark',
    removeBookmark: 'removeBookmark',
    createApplication: 'createApplication',
    removeApplication: 'removeApplication',
    updateApplication: 'updateApplication',
    createFollow: 'createFollow',
    removeFollow: 'removeFollow',
    createEmployment: 'createEmployment',
    acceptOffer: 'acceptOffer',
  },
  Fragment: {
    applications: 'applications',
    employerJobDetails: 'employerJobDetails',
    jobFrag: 'jobFrag',
    followInfo: 'followInfo',
  },
}
export const ApplicationsFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'applications' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Application' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'job' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ApplicationsFragment, unknown>
export const EmployerJobDetailsFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'employerJobDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'applications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'applications' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'applicationsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'applications' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Application' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'job' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployerJobDetailsFragment, unknown>
export const JobFragFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'jobFrag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JobFragFragment, unknown>
export const FollowInfoFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'followInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FollowInfoFragment, unknown>
export const UsersDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Users' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'UserOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'UserScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
export const UserDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>
export const CreateUserDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createUserInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>
export const EmployerMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EmployerMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employerMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'company' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lat' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lng' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployerMeQuery, EmployerMeQueryVariables>
export const EmployeeMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EmployeeMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employeeMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployeeMeQuery, EmployeeMeQueryVariables>
export const CreateEmployerDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createEmployer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createEmployerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateEmployerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEmployer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createEmployerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createEmployerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateEmployerMutation,
  CreateEmployerMutationVariables
>
export const CreateEmployeeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createEmployee' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createEmployeeInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateEmployeeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEmployee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createEmployeeInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createEmployeeInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables
>
export const CompanyJobsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CompanyJobs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'JobWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'JobOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'JobWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'JobScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyJobs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'employerJobDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'applications' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Application' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'job' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'employerJobDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'applications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'applications' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'applicationsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompanyJobsQuery, CompanyJobsQueryVariables>
export const EmployerJobsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EmployerJobs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'JobWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'JobOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'JobWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'JobScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employerJobs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'employerJobDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'applications' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Application' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'job' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'employerJobDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'applications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'applications' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'applicationsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployerJobsQuery, EmployerJobsQueryVariables>
export const CreateJobDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createJob' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createJobInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateJobInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createJob' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createJobInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createJobInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateJobMutation, CreateJobMutationVariables>
export const EmployerCompanyDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EmployerCompany' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employerCompany' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EmployerCompanyQuery,
  EmployerCompanyQueryVariables
>
export const SubCategoriesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SubCategories' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SubCategoryWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'SubCategoryOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SubCategoryWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'SubCategoryScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subCategories' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'categoryName' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubCategoriesQuery, SubCategoriesQueryVariables>
export const SearchJobsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchJobs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locationFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'jobFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'JobFilter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchJobs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'jobFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'jobFilter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'company' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'categoryName' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'end' } },
                { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
                { kind: 'Field', name: { kind: 'Name', value: 'start' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'jobAggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'jobFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'jobFilter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchJobsQuery, SearchJobsQueryVariables>
export const JobDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Job' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'JobWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'job' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
                { kind: 'Field', name: { kind: 'Name', value: 'contactInfo' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'categoryName' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'start' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'end' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'company' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lat' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lng' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'employer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JobQuery, JobQueryVariables>
export const CompanyDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Company' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'jobs' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'skills' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'employers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompanyQuery, CompanyQueryVariables>
export const AddEmployerDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addEmployer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'addEmployerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddEmployerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addEmployer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'addEmployerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'addEmployerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddEmployerMutation, AddEmployerMutationVariables>
export const CreateCompanyDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createCompany' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createCompanyInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateCompanyInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCompany' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createCompanyInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createCompanyInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>
export const BookmarkDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Bookmark' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookmarkWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookmark' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookmarkQuery, BookmarkQueryVariables>
export const CreateBookmarkDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createBookmark' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createBookmarkInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateBookmarkInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBookmark' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createBookmarkInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createBookmarkInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBookmarkMutation,
  CreateBookmarkMutationVariables
>
export const RemoveBookmarkDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'removeBookmark' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookmarkWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeBookmark' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveBookmarkMutation,
  RemoveBookmarkMutationVariables
>
export const MyBookmarksDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myBookmarks' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookmarkWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BookmarkOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookmarkWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'BookmarkScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myBookmarks' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'job' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'jobFrag' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'jobFrag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyBookmarksQuery, MyBookmarksQueryVariables>
export const MyApplicationsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myApplications' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ApplicationOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ApplicationScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myApplications' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'job' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'jobFrag' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'jobFrag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyApplicationsQuery, MyApplicationsQueryVariables>
export const CompanyApplicationsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'companyApplications' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ApplicationOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ApplicationScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyApplications' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'job' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'jobFrag' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'employee' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'jobFrag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Job' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'skills' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'salary' } },
          { kind: 'Field', name: { kind: 'Name', value: 'end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CompanyApplicationsQuery,
  CompanyApplicationsQueryVariables
>
export const CreateApplicationDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createApplication' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createApplicationInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateApplicationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createApplication' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createApplicationInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createApplicationInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateApplicationMutation,
  CreateApplicationMutationVariables
>
export const RemoveApplicationDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'removeApplication' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeApplication' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveApplicationMutation,
  RemoveApplicationMutationVariables
>
export const ApplicationDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'application' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'application' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ApplicationQuery, ApplicationQueryVariables>
export const UpdateApplicationDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateApplication' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateApplicationInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateApplicationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateApplication' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateApplicationInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateApplicationInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateApplicationMutation,
  UpdateApplicationMutationVariables
>
export const ApplicationsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Applications' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ApplicationOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ApplicationWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ApplicationScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'applications' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'applications' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'applications' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Application' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'job' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ApplicationsQuery, ApplicationsQueryVariables>
export const SearchEmployeesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchEmployees' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locationFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'employeeFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EmployeeFilter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchEmployees' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'employeeFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'employeeFilter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employeeAggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'employeeFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'employeeFilter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SearchEmployeesQuery,
  SearchEmployeesQueryVariables
>
export const EmployeeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Employee' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EmployeeWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employee' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'contactInfo' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployeeQuery, EmployeeQueryVariables>
export const CreateFollowDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createFollow' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createFollowInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateFollowInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createFollow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createFollowInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createFollowInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'followingId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'followerId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateFollowMutation,
  CreateFollowMutationVariables
>
export const FollowDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'follow' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'FollowWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'follow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'followingId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'followerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FollowQuery, FollowQueryVariables>
export const RemoveFollowDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'removeFollow' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'FollowWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeFollow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveFollowMutation,
  RemoveFollowMutationVariables
>
export const FollowedByMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'followedByMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followedByMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'following' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'followInfo' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'followInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FollowedByMeQuery, FollowedByMeQueryVariables>
export const FollowersDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'followers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'follower' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'followInfo' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'followInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FollowersQuery, FollowersQueryVariables>
export const FollowSuggestionsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'followSuggestions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'UserOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'UserScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'followInfo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'followInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FollowSuggestionsQuery,
  FollowSuggestionsQueryVariables
>
export const EmployeeStatsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EmployeeStats' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'employeeStats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
                { kind: 'Field', name: { kind: 'Name', value: 'followedBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bookmarks' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'applications' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployeeStatsQuery, EmployeeStatsQueryVariables>
export const CompanyStatsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CompanyStats' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyStats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'jobs' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'applications' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompanyStatsQuery, CompanyStatsQueryVariables>
export const CompanyEmployeesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CompanyEmployees' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EmployeeWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'EmployeeOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EmployeeWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'EmployeeScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyEmployees' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'skills' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CompanyEmployeesQuery,
  CompanyEmployeesQueryVariables
>
export const CompanyEmployersDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CompanyEmployers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyEmployers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CompanyEmployersQuery,
  CompanyEmployersQueryVariables
>
export const CreateEmploymentDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createEmployment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createEmploymentInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateEmploymentInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEmployment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createEmploymentInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createEmploymentInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateEmploymentMutation,
  CreateEmploymentMutationVariables
>
export const AcceptOfferDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'acceptOffer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateApplicationInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateApplicationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'acceptOffer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateApplicationInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateApplicationInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jobId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'employeeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AcceptOfferMutation, AcceptOfferMutationVariables>
export const MyEmploymentsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyEmployments' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'EmploymentOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'EmploymentWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myEmployments' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'job' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'company' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shiftInformation' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'startTime' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'endTime' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'days' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyEmploymentsQuery, MyEmploymentsQueryVariables>
