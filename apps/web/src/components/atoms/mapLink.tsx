import { IconMap2 } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface IMapLinkProps {
  lat: number
  lng: number
  children?: ReactNode
}

export const MapLink = ({
  lat,
  lng,
  children = <IconMap2 />,
}: IMapLinkProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <div className="group inline-block">
      <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <div className=" inline-block group-hover:m-1 group-hover:translate-x-4 transition-all group-hover:-translate-y-4 group-hover:shadow-2xl">
          {children}
        </div>
      </Link>
    </div>
  )
}
