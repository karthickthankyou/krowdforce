import { FormProviderCreateCompany } from '@krowdforce/forms/createEmployer'
import { CreateCompany } from '../../../components/organisms/CreateCompany'

export default async function CreateCompanyPage() {
  return (
    <FormProviderCreateCompany>
      <CreateCompany />
    </FormProviderCreateCompany>
  )
}
