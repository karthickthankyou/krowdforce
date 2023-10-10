import { CompanyEmployersQuery } from '@krowdforce/network/src/generated'
import Image from 'next/image'
import React from 'react'

export const EmployerCard: React.FC<
  CompanyEmployersQuery['companyEmployers'][0]
> = ({ user, createdAt }) => {
  return (
    <div className=" rounded-lg max-w-sm">
      <Image
        width={600}
        height={600}
        src={user.image || ''}
        alt={user.name || ''}
        className="w-full aspect-square rounded-full shadow-md "
      />
      <div className="p-2 mt-2 space-y-1 flex flex-col items-center">
        <h3 className=" text-lg font-semibold ">{user.name}</h3>
        <p className=" text-gray-600 ">UID: {user.uid}</p>
        <p className=" text-gray-500 ">
          Joined: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
