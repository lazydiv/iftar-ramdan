
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'

interface StatCardProps {
    stats: {
        title: string,
        value: string,
        href?: string
    }[]

}


const StatCard = ({
    stats
}: StatCardProps) => {

    
    return (
        <>

            {stats.map((stat) => (
                    <Link href={stat.href || ''} key={stat.title}>
                    <Card key={stat.title} className='w-full md:max-w-56'>
                        <CardHeader className="flex flex-col items-center justify-between space-y-0   pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                from last month
                            </p>
                        </CardContent>
                    </Card>
                
                </Link>
            ))}
        </>
    )
}

export default StatCard