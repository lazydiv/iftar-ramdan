import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { ScrollArea } from "../ui/scroll-area"
// import { ScrollArea } from "@radix-ui/react-scroll-area"

export function End() {
    return (
        <Alert variant="default" className="bg-blue-200/50 mt-5  max-h-60 max-w-[850px]  
        space-y-2  text-blue-800 dark:text-blue-200
         border-blue-400">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>🔔 تم اغلاق الحجز🔔</AlertTitle>
            <AlertDescription className="text-base">

                <p>
                    - في حاله حجزك لطلب سابق يرجي التوجه اللي خانة طلباتي لتاكيد وجود التذكرة للدخول
                    <br />
                    - نلقاكم يوم الأربعاء الساعه 4 وقت الإفطار
                    <br />
                    - في حالة وجود أي مشاكل برجاء التواصل معنا ع هذا الرقم 01097773245
                </p>

            </AlertDescription>
        </Alert>
    )
}
