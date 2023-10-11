import { EmployerMeQuery } from '@krowdforce/network/src/generated'
import Link from 'next/link'
import { Title } from '../atoms/typography'
import { EmployerJobs } from './EmployerJobs'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/atoms/tabs'
import { CompanyTabChoices } from '@krowdforce/util/constants'
import { Employers } from './Employers'
import { AddEmployerDialog } from '../organisms/AddEmployerDialog'
import { CompanyJobs } from './CompanyJobs'

export const Employer = ({ employerMe }: EmployerMeQuery) => {
  return (
    <div className="my-4">
      {' '}
      <div className="text-xl font-semibold">{employerMe?.company?.name}</div>
      <div>{employerMe?.company?.description}</div>
      <div className="text-gray">{employerMe?.company?.address.address}</div>
      <Link
        href={'/employer/search'}
        className="my-4 underline underline-offset-4 block font-semibold"
      >
        Search employees
      </Link>
      <Tabs defaultValue={CompanyTabChoices.Jobs} className="mt-8">
        <TabsList className="flex justify-start gap-2">
          <TabsTrigger value={CompanyTabChoices.Jobs}>Jobs</TabsTrigger>

          <TabsTrigger value={CompanyTabChoices.Employers}>
            Employers
          </TabsTrigger>
        </TabsList>
        <TabsContent value={CompanyTabChoices.Jobs}>
          <div className="flex justify-between mt-6">
            <Title>Jobs</Title>
            <Link
              href={'/employer/jobs/new'}
              className="block mt-2 underline underline-offset-4"
            >
              + New job
            </Link>
          </div>
          <CompanyJobs />
        </TabsContent>

        <TabsContent value={CompanyTabChoices.Employers}>
          <div className="flex justify-between mt-6">
            <Title>Employers</Title>
            <AddEmployerDialog />
          </div>

          <Employers />
        </TabsContent>
      </Tabs>
    </div>
  )
}
