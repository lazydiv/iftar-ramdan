import { currentProfile } from '@/lib/current-user'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const profile = await currentProfile()
    if (!profile) {
        return redirect("/sign-in")
    }
    if (profile.role !== "ADMIN") redirect("/")
    redirect('/admin/orders')
    return (
        <div className='container mt-9 '>Loading...</div>
    )
}

export default page