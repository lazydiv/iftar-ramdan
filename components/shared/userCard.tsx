'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { User } from '@prisma/client'
import axios from 'axios'
import { Check, Gavel, MoreVertical, Shield, ShieldQuestion } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface UserCardProps {
    user: User

}


const UserCard = (

    {
        user
    }: UserCardProps
) => {


    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])


    const onRoleChange = async (role: string) => {
        const id = user.id
        try {

            await axios.patch('/api/users',  {role, id});
            console.log()
            router.refresh()

        } catch (error) {


            console.log(error);
        }
    }
    
    const onKick = async () => {

        try {

            await axios.delete('/api/users', { data: user });
            console.log()
            router.refresh()

        } catch (error) {


            console.log(error);
        }
    }

    if (!isMounted) return null
    return (
        <Card className="mt-10 fle lg:w-[90%] mx-auto">
            <CardHeader className="flex w-full  flex-row justify-between ">
                <div className="space-y-5">
                    <CardTitle className="text-primary"> {user.name}</CardTitle>
                </div>
                <div className="ml-2">
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none">
                            <MoreVertical className="h-4 w-4 opacity-75 hover:opacity-100" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="bottom">
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger
                                    className="flex  items-center"
                                >
                                    <ShieldQuestion
                                        className="w-4 h-4 mr-2"
                                    />
                                    <span>الدور</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent className="ml-2">
                                        <DropdownMenuItem onClick={() => onRoleChange("USER")}>
                                            <Shield
                                                className="w-4 h-4 mr-2"
                                            />
                                            طالب
                                            {user.role !== "ADMIN" && (
                                                <Check
                                                    className="w-4 h-4 ml-auto"
                                                />
                                            )}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onRoleChange("ADMIN")}>
                                            <Shield
                                                className="w-4 h-4 mr-2"
                                            />
                                            مشرف
                                            {user.role !== "USER" && (
                                                <Check
                                                    className="w-4 h-4 ml-auto"
                                                />
                                            )}
                                        </DropdownMenuItem>
                                       
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuItem onClick={() => onKick()}>
                                <Gavel className="h-4 w-4 mr-2" />
                                طرد
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                </div>
                <div>


                    <p>
                        <span>  الايميل:  </span>
                        <span>{user.email}</span>
                    </p>
                    <div>تم التسجيل في {user.createdAt.toString()}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default UserCard
