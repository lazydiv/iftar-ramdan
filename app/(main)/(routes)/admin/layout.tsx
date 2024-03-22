import { SidebarNav } from "@/components/shared/sidebar";


const sidebarNavItems = [
    {
        title: "الطلبات",
        href: "/admin/orders",
    },
    {
        title: "المستخدمين",
        href: "/admin/users",
    },
    
    {
        title: "الاحصائيات",
        href: "/admin/stats",
    },
]



export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="container flex flex-col">
            <div className="">
                <div className="bg-primary text-white text-center py-8 mt-5 rounded-md">
                    <h1>لوحة التحكم</h1>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col">
        
            <SidebarNav items={sidebarNavItems} className="w-[80%] lg:w-48 mr-12 bg-white/80 dark:bg-white/10  sticky top-24 rounded-xl border-black/10 border flex lg:flex-col mt-10 lg:h-48 justify-center items-center "/>
            <div className="">

                {children}
            </div>
            </div>
        </div>



     



    );
}
