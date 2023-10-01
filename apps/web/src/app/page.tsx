import { Button } from '@krowdforce/ui/src/components/ui/button'
import { ModeToggle } from '@krowdforce/ui/src/components/ui/mode-toggle'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@krowdforce/ui/src/components/ui/sheet'

export default function Home() {
  return (
    <main>
      <Button variant={'outline'}>Hey here.</Button>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </main>
  )
}
