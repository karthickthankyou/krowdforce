import { CompanyTabChoices } from '@krowdforce/util/constants'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/atoms/tabs'

export default async function Company() {
  return (
    <Tabs defaultValue={CompanyTabChoices.Jobs} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 gap-2">
        <TabsTrigger value={CompanyTabChoices.Jobs}>Jobs</TabsTrigger>
        <TabsTrigger value={CompanyTabChoices.Employers}>Employers</TabsTrigger>
      </TabsList>
      <TabsContent value={CompanyTabChoices.Jobs}>Jobs</TabsContent>
      <TabsContent value={CompanyTabChoices.Employers}>Employers</TabsContent>
    </Tabs>
  )
}
