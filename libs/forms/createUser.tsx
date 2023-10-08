import { z } from 'zod'

export type FormTypeCreateUser = z.infer<typeof formSchemaCreateUser>
