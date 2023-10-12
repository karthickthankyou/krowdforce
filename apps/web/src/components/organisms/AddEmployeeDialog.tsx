'use client'
import { useEffect } from 'react'
import { Button } from '../atoms/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../atoms/dialog'
import { Input } from '../atoms/input'
import { useFormCreateEmployment } from '@krowdforce/forms/createEmployment'
import { createEmployment } from '../../actions/createEmployment'

export const AddEmployeeDialog = ({
  employeeId,
  companyId,
  jobId,
}: {
  employeeId: string
  companyId: number
  jobId: number
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useFormCreateEmployment()

  useEffect(() => {
    setValue('jobId', jobId)
    setValue('companyId', companyId)
    setValue('employeeId', employeeId)
  }, [companyId, employeeId, setValue, jobId])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Employee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          onSubmit={handleSubmit(async (formData) => {
            await createEmployment(formData)
          })}
        >
          <DialogHeader>
            <DialogTitle>Add Employee</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              {...register('startDate')}
              type="date"
              placeholder="Start date"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
