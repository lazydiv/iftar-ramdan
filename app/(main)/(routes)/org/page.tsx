
import Personal from '@/components/ui/personalImage'
import Personalstudent from '@/components/ui/personalImagestudent'


const items = [
    {
        href: "https://utfs.io/f/68b26e79-6429-4e1c-bf34-83ba0d20e47c-u197u.jpg",
        title: "عميد كلية تكنولوجيا الحاسب و المعلومات",
        name: 'د / اسامة عز الدين ايمام'
    },
    {
        href: "https://utfs.io/f/d2368c91-a94e-4c96-803c-4d20d80a1b87-2s.helal.jpg",
        title: "منسق البرامج ",
        name: 'د / هلال احمد سليمان'
    },
    {
        href: "https://utfs.io/f/a3c78587-124c-472e-9819-f194da18c53c-t3h9u.jpg",
        title: "منسق البرامج ",
        name: 'د / سلوى أسامة'
    }
 ]

 const itemsSt = [
    {
        href: "https://utfs.io/f/817ed682-f1e0-4652-8b95-984a6f5d2d75-iqbpo4.jpg",
        title: "general supervisor",
        name: 'Ahmed Khairy'
    },
    {
        href: "https://utfs.io/f/dc4feabe-0478-4575-a932-d98762d2afea-1zbfv.jpeg",
        title: "Tec head",
        name: 'Yahia khaild'
    },
    {
        href: "https://utfs.io/f/3d8bb983-265f-4a9b-9072-4a419d6988d8-2oo.jpg",
        title: "Event Manager ",
        name: 'Mahmoud matter'
    },
    {
        href: "https://utfs.io/f/4c165aba-c8f1-4fff-9cb9-fd289680570e-1t0kg5.jpg",
        title: "manger ",
        name: 'Ahmed salah  '
    },
    {
        href: "",
        title: " ",
        name: 'Ibrahim Hamdy'
    },
    {
        href: "https://utfs.io/f/fe09620e-8593-4dab-a58b-22732a4dae5e-1ka04j.jpg",
        title: "media head",
        name: 'Menna Elbanna'
    },
    {
        href: "https://utfs.io/f/f4b8a493-580e-4e98-8653-19dd31b31766-2859g.jpg",
        title: "Oc commuinty ",
        name: 'Ziad sameh'
    },
    {
        href: "https://utfs.io/f/16b463e3-c2e8-40e6-afcd-f7a3a08d7822-5fs0do.jpg",
        title: "vice Oc head ",
        name: 'Haidy hosaam'
    }
 ]



const page = () => {
    



    return (
        <div className='container mx-auto mt-12'>
            <div className='flex m-5 justify-center  flex-wrap'>
            <div className='w-full text-center  text-xl font-bold text-yellow-500 text-primary my-10'>
                Faculty Heads
            </div>
            <Personal items={items}/>
            <div className='w-full text-center  text-xl font-bold text-primary my-10'>
                Orgnization Heads
            </div>
            <Personalstudent items={itemsSt}/>
            <div className='w-full text-center  text-xl font-bold text-primary my-10'>
                Orgnization members
            </div>

            </div>

        </div >
    )
}

export default page