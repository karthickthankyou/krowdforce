'use client'
import { useFormContext } from 'react-hook-form'
import { FormTypeCreateJob } from '@krowdforce/forms/createJob'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Map } from '../organisms/Map'
import {
  CenterOfMap,
  DefaultZoomControls,
} from '../organisms/Map/ZoomControls/ZoomControls'
import { MapMarker } from '../organisms/BecomeEmployer'
import { Panel } from '../organisms/Map/Panel'
import { SearchPlace } from '../molecules/ComboBox'
import { ViewState } from '../organisms/Map/Map'
import { initialViewState } from '@krowdforce/util/constants'
import { createJob } from '@krowdforce/web/src/actions/createJob'
import {
  EmployerCompanyQuery,
  JobStatus,
  JobType,
  QueryMode,
  SortOrder,
  SubCategoriesDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Marker } from '../organisms/Map/MapMarker'
import AsyncSelect from 'react-select/async'
import Select from 'react-select'

import { IconBuilding, IconUser } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { Separator } from '../ui/separator'
import { fetchGraphQLNoAuth } from '@krowdforce/web/src/app/util/fetchNoAuth'
import { DatePickerWithRange } from '../ui/date-picker'

export const NewJob = ({ employerCompany }: EmployerCompanyQuery) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<FormTypeCreateJob>()
  console.log('data ', watch())
  console.log('errors', errors)

  useEffect(() => {
    setValue('companyId', employerCompany.id)
  }, [employerCompany.id, setValue])
  const [sameAddress, setSameAddress] = useState(false)
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <form
          onSubmit={handleSubmit(async (formData) => {
            await createJob(formData)
            reset()
          })}
          className='space-y-2'
        >
          <h1 className='mb-2 text-lg font-semibold'>Post new job</h1>
          <Input {...register('title')} placeholder='Job title' />
          <Input {...register('description')} placeholder='Job description' />
          <Input {...register('salary')} placeholder='Salary' />
          <DatePickerWithRange
            setDates={(dates) => {
              setValue('start', dates?.from?.toISOString())
              setValue('end', dates?.to?.toISOString())
            }}
          />
          <SelectMultiSkills />
          <Select
            placeholder='Select job type'
            onChange={(option) => {
              console.log('option ', option)
              if (option) {
                setValue('type', option.value)
              }
            }}
            options={Object.entries(JobType).map(([key, value]) => ({
              label: key,
              value: value,
            }))}
          />
          <Select
            placeholder='Select job status'
            onChange={(option) => {
              console.log('option ', option)
              if (option) {
                setValue('status', option.value)
              }
            }}
            options={Object.entries(JobStatus).map(([key, value]) => ({
              label: key,
              value: value,
            }))}
          />
          <Separator />
          <Input
            type='checkbox'
            checked={sameAddress}
            onChange={(e) => setSameAddress(Boolean(e.target.value))}
          />

          {sameAddress ? (
            <Input
              type='text'
              {...register('address.address')}
              placeholder='Full address'
            />
          ) : null}
          {/* Status and  */}

          <Button type='submit'>Submit</Button>
        </form>
        <Map initialViewState={initialViewState}>
          {sameAddress ? (
            <MapMarker initialLocation={initialViewState} Icon={IconUser} />
          ) : null}
          <Marker
            longitude={employerCompany.address.lng}
            latitude={employerCompany.address.lat}
          >
            <IconBuilding />
          </Marker>
          <Panel position='left-top'>
            <SearchPlace
              onLocationChange={(location: ViewState) => {
                setValue('address.lat', location.latitude)
                setValue('address.lng', location.longitude)
              }}
            />
            <DefaultZoomControls>
              {sameAddress ? (
                <CenterOfMap
                  Icon={IconUser}
                  onClick={(latLng) => {
                    const lat = parseFloat(latLng.lat.toFixed(6))
                    const lng = parseFloat(latLng.lng.toFixed(6))
                    setValue('address.lat', lat, { shouldValidate: true })
                    setValue('address.lng', lng, { shouldValidate: true })
                  }}
                />
              ) : null}
            </DefaultZoomControls>
          </Panel>
        </Map>
      </div>
    </div>
  )
}

export const SelectMultiSkills = () => {
  const { setValue } = useFormContext<FormTypeCreateJob>()
  const loadOptions = async (inputValue: string) => {
    console.log('inputValue', inputValue)
    const skills = await fetchGraphQLNoAuth(
      SubCategoriesDocument,
      {
        ...(inputValue
          ? {
              where: {
                name: { contains: inputValue, mode: QueryMode.Insensitive },
              },
              orderBy: {
                name: SortOrder.Asc,
              },
            }
          : null),
      },
      { next: { tags: [namedOperations.Query.SubCategories] } },
    )
    console.log('skills', skills)

    return (skills.data?.subCategories || []).map((skill) => ({
      value: skill.name, // or some unique id if you have one
      label: `${skill.name} (${skill.categoryName})`, // you can adjust the label format as needed
    }))
  }

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      isMulti
      loadOptions={loadOptions}
      placeholder='Select required skills'
      onChange={(v) => {
        console.log('v', v)
        setValue(
          'skills',
          v.map((skill) => ({ name: skill.value })),
        )
      }}
    />
  )
}
