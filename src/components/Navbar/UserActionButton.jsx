import Link from 'next/link'
import { authUserSession } from '@/libs/auth-libs'

export default async function UserActionButton() {
    const user = await authUserSession()
    
    const actionLabel = !user ? "Sign In" : "Sign Out"
    const actionURL = !user ? "/api/auth/signin" : "/api/auth/signout"

    return (
    <div className='flex justify-between gap-2 items-center'>
        {!user ? null : 
        <Link href="/users/dashboard">Dashboard</Link>
         }
        <Link href={actionURL} className='bg-color-secondary font-bold text-color-primary px-6 inline-block py-1.5 '>
          {actionLabel}</Link>
                
    </div>
  )
}
