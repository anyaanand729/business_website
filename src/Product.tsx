//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Product.css'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {StaticDateTimePicker} from "@mui/x-date-pickers";

function Product() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2025-11-17T15:30'));
    return (
        <>
           <div id="productTitle">
               <h1>
                   ✂️Scheduling✂️
               </h1>
           </div>

            <div>
                Our salon’s activity is providing personalized beauty and wellness services that help clients look and feel their best. We create and deliver our services through a combination of expert staff, high-quality products, and a welcoming environment. From haircuts, coloring, and styling to skincare, nails, and makeup, each service is designed with attention to detail and tailored to the individual client. We focus on customer service excellence, ensuring that every visit is relaxing and enjoyable.
            </div>
            <h1>
                Each service costs $99.99
            </h1>

            <div id="muiThing">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        onAccept={()=> {
                            let bookingInfo = []
                            if(localStorage.getItem("bookingInfo") !== null){
                                bookingInfo = JSON.parse(localStorage.getItem("bookingInfo") as string);
                            }
                            bookingInfo.push(value);
                            localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
                        }}
                    />
                </LocalizationProvider>
            </div>
            <div>

            </div>
        </>

    )
}

export default Product
