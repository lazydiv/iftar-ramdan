"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { currentProfile } from "@/lib/current-user"
import { UserRole } from "@prisma/client"
import { UserButton } from "@clerk/nextjs"

export  function MobileNav({role}: {role: UserRole}) {
  const [open, setOpen] = React.useState(false)
  


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>

        </Button>

      </SheetTrigger>

      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex  float-end items-center"
          onOpenChange={setOpen}
        >
          HNU-FCIT
        </MobileLink>
        <ScrollArea className="my-4 mt-12  h-[calc(100vh-8rem)] pb-10 pl-6">
         
          <div className="flex flex-col space-y-3">

            <MobileLink

              href='/'
              onOpenChange={setOpen}
            >
              المنزل
            </MobileLink>
          
          {role  === "ADMIN" && (
            <MobileLink
              href="/admin/orders"
            >
              لوحة التحكم
            </MobileLink>
          )}
          
            <MobileLink
              href="/orders"
              onOpenChange={setOpen}

            >
              طلباتي
            </MobileLink>
            <MobileLink
              href="https://wa.me/+2012030004033"
              onOpenChange={setOpen}

            >
              تواصل معانا
            </MobileLink>

          </div>
MobileLink
              href="/org"
              onOpenChange={setOpen}

            >
       المنظمون 
            </MobileLink>

          <div className="mt-14">

          <UserButton showName />
          </div>

        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}