import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Cart.css'
//import * as React from 'react';
import dayjs from 'dayjs';

function Cart() {
function getItems(key:string):string[]{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as string[] :[];
}
const [items] = useState(getItems("bookingInfo"))
    return (
        <>
            <div>
                <h1 id='titleForCart'>
                    Appointments
                </h1>
                <h1>
                    Check Your Appointment
                </h1>
            </div>
            {items.map((item, i) => <div key={i}>
                {dayjs(item).format('MM-DD-YYYY HH:mm')}
                </div>)}
        </>
    )
}

export default Cart