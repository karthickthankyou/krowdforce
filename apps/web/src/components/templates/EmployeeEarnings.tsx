import {
  MyEarningsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from '../atoms/table'
import { differenceInMinutes, format } from 'date-fns'

export const EmployeeEarnings = async () => {
  const myEarnings = await fetchGraphQL({
    document: MyEarningsDocument,
    config: { next: { tags: [namedOperations.Query.myEarnings] } },
  })
  return (
    <Table>
      <TableCaption>List of completed shifts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Job</TableHead>
          <TableHead className="text-center">Clock in/out</TableHead>

          <TableHead>Hours</TableHead>
          <TableHead>Pay per hour</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {myEarnings.data?.myEarnings.map((earning) => (
          <TableRow key={earning.id}>
            <TableCell className="font-medium">{earning.id}</TableCell>
            <TableCell className="font-medium">{earning.job.title}</TableCell>
            <TableCell className="text-center">
              <div>{format(new Date(earning.clockIn), 'p PP')}</div>
              <div>{format(new Date(earning.clockOut), 'p PP')}</div>
            </TableCell>
            <TableCell>
              {differenceInMinutes(
                new Date(earning.clockOut),
                new Date(earning.clockIn),
              ) / 60}
            </TableCell>
            <TableCell>{earning.job.payPerHour}</TableCell>
            <TableCell>{earning.paid ? 'Paid' : 'Unpaid'}</TableCell>
            <TableCell className="text-right">
              $
              {(differenceInMinutes(
                new Date(earning.clockOut),
                new Date(earning.clockIn),
              ) /
                60) *
                earning.job.payPerHour}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
