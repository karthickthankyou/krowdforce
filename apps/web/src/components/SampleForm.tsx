'use client'
import { useState } from 'react'
import { z } from 'zod'

// Define your schema
const SignupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

// Extract the type from the schema
type SignupFormFields = z.infer<typeof SignupSchema>

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormFields>({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Here, the type of `name` is enforced by TypeScript to only allow properties specified in SignupFormFields
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // ... rest of your component

  return (
    <>
      <div>
        <label>Email:</label>
        <input
          type='emaila'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email[0]}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password[0]}</span>}
      </div>
    </>
  )
}
