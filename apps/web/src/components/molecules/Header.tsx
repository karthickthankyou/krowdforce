import Link from 'next/link'

import { MenuItem, Role } from '@krowdforce/util/types'

import { Container } from '../atoms/container'
import { Brand } from '../atoms/brand'
import { NavSidebar, ShowMenuItems } from './NavSidebar'
import { ShowAuth } from './ShowAuth'

export type IHeaderProps = {
  menuItems?: MenuItem[]
  sideMenuItems?: MenuItem[]
  type?: Role
}

export const Header = ({
  menuItems = [],
  sideMenuItems = [],
}: IHeaderProps) => {
  return (
    <header className='relative z-40'>
      <nav className='fixed top-0 w-full shadow-md backdrop-blur-md'>
        <Container className='relative z-50 flex items-center justify-between h-16 py-2'>
          <div className='relative flex items-center justify-between w-full gap-16'>
            <Link href='/' aria-label='Home' className='w-auto'>
              <Brand />
            </Link>

            <ShowMenuItems menuItems={menuItems} />

            <div className='flex items-center gap-2'>
              <ShowAuth />

              <NavSidebar menuItems={sideMenuItems} />
            </div>
          </div>
        </Container>
      </nav>
      <div className='h-16' />
    </header>
  )
}
