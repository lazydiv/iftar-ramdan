
import { MainNav } from "@/components/shared/main-nav"
import { MobileNav } from "@/components/shared/mobile-nav"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { SignOutButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import Lsection from "./Lsection"

export function Nav(
    {
        isAdmin = 'guest'
    }: {
        isAdmin: string 
    }
) {

    


    return (
        <header className="sticky top-0  z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl   justify-between   items-center">
                <Link href="/" className="lg:w-[33%]">
                    <span className="text-primary font-bold inline">
                        HNU-FCIT
                    </span>
                </Link>

                <div className=" ">

                    <MainNav isAdmin={isAdmin}/>
                </div>
                <div className="lg:w-[33%] flex justify-end"  >

                    <Lsection />
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}