'use client'
import { useState } from 'react'
import { addEmployer } from '../../actions/addEmployer'
import { Button } from '../atoms/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../atoms/dialog'
import { Input } from '../atoms/input'
import { useToast } from '../atoms/use-toast'

export const AddEmployerDialog = () => {
  const [uid, setUid] = useState('')
  const { toast } = useToast()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Employer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Employer</DialogTitle>
          <DialogDescription>
            You can add another user as an employer in your company.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            value={uid}
            onChange={(e) => {
              setUid(e.target.value)
            }}
            type="text"
            placeholder="uid"
          />
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              if (uid) {
                await addEmployer({ uid })
              } else {
                toast({ title: 'Given uid is not valid.' })
              }
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
