'use client'
import { useKeypress } from '@krowdforce/util'
import { useState } from 'react'
import { useMap } from 'react-map-gl'
import { IconMapPinFilled } from '@tabler/icons-react'
import { cities } from '@krowdforce/util/constants'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export const SetCity = () => {
  const [open, setOpen] = useState(false)
  useKeypress(['l'], () => setOpen((state) => !state))

  const { current: map } = useMap()
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className='flex flex-col items-center gap-1'>
          <IconMapPinFilled />
          <div className='flex items-center justify-center w-4 h-4 border rounded shadow'>
            L
          </div>
        </DialogTrigger>
        <DialogContent className='rounded '>
          <DialogHeader>
            <DialogTitle>Select city</DialogTitle>
            <DialogDescription>
              <div className='grid grid-cols-3 gap-4 '>
                {cities.map((city) => (
                  <button
                    onClick={() => {
                      map?.flyTo({
                        center: { lat: city.lat, lng: city.lng },
                        zoom: 10,
                        essential: true,
                      })
                      setOpen(false)
                    }}
                    className='p-3 rounded hover:shadow-2xl'
                    key={city.id}
                  >
                    <div className='text-lg'>{city.name}</div>{' '}
                    <div className='text-xs text-gray-600'>
                      {city.englishName}
                    </div>{' '}
                  </button>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
