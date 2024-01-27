'use client'
import {ArrowFatLeft} from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

export default function Header({title}) {
    const router = useRouter()

    const handleBack = () => {
        event.preventDefault()
        router.back()
    }

    return (          
    <div className='flex justify-between items-center mb-4'>
          <button onClick={handleBack} className='text-color-primary'>
            <ArrowFatLeft size={32}  />
          </button>
          <h3 className='text-xl text-color-primary font-bold'>{title}</h3>
       
    </div>
  )
}
