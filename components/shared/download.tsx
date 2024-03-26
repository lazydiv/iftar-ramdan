'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Order } from '@prisma/client';
import * as XLSX from 'xlsx';

interface DownloadExcelProps {
    orders: Order[]
}

const DownloadExcel = ({ orders }: DownloadExcelProps) => {

    const downloadExcel = (data: Order[]) => {
        // replace every id with yehia in json file
        data.forEach((order) => {
            order.createdAt.toString().replace(/-/g, '/').replace(/T/g, ' ').replace(/\..+/, '')
            
            order.mealType === 'meat' ? order.mealType = ' المال الحلال 150 جنية' : order.mealType === 'chiken' ? order.mealType = " الحشاشين 150 جنية" : order.mealType === 'fasting' ? order.mealType = "اكل صيامي 150 جنيه" : order.mealType = " الاقوي 160 جنية" 
        })
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
        // make cells wider so it can fit the text
        
        //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        XLSX.writeFile(workbook, "orders.xlsx");
    };


    return (
        <Button className="" onClick={() => (downloadExcel(orders))}>
            تحميل الطلبات
        </Button>
    )
}

export default DownloadExcel