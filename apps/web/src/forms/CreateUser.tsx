import { z } from 'zod'

export const formSchemaCreateUser = z.object({
  email: z.string().email(),
  uid: z.string().min(2),
  count: z.coerce.number(),
  image: z.string().optional(),
  name: z.string().optional(),
})

export type FormTypeCreateUser = z.infer<typeof formSchemaCreateUser>
