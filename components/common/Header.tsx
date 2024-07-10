"use client"

import { SignedOut } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36'>
          <Image src='/favicon.svg' width={58} height={28} alt='PlanIt logo'/>
        </Link>


          <SignedIn>
            <nav className='md:flex-between hidden w-full max-w-xs'>
              <NavItems/> 
            </nav>
          </SignedIn>
        <div className='flex w-32 justify-end gap-3'>

            
            <SignedIn>
              <UserButton afterSignOutUrl='/'  />
              <MobileNav/>
            </SignedIn>
            <SignedOut>
              <Button asChild className='rounded-full size-lg'>
                <Link href='/sign-in'>
                Login
                </Link>
              </Button>
            </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default header
