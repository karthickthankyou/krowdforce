'use client'
import { useSession } from 'next-auth/react'
import { FormTypeCreateEmployer } from '@krowdforce/forms/createEmployer'
import { createEmployer } from '@krowdforce/web/src/actions/createEmployer'
import Link from 'next/link'
import { Map } from './Map'

import { ViewState } from './Map/Map'
import { IconBuilding, TablerIconsProps } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import {
  CenterOfMap,
  DefaultZoomControls,
} from './Map/ZoomControls/ZoomControls'

import { Panel } from './Map/Panel'
import { Marker } from './Map/MapMarker'
import { SearchPlace } from '../molecules/ComboBox'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { initialViewState } from '@krowdforce/util/constants'

export const BecomeEmployer = () => {
  const { register, handleSubmit, reset, setValue } =
    useFormContext<FormTypeCreateEmployer>()

  const { data: userData } = useSession()

  if (!userData?.user?.uid) {
    return <Link href='/api/auth/signin'>Sign in</Link>
  }

  const userUID = userData.user.uid

  return (
    <div className='grid grid-cols-2 gap-2'>
      <form
        onSubmit={handleSubmit(async ({ companyName, address }) => {
          await createEmployer({ companyName, uid: userUID, address })
          reset()
        })}
        className='space-y-2'
      >
        <h1 className='mb-2 text-lg font-semibold'>Create company</h1>
        <Input {...register('companyName')} placeholder='Company name' />
        <Input {...register('address.address')} placeholder='Full address' />
        <Button type='submit'>Submit</Button>
      </form>
      <Map initialViewState={initialViewState}>
        <MapMarker initialLocation={initialViewState} />

        <Panel position='left-top'>
          <SearchPlace
            onLocationChange={(location: ViewState) => {
              setValue('address.lat', location.latitude)
              setValue('address.lng', location.longitude)
            }}
          />
          <DefaultZoomControls>
            <CenterOfMap
              onClick={(latLng) => {
                const lat = parseFloat(latLng.lat.toFixed(6))
                const lng = parseFloat(latLng.lng.toFixed(6))
                setValue('address.lat', lat, { shouldValidate: true })
                setValue('address.lng', lng, { shouldValidate: true })
              }}
            />
          </DefaultZoomControls>
        </Panel>
      </Map>
    </div>
  )
}

export const MapMarker = ({
  initialLocation,
  Icon = IconBuilding,
}: {
  initialLocation?: ViewState
  Icon?: (props: TablerIconsProps) => JSX.Element
}) => {
  const { setValue } = useFormContext<FormTypeCreateEmployer>()
  const { address } = useWatch<FormTypeCreateEmployer>()
  useEffect(() => {
    if (initialLocation) {
      const { latitude, longitude } = initialLocation
      setValue('address', { lat: latitude, lng: longitude, address: '' })
    }
  }, [initialLocation, setValue])

  return (
    <Marker
      pitchAlignment='auto'
      longitude={address?.lng || 0}
      latitude={address?.lat || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('address.lat', lat || 0)
        setValue('address.lng', lng || 0)
      }}
    >
      <Icon className='w-8 h-8 p-1.5 text-black' />
    </Marker>
  )
}
