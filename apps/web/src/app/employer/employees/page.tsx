import { Title } from '../../../components/atoms/typography'
import { AcceptedOffers } from '../../../components/templates/AcceptedOffers'
import { CompanyEmployees } from '../../../components/templates/CompanyEmployees'

export default async function ApplicationPage() {
  return (
    <main>
      <div className="flex justify-between mt-6">
        <Title>Employees</Title>
      </div>
      <AcceptedOffers />
      <CompanyEmployees />
    </main>
  )
}
