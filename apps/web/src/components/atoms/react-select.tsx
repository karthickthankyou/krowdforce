import ReactSelect, { GroupBase, Props } from 'react-select'
import AsyncReactSelect, { AsyncProps } from 'react-select/async'

export function AsyncSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: AsyncProps<Option, IsMulti, Group>) {
  return (
    <AsyncReactSelect
      {...props}
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

export function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      {...props}
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
