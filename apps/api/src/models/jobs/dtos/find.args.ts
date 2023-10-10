import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
  InputType,
  PickType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { JobOrderByWithRelationInput } from './order-by.args'
import { JobWhereInput, JobWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.JobScalarFieldEnum, {
  name: 'JobScalarFieldEnum',
})

@ArgsType()
class FindManyJobArgsStrict
  implements
    RestrictProperties<
      FindManyJobArgsStrict,
      Omit<Prisma.JobFindManyArgs, 'include' | 'select'>
    >
{
  where: JobWhereInput
  orderBy: JobOrderByWithRelationInput[]
  cursor: JobWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.JobScalarFieldEnum])
  distinct: Prisma.JobScalarFieldEnum[]
}

@ArgsType()
export class FindManyJobArgs extends PartialType(FindManyJobArgsStrict) {}

@ArgsType()
export class FindUniqueJobArgs {
  @Field({ nullable: true })
  where: JobWhereUniqueInput
}

@InputType()
export class JobFilter extends PickType(
  FindManyJobArgs,
  ['where', 'orderBy', 'skip', 'take'],
  InputType,
) {}
