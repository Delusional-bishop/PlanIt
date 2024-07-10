import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
        <Image src='/favicon.svg' alt='footer' width={58} height={28}/>
        
        </Link>
        <p>~Ranjan</p>
      </div>

    </footer>
  )
}

export default footer
