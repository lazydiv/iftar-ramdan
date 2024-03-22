
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import Icon from './IconCom'

interface StatCardProps {
    icon: string;
    title: string;
    value: string;
}


const StatCard = ({
    icon,
    title,
    value
} : StatCardProps) => {
    return (
        <div>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {title}
                    </CardTitle>
                    <Icon name={icon}/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{value}</div>
                    <p className="text-xs text-muted-foreground">
                        from last month
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default StatCard