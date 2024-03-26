'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Order } from '@prisma/client';
import * as XLSX from 'xlsx';

interface DownloadExcelProps {
    orders: Order[]
}

const DownloadExcel = ({ orders }: DownloadExcelProps) => {

    orders.forEach((order) => {
        order.mealType === 'meat' ? order.mealType = ' المال الحلال 150 جنية' : order.mealType === 'chiken' ? order.mealType = " الحشاشين 150 جنية" : order.mealType === 'fasting' ? order.mealType = "اكل صيامي 150 جنيه" : order.mealType === 'mix' ? order.mealType = 'عرض الاقوي 160' : null
    })

    const downloadExcel = (data: Order[]) => {
        // replace every id with yehia in json file
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
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