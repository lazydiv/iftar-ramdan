import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Order } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

interface MakeSureProps {
    order: Order
 }
 


export function MakeSure({ order }: MakeSureProps) {
    const router = useRouter()
    const onSubmitDelete = async () => {

        try {

            await axios.delete('/api/orders', { data: order });

            console.log()
            router.refresh()

        } catch (error) {


            console.log(error);
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">الغاء</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>هل انت متاكد من حذف الطلب؟ </AlertDialogTitle>
                    <AlertDialogDescription>
                        لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف الطلب نهائيًاز
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>لا</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onSubmitDelete()}>تعم</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
