'use server'

import {
  CreateAttendanceDocument,
  CreateAttendanceInput,
  UpdateAttendanceDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLInfer } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'

export async function createAttendance({
  clockIn,
  employeeId,
  jobId,
}: CreateAttendanceInput) {
  const user = await getServerSession(authOptions)
  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }

  const { data, error } = await fetchGraphQLInfer(CreateAttendanceDocument, {
    createAttendanceInput: {
      clockIn,
      employeeId,
      jobId,
    },
  })
  if (data?.createAttendance) {
    revalidateTag(namedOperations.Query.MyEmployments)
    revalidateTag(namedOperations.Query.Attendance)
    return data
  }
  return error
}

export async function updateAttendance(formData: FormData) {
  const attendanceId = formData.get('attendanceId')
  if (!attendanceId) {
    throw new Error('attendanceId not valid')
  }
  console.log('attendanceId', attendanceId)
  const { data, error } = await fetchGraphQLInfer(UpdateAttendanceDocument, {
    updateAttendanceInput: {
      id: +attendanceId,
      clockOut: new Date(),
    },
  })

  if (error) {
    console.log('error', error)
  }
  if (data?.updateAttendance) {
    revalidateTag(namedOperations.Query.MyEmployments)
    revalidateTag(namedOperations.Query.MyAttendancesClockOuts)
    return data
  }
  return error
}
