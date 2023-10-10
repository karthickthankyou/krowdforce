import { IconPick } from '@tabler/icons-react'

export const Brand = () => {
  return (
    <div className={`flex  items-center `}>
      <IconPick className="mr-1" />
      <span className="font-bold text-primary">Krowd</span>
      <span className="text-primary">Force</span>
    </div>
  )
}
