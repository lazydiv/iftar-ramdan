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
import { cn } from "@/lib/utils";
import { Order } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PaymentVerfProps {
    order: Order
}




export function PaymentVerf({ order }: PaymentVerfProps) {
    const router = useRouter()
    const onSubmit = async () => {

        try {

            await axios.patch('/api/orders', order);

            router.refresh()

        } catch (error) {


            console.log(error);
        }
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="secondary"

                    className={cn(order.status !== "pending" ? 'bg-green-600' : 'bg-yellow-600', 'text-white')}
                >

                    {
                        order.status === "pending" ? "لم يتم دفع" : "تم الدفع"
                    }
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>هل انت متاكد؟ </AlertDialogTitle>
                    <AlertDialogDescription>
                        اذا قمت بالضغط على تأكيد سيتم تأكيد الدفع ويمكن تغيير حالة الطلب لاحقا
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>لا</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onSubmit()}>تعم</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
