"use client"

import { Router, Search, SearchSlash } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CommandGroup, CommandItem, CommandDialog, CommandEmpty, CommandInput, CommandList } from "../ui/command";
import { Span } from "next/dist/trace";
import { redirect, useRouter } from "next/navigation";


interface SearchCompProps {

    data: {

        name: string
        phone: string
        status: string
        id: string
        mealType: string

    }[]

}





export const SearchComp = ({
    data
}: SearchCompProps) => {


    const [open, setOpen] = useState(false)
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    const runCommand = useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    const router = useRouter()


    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="group px-2 py-2 rounded-md bg-primary/70  flex items-center
         gap-x-2 container lg:w-[90%] mt-10 hover:bg-zinc-100/10 dark:hover:bg-zinc-700 transition">

                <Search className="w-4 h-4 text-zinc-200 dark:text-zinc-400" />
                <p className="font-semibold text-sm text-zinc-100 dark:text-zinc-400 group-hover:text-zinc-600
            dark:group-hover:text-zinc-300 transition">
                    ابحث عن الطلب
                </p>
                <kbd
                    className="pointer-events-none inline-flex h-5 select-none items-center 
            rounded-md border gap-1 bg-muted first-letter:font-mono text[10px]
            font-medium text-muted-foreground ml-auto px-1.5"
                >
                    <span className="text-xs">CTRL</span>K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder="
                     ابحث عن الطلب"

                />
                <CommandEmpty >
                    No Results Found!
                </CommandEmpty>

                <CommandList>

                    <CommandGroup heading="الطلابات">
                        {data.map(({ name, phone, mealType, status, id }) => {
                            if (!data?.length) return null
                            return (
                                <CommandItem key={name}
                                    onSelect={() => {
                                        runCommand(() => {
                                            router.push(`/admin/orders/${id}`)
                                        })
                                    }}
                                    className="flex w-full container  mt-2">
                                    <p className='w-[25%]'>
                                        {name}
                                    </p>
                                    <p className='w-[25%]'>
                                        {phone}
                                    </p>
                                    <p className='w-[25%]'>
                                        {status === 'pending' ? 'لم يتم الدفع' : 'تم الدفع'}
                                    </p>
                                    <p>
                                        {mealType === 'meat' ? 'لحمه' : mealType === 'chiken' ? 'فراخ' : mealType === 'fasting' ? 'صيامي' : 'ميكس لحوم وفراخ'}
                                    </p>
                                    <div>

                                    </div>

                                </CommandItem>
                            )
                        })}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}