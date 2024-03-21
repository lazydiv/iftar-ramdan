

import React from 'react'
import Image from 'next/image'

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
                    <Image alt='3meed' src={item.href} width={200} height={500} className='rounded-3xl   p-2 r' />
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