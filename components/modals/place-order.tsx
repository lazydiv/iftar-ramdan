'use client';

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import qs from 'query-string';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../ui/button';

import { Input } from '@/components/ui/input';
import { useModal } from '@/hooks/use-model-store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useToast } from '../ui/use-toast';
import { useState } from 'react';

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'يجب ادخال الاسم كامل'
    }),
    uniId: z.string().min(1, {
        message: 'يجب ادخال الكود الجامعي'
    }),
    phone: z.string().min(1, {
        message: 'يجب ادخال رقم الهاتف'
    }),
    mealType: z.string().min(1, {
        message: 'يجب اختيار نوع الوجبة'
    })

})



export const PlaceOrder = () => {
    const { isOpen, type, onClose } = useModal();
    
    const router = useRouter();

    const ismodalOpen = isOpen && type === 'placeOrder';

    const form = useForm(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: '',
                uniId: '',
                phone: '',
                mealType: ''
            }
        }
    );
    const { toast } = useToast()



    const isLoading = form.formState.isSubmitting;
    

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      
        try {
            // const url = qs.stringifyUrl({
            //     url: "/api/orders",
            //     query: {
            //         userId: params?.userId,
            //         uniId: params?.uniId,
            //         phone: params?.phone
            //     }
            // })
            await axios.post('/api/orders', values);
            form.reset();
            router.refresh()
            onClose();
        } catch (error) {


            console.log(error);
        } finally {
            toast({
                variant: 'success',
                title: "تم اضافة طلبك بنجاح !",
                description: "تم اضافة الطلب بنجاح برجاء التوجه الي طلباتي لمتابعه حالة الطلب.",
                
                
              })
        }
    }

    const onClosemodal = () => {
        form.reset()
        onClose()
    }
    const [meal, setMeal] = useState('')


    const priceHandler = (price: string) => {
        setMeal(price)
        console.log(meal)
    }

    return (
        <Dialog open={ismodalOpen} onOpenChange={onClosemodal}>
            <DialogContent className=''>
                <DialogHeader>
                    <DialogTitle className='text-primary font-bold  text-center text-2xl'>افطر معانا !</DialogTitle>
                </DialogHeader>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <div className='space-y-8 '>

                            <FormField
                                control={form.control}
                                name='name'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            الاسم كامل
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='ادخل الاسم كامل'
                                                className='bg-foreground/5 '
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='uniId'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            الرقم القومي
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='ادخل  الرقم القومي'
                                                className='bg-foreground/5 '
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='phone'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            رقم الهاتف
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='(رقم واتساب) ادخل رقم الهاتف '
                                                className='bg-foreground/5 '
                                                {...field}
                                            />

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div><FormField
                            control={form.control}
                            name='mealType'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>نوع الوجبة</FormLabel>
                                    <Select
                                        disabled={isLoading}
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}

                                    >
                                        <FormControl>
                                            <SelectTrigger
                                                className='focus:ring-0 bg-foreground/5  dark:text-yellow-50 ring-offset-0
                                                        focus:ring-offset-0 capitalize
                                                        outline-none'

                                            >
                                                <SelectValue placeholder="اختار نوع الوجبة"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>

                                            <SelectItem key={type}   value='chiken' className='capitalize'>
                                                عرض الحشاشين 150 جنيه
                                            </SelectItem>
                                            <SelectItem key={type} value='meat'   className='capitalize'>
                                                عرض المال الحلال 150 جنيه
                                            </SelectItem>
                                            <SelectItem key={type} value='mix' className='capitalize'>
                                                عرض الاقوي 160 جنيه
                                            </SelectItem>
                                            <SelectItem key={type} value='fasting'  onClick={() => priceHandler('fasting')} className='capitalize'>
                                                اكل صيامي 150 جنيه
                                            </SelectItem>

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />
                        </div>
                        <DialogFooter className='py-4'>
                            <Button variant={'primary'} className='w-full' disabled={isLoading}>اطلب</Button>
                        </DialogFooter>
                    </form>
                </Form>
                       
            </DialogContent>
        </Dialog>
    )
}
