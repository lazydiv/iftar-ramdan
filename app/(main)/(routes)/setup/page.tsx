import { currentProfile } from '@/lib/current-user'
import { initialUser } from '@/lib/init-user'
import { currentUser } from '@clerk/nextjs'
import axios from 'axios'
import { redirect, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React, { use } from 'react'

const page = async () => {
    // const user = await currentUser()
    // try {

    //     await axios.patch('/api/users',  user);
    //     console.log()
    //     redirect('/')

    // } catch (error) {
    //     console.log(error);
    // }

    const profile = await currentProfile()
    if (!profile) {
        await initialUser()
    }

    if (profile) {
        return redirect('/')
    } else {
        return redirect('/setup')
    }




}

export default page