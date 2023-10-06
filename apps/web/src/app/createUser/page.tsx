import { CreateUser } from '@/components/FormCreateUser'
import { authOptions } from '../api/auth/authOptions'
import Link from 'next/link'
import { ServerOneUserHardQuery } from '@/components/ServerOneUserHardQuery'

export default async function User() {
  return (
    <div>
      <ServerOneUserHardQuery />
      <CreateUser />
    </div>
  )
}
