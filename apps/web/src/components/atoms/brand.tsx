import { IconPick } from '@tabler/icons-react'

export const Brand = () => {
  return (
    <div>
      <div className={`flex  items-center `}>
        <IconPick className="mr-2" />
        <div>
          <span className="font-bold ">Krowd</span>
          <span className="italic">Force</span>
          <div className="text-xs text-gray">Soma & Karthick Ragavendran</div>
        </div>
      </div>
    </div>
  )
}
