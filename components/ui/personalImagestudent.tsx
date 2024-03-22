

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

const Personalstudent = ({ className, items, ...props }: PersnalProps) => {
    return (
        <>
            {items.map((item) => (
                <div className='text-center m-10 items-center font-bold' key={item.title}>
                    <UserAvatar className='h-28 w-28 object-fill' src={item.href}   />
                  

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

export default Personalstudent