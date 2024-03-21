'use client'


import  { useEffect, useState } from 'react'

const Footer = () => {
  // solve the hydration erorr using useEffect

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="flex md:w-full w-[80%]  bg-primary/80 text-white  container h-24 my-12 rounded-xl items-center justify-center border-6 border-white ">
      <p className="mx-10">جميع الحقوق محفوظة 2023</p>
      <p>
        تصميم وتطوير  <a href="https://www.github.com/layzdiv/">lazyDev</a>
      </p>
    </div>
  )
}

export default Footer