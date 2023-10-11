import { JobStatus, JobType } from '@krowdforce/network/src/generated'
import { z } from 'zod'

export const addressSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string(),
})

export const formSchemaCreateCompany = z.object({
  name: z.string(),
  description: z.string().optional(),
  address: addressSchema,
})

export const formSchemaCreateEmployee = z.object({
  about: z.string(),
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

export const formSchemaCreateJob = z.object({
  title: z.string(),
  description: z.string(),
  address: addressSchema.optional(),
  companyAddressId: z.number().optional(),
  status: z.nativeEnum(JobStatus),
  type: z.nativeEnum(JobType),
  start: z.string().optional(),
  end: z.string().optional(),
  salary: z.coerce.number().optional(),
  skills: z.array(z.object({ name: z.string() })),
  companyId: z.number(),
  employerId: z.string(),
})
