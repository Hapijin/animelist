import React, { useEffect, useState } from 'react'
import { Pagination, Input } from "@geist-ui/core";
import { useTheme } from '@geist-ui/core'


export default function Paginating({page, lastPage, setPage}) {
    // const scrollTop = () => {
    //     scrollTo({
    //         behavior: 'smooth',
    //         top: 0
    //     })
    // }
    // const handleNextPage = () =>{
    //     setPage((prevState) => prevState + 1)
    //     scrollTop()
    // }
    // const handlePrevPage = () =>{
    //     setPage((prevState) => prevState - 1)
    //     scrollTop()
    // }
    
    const { palette } = useTheme()
    return (
    <div className='flex justify-center items-center py-4 px-2 text-color-primary gap-4'>
        
        <Pagination
            className={{ color: palette.accents_7 }}
            limit={5}
            page={page}
            initialPage={page}
            count={lastPage}
            onChange={(thisPage) => 
                thisPage !== page &&
                setPage((prev) => ({ ...prev, page: thisPage }))}
        />

        {/* { page === 1 ? null :
        <button onClick={handlePrevPage} className='transition-all hover:text-color-accent'>Prev</button>
        }
        <p>{page} of {lastPage}</p>
        { page === lastPage ? null :
        <button onClick={handleNextPage} className='transition-all hover:text-color-accent'>Next</button>
        } */}
        
    </div>
  )
}
