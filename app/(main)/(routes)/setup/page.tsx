import { currentProfile } from '@/lib/current-user'
import { initialUser } from '@/lib/init-user'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    try {
        
        const profile = await currentProfile()
        if (!profile) {
          await  initialUser()
        }
    } catch (error) {
        console.log(error)
    } finally {
        redirect('/')
    }
    return (
        <div>
            <h1>loading ...</h1>
        </div>
    )
    

    
}

export default page