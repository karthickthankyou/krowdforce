import { z } from 'zod'

export const formSchemaCreateEmployer = z.object({
  companyName: z.string(),
  address: z.object({
    lat: z.number(),
    lng: z.number(),
    address: z.string(),
  }),
})

export const formSchemaCreateUser = z.object({
  email: z.string().email(),
  uid: z.string().min(2),
  count: z.coerce.number(),
  image: z.string().optional(),
  name: z.string().optional(),
})
