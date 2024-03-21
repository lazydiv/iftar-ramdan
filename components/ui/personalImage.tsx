

import React from 'react'
import Image from 'next/image'
import { UserAvatar } from '../shared/User-Avatar'

interface PersnalProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string,
        title: string,
        name: string
    }[]
}

const Personal = ({ className, items, ...props }: PersnalProps) => {
    return (
        <>
            {items.map((item) => (
                <div className='text-center m-10 font-bold' key={item.title}>
                    <UserAvatar  src={item.href}  className=' w-52 h-52 object-cover' />
                    {item.title}
                    <br />
                    <h5>
                        {item.name}
                    </h5>

                </div>
            ))}

        </>


    )
}

export default Personal