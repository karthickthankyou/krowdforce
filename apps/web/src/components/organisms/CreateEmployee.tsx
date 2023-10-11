'use client'
import { FormTypeCreateEmployee } from '@krowdforce/forms/createEmployee'

import { Map } from './Map'
import Image from 'next/image'
import { IconBuilding, IconHome, TablerIconsProps } from '@tabler/icons-react'
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
import { Textarea } from '../atoms/textArea'
import { SelectMultiSkills } from '../templates/NewJob'
import { createEmployee } from '../../actions/createEmployee'
import { Label } from '../atoms/label'
import { useSession } from 'next-auth/react'
import { Description, Title, Title2, Title3 } from '../atoms/typography'

export const CreateEmployee = () => {
  const { register, handleSubmit, reset, setValue } =
    useFormContext<FormTypeCreateEmployee>()

  const { data } = useSession()

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Title>Create employee</Title>
          <div className="flex gap-2 items-center mt-4">
            <Image
              className="w-16 h-16 rounded-full"
              src={data?.user?.image || ''}
              alt=""
              width={300}
              height={300}
            />
            <Title3>{data?.user?.name}</Title3>
          </div>
          <Description className={'mt-4 mb-2'}>
            Tell us more about you.
          </Description>
          <form
            onSubmit={handleSubmit(async (formData) => {
              await createEmployee({ formData })
              reset()
            })}
            className="flex flex-col"
          >
            <Label title={'About you'}>
              <Textarea {...register('about')} placeholder="About you" />
            </Label>
            <Label title="Your skills">
              <SelectMultiSkills
                setValue={(skills) => {
                  setValue('skills', skills)
                }}
              />
            </Label>
            <Label title="Address">
              <Textarea
                {...register('address.address')}
                placeholder="Full address"
              />
            </Label>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <Map initialViewState={initialViewState}>
          <MapMarker initialLocation={initialViewState} Icon={IconHome} />
          <Panel position="left-top">
            <SearchPlace
              onLocationChange={(location: ViewState) => {
                setValue('address.lat', location.latitude)
                setValue('address.lng', location.longitude)
              }}
            />
            <DefaultZoomControls>
              <CenterOfMap
                Icon={IconHome}
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
  const { setValue } = useFormContext<FormTypeCreateEmployee>()
  const { address } = useWatch<FormTypeCreateEmployee>()
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
