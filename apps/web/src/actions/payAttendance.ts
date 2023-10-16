'use server'

import {
  PayAttendanceDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQL } from '../app/util/fetch'

export async function payAttendance(formData: FormData) {
  const attendanceId = formData.get('attendanceId')
  if (!attendanceId) {
    throw new Error('attendanceId not valid')
  }

  const { data, error } = await fetchGraphQL({
    document: PayAttendanceDocument,
    variables: {
      attendanceId: +attendanceId,
    },
  })
  if (data?.payAttendance) {
    revalidateTag(namedOperations.Query.CompanyPayments)
    return data
  }
  return error
}
