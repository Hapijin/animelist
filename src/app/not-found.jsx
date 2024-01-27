"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { ArrowFatLeft } from "@phosphor-icons/react"

export default function Page (){
    const router = useRouter()
    const handleBack = () =>{
        router.back()
    }

    return (
        <div className="flex min-h-screen max-w-lg mx-auto justify-center items-center ">
            <div className="flex justify-center items-center flex-col gap-2">
                <FileSearch size={32} className="text-color-accent" />
                <h3 className="text-color-accent text-2xl font-bold">NOT FOUND </h3>
              
                <button onClick={handleBack} className='text-color-primary'>
            <ArrowFatLeft size={32} text  /> Back
          </button>
            </div>
        </div>
    )
}