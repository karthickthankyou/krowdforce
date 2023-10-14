import { JobStatus, JobType, Weekday } from '@krowdforce/network/src/generated'
import { z } from 'zod'

export const addressSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string(),
})

export const formSchemaCreateEmployment = z.object({
  startDate: z.string(),
  jobId: z.number(),
  employeeId: z.string(),
})

export const formSchemaCreateCompany = z.object({
  name: z.string(),
  description: z.string().optional(),
  address: addressSchema,
})

export const formSchemaCreateEmployee = z.object({
  about: z.string(),
  contactInfo: z.string().optional(),
  skills: z.array(z.string()),
  address: addressSchema,
})

export const formSchemaCreateUser = z.object({
  email: z.string().email(),
  uid: z.string().min(2),
  count: z.coerce.number(),
  image: z.string().optional(),
  name: z.string().optional(),
})

export const formSchemaShiftInfomation = z.object({
  days: z.nativeEnum(Weekday).array().min(1, 'Select at least one day.'),
  endTime: z
    .string()
    .refine((value) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value), {
      message: 'Invalid time format, expected HH:MM',
    }),
  startTime: z
    .string()
    .refine((value) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value), {
      message: 'Invalid time format, expected HH:MM',
    }),
})

export const formSchemaCreateJob = z.object({
  title: z.string(),
  description: z.string(),
  address: addressSchema.optional(),
  companyAddressId: z.number().optional(),
  status: z.nativeEnum(JobStatus),
  type: z.nativeEnum(JobType),
  start: z.string().optional(),
  end: z.string().optional(),
  payPerHour: z.coerce.number(),
  skills: z.array(z.object({ name: z.string() })),
  companyId: z.number(),
  employerId: z.string(),
  shiftInformation: formSchemaShiftInfomation.optional(),
  contactInfo: z.string().optional(),
})
