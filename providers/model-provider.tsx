"use client"


import { useEffect, useState } from "react"
import { PlaceOrder } from "@/components/modals/place-order"



export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    
    return (
        <>
           
            <PlaceOrder />
          
        </>
    )
}