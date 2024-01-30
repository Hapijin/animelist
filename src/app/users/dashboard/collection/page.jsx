import React from 'react'
import Header from '@/components/Dashboard/Header'
import { authUserSession } from '@/libs/auth-libs'
import Content from './content'
import prisma from '@/libs/prisma'

export default async function Page() {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({
    where: {user_email: user.email}
  })
    // console.log(user)
  return (
    <>
    <section className='p-4 '>
        <Header title="My Anime Collection"/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {collection?.map((collect, index) => {
          return (
            <Content key={index} api={collect}/>
            )
          })}
        </div>
    </section>
    </>
  )
}
