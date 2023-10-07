import { authOptions } from '../api/auth/authOptions'
import Link from 'next/link'
import { TestFetchUsers } from '../../components/ServerOneUserHardQuery'
import { CreateUser } from '../../components/FormCreateUser'

export default async function User() {
  return (
    <div>
      <TestFetchUsers />
      <CreateUser />
    </div>
  )
}
