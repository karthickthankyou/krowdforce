import { IconPick } from '@tabler/icons-react'

export const Brand = () => {
  return (
    <div>
      <div className={`flex  items-center `}>
        <IconPick className="mr-2" />
        <div>
          <div className="flex">
            <span className="font-bold ">Krowd</span>
            <div className="relative">
              <span className="italic absolute">Force</span>
              <span className="italic absolute translate-x-0.5  opacity-20">
                Force
              </span>
              <span className="italic absolute translate-x-1 opacity-10">
                Force
              </span>
            </div>
          </div>
          <div className="text-xs text-gray">Soma & Karthick Ragavendran</div>
        </div>
      </div>
    </div>
  )
}
