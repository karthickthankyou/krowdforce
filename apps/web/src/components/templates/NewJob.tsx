'use client'
import { FormTypeCreateJob } from '@krowdforce/forms/createJob'
import {
  EmployerCompanyQuery,
  JobStatus,
  JobType,
  namedOperations,
  QueryMode,
  SortOrder,
  SubCategoriesDocument,
} from '@krowdforce/network/src/generated'
import { initialViewState } from '@krowdforce/util/constants'
import { createJob } from '@krowdforce/web/src/actions/createJob'
import { useFormContext } from 'react-hook-form'

import { Button } from '../atoms/button'
import { Input } from '../atoms/input'
import { SearchPlace } from '../molecules/ComboBox'
import { MapMarker } from '../organisms/CreateCompany'
import { Map } from '../organisms/Map'
import { ViewState } from '../organisms/Map/Map'
import { Marker } from '../organisms/Map/MapMarker'
import { Panel } from '../organisms/Map/Panel'
import {
  CenterOfMap,
  DefaultZoomControls,
} from '../organisms/Map/ZoomControls/ZoomControls'

import { IconBuilding, IconPick } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { fetchGraphQLNoAuth } from '@krowdforce/web/src/app/util/fetchNoAuth'
import { useSession } from 'next-auth/react'
import { DatePickerWithRange } from '../atoms/date-picker'
import { AsyncSelect, Select } from '../atoms/react-select'
import { Separator } from '../atoms/separator'
import { Textarea } from '../atoms/textArea'
import { Label } from '../atoms/label'
import { Weekdays } from '../organisms/Weekdays'

export const NewJob = ({ employerCompany }: EmployerCompanyQuery) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useFormContext<FormTypeCreateJob>()

  const { data } = useSession()

  useEffect(() => {
    if (data?.user?.uid) {
      setValue('employerId', data?.user?.uid)
    }
  }, [data?.user?.uid, setValue])

  useEffect(() => {
    setValue('companyId', employerCompany.id)
  }, [employerCompany.id, setValue])
  const [sameAddress, setSameAddress] = useState(false)
  const [showShiftInformation, setShowShiftInformation] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-4 h-[calc(100vh-4rem)]">
      <div className="top-16 sticky">
        <Map initialViewState={initialViewState}>
          {sameAddress ? (
            <MapMarker initialLocation={initialViewState} Icon={IconPick} />
          ) : null}
          <Marker
            longitude={employerCompany.address.lng}
            latitude={employerCompany.address.lat}
          >
            <IconBuilding />
          </Marker>
          <Panel position="left-top">
            <SearchPlace
              onLocationChange={(location: ViewState) => {
                setValue('address.lat', location.latitude)
                setValue('address.lng', location.longitude)
              }}
            />
          </Panel>
          <Panel position="right-center">
            <DefaultZoomControls>
              {sameAddress ? (
                <CenterOfMap
                  Icon={IconPick}
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
      <div className="overflow-y-auto">
        <form
          onSubmit={handleSubmit(async (formData) => {
            await createJob(formData)
            reset()
          })}
          className="flex flex-col my-4"
        >
          <h1 className="mb-2 text-lg font-semibold">Post new job</h1>
          <Label title="Title">
            <Input {...register('title')} placeholder="Job title" />
          </Label>
          <Label title="Description">
            <Textarea
              {...register('description')}
              placeholder="Job description"
            />
          </Label>
          <Label title="Salary" error={errors.payPerHour?.message}>
            <Input {...register('payPerHour')} placeholder="Salary" />
          </Label>
          <Label title="Job type">
            <Select
              placeholder="Select job type"
              onChange={(option) => {
                if (option) {
                  setValue('type', option.value)
                }
              }}
              options={Object.entries(JobType).map(([key, value]) => ({
                label: key,
                value: value,
              }))}
            />
          </Label>
          <SelectDates />

          <Label title="Select skills">
            <SelectMultiSkills
              setValue={(skills: string[]) => {
                setValue(
                  'skills',
                  skills.map((name) => ({ name })),
                )
              }}
            />
          </Label>
          <Label title="Job status">
            <Select
              placeholder="Select job status"
              onChange={(option) => {
                if (option) {
                  setValue('status', option.value)
                }
              }}
              options={Object.entries(JobStatus).map(([key, value]) => ({
                label: key,
                value: value,
              }))}
            />
          </Label>
          <Label title="Contact info">
            <Textarea {...register('contactInfo')} placeholder="Full address" />
          </Label>
          <Separator />
          <div className="flex gap-1">
            <input
              id="changeAddress"
              type="checkbox"
              checked={sameAddress}
              className="transform scale-150 mr-2"
              onChange={(e) => {
                setSameAddress(Boolean(e.target.checked))
                setValue('companyAddressId', employerCompany.address.id)
              }}
            />
            <label htmlFor="changeAddress" className="select-none">
              Add different address for the job?
            </label>
          </div>
          {sameAddress ? (
            <Label title="Full address">
              <Textarea
                {...register('address.address')}
                placeholder="Full address"
              />
            </Label>
          ) : null}

          <div className="flex gap-1">
            <input
              id="showShiftInformation"
              type="checkbox"
              checked={showShiftInformation}
              className="transform scale-150 mr-2"
              onChange={(e) => {
                setShowShiftInformation(Boolean(e.target.checked))
              }}
            />
            <label htmlFor="showShiftInformation" className="select-none">
              Add shift information
            </label>
          </div>
          {showShiftInformation ? (
            <>
              <Label
                title="Week days"
                error={errors.shiftInformation?.days?.message}
              >
                <Weekdays
                  onToggle={(v) => {
                    setValue('shiftInformation.days', v)
                  }}
                />
              </Label>
              <Label
                title="Start time"
                error={errors.shiftInformation?.endTime?.message}
              >
                <Input
                  type="time"
                  {...register('shiftInformation.startTime')}
                />
              </Label>
              <Label
                title="End time"
                error={errors.shiftInformation?.endTime?.message}
              >
                <Input type="time" {...register('shiftInformation.endTime')} />
              </Label>
            </>
          ) : null}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export const SelectMultiSkills = ({
  setValue,
}: {
  setValue: (skills: string[]) => void
}) => {
  const loadOptions = async (inputValue: string) => {
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

    return (skills.data?.subCategories || []).map((skill) => ({
      value: skill.name,
      label: `${skill.name} (${skill.categoryName})`,
    }))
  }

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      isMulti
      loadOptions={loadOptions}
      placeholder="Select required skills"
      onChange={(v) => {
        setValue(v.map((skill) => skill.value))
      }}
      classNames={{
        control: () => 'bg-white/50 text-black border border-gray-200',
        menu: () => 'bg-white/50 text-black',
        group: () => 'text-black',
        input: () => 'text-black',
        multiValue: () => 'text-black bg-white',
        multiValueLabel: () => 'text-black bg-white',

        option: () => 'bg-white text-black hover:text-primary text-left',
        multiValueRemove: () => 'bg-white text-black hover:text-red',
        clearIndicator: () => 'text-black hover:text-red',
      }}
    />
  )
}

export const SelectDates = () => {
  const { setValue, watch } = useFormContext<FormTypeCreateJob>()
  const jobType = watch('type')

  if (jobType === JobType.FullTime) {
    return null
  }

  return (
    <Label title="Date range">
      <DatePickerWithRange
        setDates={(dates) => {
          setValue('start', dates?.from?.toISOString())
          setValue('end', dates?.to?.toISOString())
        }}
      />
    </Label>
  )
}
