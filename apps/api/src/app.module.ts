import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './common/auth/auth.module'
import { PrismaModule } from './common/prisma/prisma.module'
import { AddressesModule } from './models/addresses/addresses.module'
import { AdminsModule } from './models/admins/admins.module'
import { CategoriesModule } from './models/categories/categories.module'
import { CompaniesModule } from './models/companies/companies.module'
import { EmployeesModule } from './models/employees/employees.module'
import { EmployersModule } from './models/employers/employers.module'
import { JobsModule } from './models/jobs/jobs.module'
import { SubCategoriesModule } from './models/sub-categories/sub-categories.module'
import { UsersModule } from './models/users/users.module'
import { ApplicationsModule } from './models/applications/applications.module'
import { BookmarksModule } from './models/bookmarks/bookmarks.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      introspection: true,
    }),

    AuthModule,
    PrismaModule,

    UsersModule,
    AdminsModule,
    EmployeesModule,
    EmployersModule,
    CompaniesModule,
    JobsModule,
    AddressesModule,
    CategoriesModule,
    SubCategoriesModule,

    ApplicationsModule,
    BookmarksModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
