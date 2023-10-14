import { CompanyPaymentsQuery } from '@krowdforce/network/src/generated'
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '../atoms/table'
import { differenceInMinutes, format } from 'date-fns'
import { Button } from '../atoms/button'
import { PayButton } from '../organisms/PayButton'

export const CompanyShifts = async ({
  companyPayments,
}: {
  companyPayments: CompanyPaymentsQuery['companyPayments']
}) => {
  if (companyPayments.length === 0) {
    return <div>No shifts posted.</div>
  }
  return (
    <Table>
      <TableCaption>List of completed shifts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Job</TableHead>
          <TableHead className="text-center">Clock in/out</TableHead>

          <TableHead>Hours</TableHead>
          <TableHead>Pay per hour</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companyPayments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell className="font-medium">
              <div>{payment.employee.user.name}</div>
              <div>{payment.employee.user.uid}</div>
            </TableCell>
            <TableCell className="font-medium">{payment.job.title}</TableCell>
            <TableCell className="text-center">
              <div>{format(new Date(payment.clockIn), 'p PP')}</div>
              <div>{format(new Date(payment.clockOut), 'p PP')}</div>
            </TableCell>
            <TableCell>
              {differenceInMinutes(
                new Date(payment.clockOut),
                new Date(payment.clockIn),
              ) / 60}
            </TableCell>
            <TableCell>{payment.job.payPerHour}</TableCell>
            <TableCell>
              {payment.paid ? 'Paid' : <PayButton attendanceId={payment.id} />}
            </TableCell>
            <TableCell className="text-right">
              $
              {(differenceInMinutes(
                new Date(payment.clockOut),
                new Date(payment.clockIn),
              ) /
                60) *
                payment.job.payPerHour}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
