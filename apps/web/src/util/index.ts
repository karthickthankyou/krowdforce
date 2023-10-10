import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const formDataToObject = (formData: FormData): Record<string, string> => {
  const obj: Record<string, string> = {}

  formData.forEach((value, key) => {
    if (value) {
      obj[key] = value as string
    }
  })

  return obj
}
