import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    redirect('/admin/orders')
    return (
        <div className='container mt-9 '>Loading...</div>
    )
}

export default page