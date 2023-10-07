import { z } from 'zod'

export const formSchemaCreateEmployer = z.object({
  companyName: z.string(),
})

export type FormTypeCreateEmployer = z.infer<typeof formSchemaCreateEmployer>
