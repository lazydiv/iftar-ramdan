
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import Icon from './IconCom'

interface StatCardProps {
    stats: {
        title: string,
        value: string
    }[]

}


const StatCard = ({
    stats
}: StatCardProps) => {
    return (
        <>

            {stats.map((stat) => (
                
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
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
                
            ))}
        </>
    )
}

export default StatCard