import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { ScrollArea } from "../ui/scroll-area"
// import { ScrollArea } from "@radix-ui/react-scroll-area"

export function Instructions() {
    return (
        <Alert variant="default" className="bg-yellow-200/50 mt-5  max-h-60 max-w-[850px]  
        space-y-2  text-yellow-800 dark:text-yellow-200
         border-yellow-400">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>ارشدات !</AlertTitle>
            <AlertDescription className="text-base">
            <ScrollArea className="text-right h-40">
                <p>

                🌙إرشادات للحضور إلى الإفطار الجماعي
                <br />
                الوقت: نرجو من جميع الحاضرين الالتزام بالوصول قبل موعد الأذان بوقت كافٍ لا يتعدي الساعه الخامسة ونصف مساءً لتجنب العجلة والتمكن من التحضير للإفطار بأريحية.
                <br />
                الملبس: يُفضّل ارتداء ملابس محتشمة تتناسب مع قدسية شهر رمضان.
                <br />
                النظام: يُرجى اتباع التعليمات والإرشادات الصادرة من المنظمين والتحلي بروح التعاون لضمان سير الفعالية بانسيابية.
                <br />
                النفايات: يُرجى المحافظة على نظافة المكان واستخدام صناديق النفايات المخصصة للتخلص من المهملات.
                <br />
                التقدير والاحترام: نُذكّر بضرورة تقدير جهود جميع العاملين والمتطوعين الذين يسهمون في تنظيم هذا الإفطار، ونحث على التعامل معهم ومع باقي الحاضرين بكل احترام وود.
                <br />
                التواصل: في حال وجود أي استفسارات أو الحاجة للمساعدة خلال الفعالية، يُرجى التوجه مباشرةً إلى المنظمين أو المتطوعين.
                <br />
                نسأل الله أن يجعل لقاءنا في هذا الافطار سببًا في زيادة المحبة والأُلفة بيننا، وأن يتقبل منا صيامنا وقيامنا ويعيده علينا بالخير واليمن والبركات.
                <br />
                نتطلع للقاؤكم وتشارككم معنا.
                </p>
            </ScrollArea>
            </AlertDescription>
        </Alert>
    )
}
