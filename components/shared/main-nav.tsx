
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ArrowDown, } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { currentProfile } from "@/lib/current-user"

export async function  MainNav(){
  const profile = await currentProfile()

  




  return (
    <div className="mr-6 hidden  md:flex">
      <nav className="flex font-semibold items-center gap-8 text-md ">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          الرئيسية
        </Link>
        {profile?.role === "ADMIN" && (
          <Link
            href="/admin/orders"
            className={cn(
              "transition-colors hover:text-foreground/80",
            )}
          >
            لوحة التحكم
          </Link>
        )}
        <Link
          href="/orders"
          className={cn(
            "transition-colors flex gap-3 items-center   hover:text-foreground/80",
          )}
        >
          طلباتي

        </Link>
        <Link
          href="/org"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          المنظمين
        </Link>
        <Link
          href="https://wa.me/+2012030004033"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          تواصل معانا
        </Link>

      </nav>
    </div>
  )
}