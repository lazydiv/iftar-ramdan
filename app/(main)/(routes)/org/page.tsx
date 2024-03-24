
import Personal from '@/components/ui/personalImage'
import Personalstudent from '@/components/ui/personalImagestudent'


const items = [
    {
        href: "https://utfs.io/f/68b26e79-6429-4e1c-bf34-83ba0d20e47c-u197u.jpg",
        title: "عميد كلية علوم الحاسب وتكنولوجيا المعلومات",
        name: 'د / اسامة عز الدين امام'
    },
    {
        href: "https://utfs.io/f/d2368c91-a94e-4c96-803c-4d20d80a1b87-2s.helal.jpg",
        title: "منسق البرامج ",
        name: 'د / هلال احمد سليمان'
    },
    {
        href: "https://utfs.io/f/22858c00-3b9a-4843-a800-d511916317e5-qiwqom.jpg",
        title: "منسق البرامج ",
        name: 'د / سلوى أسامة'
    }
]

const itemsSt = [
    {
        href: "https://utfs.io/f/817ed682-f1e0-4652-8b95-984a6f5d2d75-iqbpo4.jpg",
        title: "General supervisor",
        name: 'Ahmed Khairy'
    },
    {
        href: "https://utfs.io/f/ed90002f-76a2-4b0c-8384-a6f8a9f2dd98-13mp.jpg",
        title: "Vice General supervisor",
        name: 'Nadia Mohamed'
    },
    {
        href: "https://utfs.io/f/68bcb27c-9745-4873-a915-c9ec21bedbad-57ppz8.08.40_01f1ccfd.jpg",
        title: "Technical head",
        name: 'Yahia khaild'
    },
    {
        href: "https://utfs.io/f/6a503162-b06f-424b-a75a-83218a9926ba-tekzr.jpg",
        title: "Vice Technical head",
        name: 'Mariam Mohamed'
    },
    {
        href: "https://utfs.io/f/3d8bb983-265f-4a9b-9072-4a419d6988d8-2oo.jpg",
        title: "PR Head",
        name: 'Mahmoud matter'
    },
    {
        href: "https://utfs.io/f/4c165aba-c8f1-4fff-9cb9-fd289680570e-1t0kg5.jpg",
        title: "Manger ",
        name: 'Ahmed salah  '
    },
    {
        href: "https://utfs.io/f/be8f9ee0-6cc1-4723-9947-d8f5d54492d5-57ppzz.04.49_99b3ce1f.jpg",
        title: "Vice PR Head ",
        name: 'Mohamed Ibrahim'
    },

    {
        href: "https://utfs.io/f/16b463e3-c2e8-40e6-afcd-f7a3a08d7822-5fs0do.jpg",
        title: "Vice OC head ",
        name: 'Haidy hosaam'
    },
    {
        href: "https://utfs.io/f/593afd26-2112-4c43-831f-03f35ec78727-57pq01.24.48_ea52dbfc.jpg",
        title: "Media head",
        name: 'Menna Elbanna'
    },
    {
        href: "https://utfs.io/f/4c1e879e-145e-4a54-9481-07d027ed8725-1x0j65.jpg",
        title: "OC Head",
        name: 'Ziad Sameh'
    },
    // {
    //     href: "https://utfs.io/f/13d14ea2-cad8-490c-b7da-3f7eae5604e9-qo29ok.jpg",
    //     title: "Manger",
    //     name: 'Ibrahim Hamdy'
    // },
    // {
    //     href: "https://utfs.io/f/052ca705-7223-45f8-99a7-01264deae8dd-tgw0x.jpg",
    //     title: "Manger",
    //     name: 'Mohamed Walid'
    // },

]



const page = () => {




    return (
        <div className='container mx-auto mt-12'>
            <div className='flex m-5 justify-center  flex-wrap'>
                <div className='w-full text-center  text-xl font-bold text-yellow-500 text-primary my-10'>
                    Faculty Heads
                </div>
                <Personal items={items} />
                <div className='w-full text-center  text-xl font-bold text-primary my-10'>
                    Orgnization Heads
                </div>
                <Personalstudent items={itemsSt} className='' />


            </div>

        </div >
    )
}

export default page