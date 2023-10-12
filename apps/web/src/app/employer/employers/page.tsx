import { Title } from '../../../components/atoms/typography'
import { AddEmployerDialog } from '../../../components/organisms/AddEmployerDialog'
import { Employers } from '../../../components/templates/Employers'

export default async function ApplicationPage() {
  return (
    <main>
      <div className="flex justify-between mt-6">
        <Title>Employers</Title>
        <AddEmployerDialog />
      </div>

      <Employers />
    </main>
  )
}
