import { authOptions } from '../api/auth/authOptions'
import Link from 'next/link'
import { ServerOneUserHardQuery } from '../../components/ServerOneUserHardQuery'
import { CreateUser } from '../../components/FormCreateUser'

export default async function User() {
  return (
    <div>
      <ServerOneUserHardQuery />
      <CreateUser />
    </div>
  )
}
