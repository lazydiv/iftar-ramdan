
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ArrowDown, } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { currentProfile } from "@/lib/current-user"

export async function MainNav() {
  const profile = await currentProfile()






  return (
    <div className="mr-6 hidden  md:flex">
      <nav className="flex font-semibold items-center gap-8 text-sm ">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          الصفحة الرئيسية

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
        <Link href="https://api.whatsapp.com/send?phone=201100108253&text=%D8%B7%D8%B1%D9%8A%D9%82%D9%87%20%D8%A7%D9%84%D8%AF%D9%81%D8%B9%20%D8%9F"
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