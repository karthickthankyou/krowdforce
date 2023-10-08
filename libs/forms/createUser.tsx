import { z } from 'zod'
import { formSchemaCreateUser } from '.'

export type FormTypeCreateUser = z.infer<typeof formSchemaCreateUser>
