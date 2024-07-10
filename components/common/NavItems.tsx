'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = () => {
  const pathname= usePathname();
  return (
    <ul className='flex flex-between w-full flex-col md:flex-row items-start gap-5'>
      {headerLinks.map((link)=>{
        const isActive= pathname===link.route;
        return(
          <li
          key={link.route}
          className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default navItems
