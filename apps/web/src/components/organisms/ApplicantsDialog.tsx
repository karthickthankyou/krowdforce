'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
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
import {
  ApplicationStatus,
  EmployerJobDetailsFragment,
} from '@krowdforce/network/src/generated'
import { Badge } from '../atoms/badge'
import { Select } from '../atoms/react-select'
import { updateApplicationStatus } from '../../actions/updateApplicationStatus'
import { Separator } from '../atoms/separator'
import { Label } from '../atoms/label'

export const ApplicantsDialog: FC<{
  count: number
  applications: EmployerJobDetailsFragment['applications']
}> = ({ count, applications }) => {
  if (!count) {
    return <div className="text-gray text-sm">No applications.</div>
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Applicants ({count})</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle>Applicants</DialogTitle>
          <DialogDescription className="mt-4">
            View and update application statuses here.
          </DialogDescription>
        </DialogHeader>

        <div>
          {applications.map((application) => (
            <div key={application.employee.user.uid}>
              <div className="flex gap-2">
                <Image
                  src={application.employee.user.image || ''}
                  alt=""
                  className="rounded-full w-24 h-24"
                  width={300}
                  height={300}
                />
                <div className="space-y-2">
                  <div className="text-lg font-semibold">
                    {application.employee.user.name}
                  </div>
                  <div className="line-clamp-3 max-w-lg">
                    {application.employee.about}
                  </div>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {application.employee.skills.map((skill) => (
                      <Badge variant="outline" key={skill.name}>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                  <Separator />
                  <SetApplicationStatus application={application} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const SetApplicationStatus = ({
  application: { status, job, employee },
}: {
  application: EmployerJobDetailsFragment['applications'][0]
}) => {
  const options = Object.entries(ApplicationStatus).map(([key, value]) => ({
    label: key,
    value: value as ApplicationStatus,
  }))
  const [newStatus, setNewStatus] = useState(() => status)
  return (
    <div>
      <div className="mb-2 capitalize font-semibold">{status}</div>
      <Label title="Change status">
        <Select
          placeholder="Select status"
          options={options}
          defaultValue={options.find((option) => option.value === status)}
          onChange={(option) => {
            if (option) {
              setNewStatus(option.value)
            }
          }}
        />
      </Label>
      {newStatus !== status ? (
        <Button
          variant={'link'}
          onClick={async () => {
            await updateApplicationStatus({
              employeeId_jobId: { employeeId: employee.uid, jobId: job.id },
              status: newStatus,
            })
          }}
        >
          Change status
        </Button>
      ) : null}
    </div>
  )
}
