import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Dashboard/Header'

export default function Page() {
  return (
    <section className='p-4 '>
        <Header title="My Anime Collection"/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

        <Link href="/" className='border-2 border-color-accent relative'>
          <Image src="" alt="" width={350} height={350} className=''/>
          <div className='absolute flex bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-color-primary justify-center items-center'>Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className='border-2 border-color-accent relative'>
          <Image src="" alt="" width={350} height={350} className=''/>
          <div className='absolute flex bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-color-primary justify-center items-center'>Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className='border-2 border-color-accent relative'>
          <Image src="" alt="" width={350} height={350} className=''/>
          <div className='absolute flex bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-color-primary justify-center items-center'>Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className='border-2 border-color-accent relative'>
          <Image src="" alt="" width={350} height={350} className=''/>
          <div className='absolute flex bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-color-primary justify-center items-center'>Judul Anime</h5>
          </div>
        </Link>
        </div>
    </section>
  )
}
