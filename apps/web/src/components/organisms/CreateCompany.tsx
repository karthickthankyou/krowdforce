'use client'
import { FormTypeCreateCompany } from '@krowdforce/forms/createEmployer'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Map } from './Map'

import { IconBuilding, TablerIconsProps } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { ViewState } from './Map/Map'
import {
  CenterOfMap,
  DefaultZoomControls,
} from './Map/ZoomControls/ZoomControls'

import { initialViewState } from '@krowdforce/util/constants'
import { Button } from '../atoms/button'
import { Input } from '../atoms/input'
import { SearchPlace } from '../molecules/ComboBox'
import { Marker } from './Map/MapMarker'
import { Panel } from './Map/Panel'
import { createCompany } from '../../actions/createCompany'

export const CreateCompany = () => {
  const { register, handleSubmit, reset, setValue } =
    useFormContext<FormTypeCreateCompany>()

  return (
    <div className="grid grid-cols-2 gap-2">
      <form
        onSubmit={handleSubmit(async ({ name, description, address }) => {
          await createCompany({ name, address, description })
          reset()
        })}
        className="space-y-2"
      >
        <h1 className="mb-2 text-lg font-semibold">Create company</h1>
        <Input {...register('name')} placeholder="Company name" />
        <Input {...register('description')} placeholder="Company description" />
        <Input
          type="text"
          {...register('address.address')}
          placeholder="Full address"
        />
        <Button type="submit">Submit</Button>
      </form>
      <Map initialViewState={initialViewState}>
        <MapMarker initialLocation={initialViewState} />

        <Panel position="left-top">
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
  const { setValue } = useFormContext<FormTypeCreateCompany>()
  const { address } = useWatch<FormTypeCreateCompany>()
  useEffect(() => {
    if (initialLocation) {
      const { latitude, longitude } = initialLocation
      setValue('address', { lat: latitude, lng: longitude, address: '' })
    }
  }, [initialLocation, setValue])

  return (
    <Marker
      pitchAlignment="auto"
      longitude={address?.lng || 0}
      latitude={address?.lat || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('address.lat', lat || 0)
        setValue('address.lng', lng || 0)
      }}
    >
      <Icon className="w-8 h-8 p-1.5" />
    </Marker>
  )
}
