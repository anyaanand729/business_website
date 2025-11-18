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
function getTotalCost(){
    let totalCost = 0;
    const storedArray = localStorage.getItem('bookingInfo');
    let myArray = []
    if(storedArray){
        myArray = JSON.parse(storedArray);
    }
    const arrayLength = myArray.length;
    for(let i=0; i<arrayLength; i++){
        totalCost += 99.99;
    }
    return totalCost;
}
function Clear(){
    localStorage.clear();
    setItems([]);
}
  function deleteItem(){
     localStorage.removeItem('bookingInfo');
     setItems([]);
  }

function getMonth(month: number){
    if(month==0)
        return "January";
    if(month==1){
        return "February";
    }
    if(month==2){
        return "March";
    }
    if(month==3){
        return "April";
    }
    if(month==4){
        return "May";
    }
    if(month==5){
        return "June";
    }
    if(month==6){
        return "July";
    }
    if(month==7){
        return "August";
    }
    if(month==8){
        return "September";
    }
    if(month==9){
        return "October";
    }
    if(month==10){
        return "November";
    }
    if(month==11){
        return "December";
    }
}
function getDayOfWeek(dayOfWeek: number){
    if(dayOfWeek==0){
        return "Sunday";
    }
    if(dayOfWeek==1){
        return "Monday";
    }
    if(dayOfWeek==2){
        return "Tuesday";
    }
    if(dayOfWeek==3){
        return "Wednesday";
    }
    if(dayOfWeek==4){
        return "Thursday";
    }
    if(dayOfWeek==5){
        return "Friday";
    }
    if(dayOfWeek==6){
        return "Saturday";
    }
}


const [items, setItems] = useState(getItems("bookingInfo"))
    return (
        <>
            <div>
                <h1 id='titleForCart'>
                    Appointments
                </h1>
                <h1>
                    Check Your Appointment
                </h1>
                <h2>
                    In military time
                </h2>
            </div>
            {items.map((item, i) => <div key={i}>
                Booking
                For {getDayOfWeek(dayjs(item).day())}, {getMonth(dayjs(item).month())} {dayjs(item).date()}, {dayjs(item).year()} at {dayjs(item).hour()} : {dayjs(item).minute()} for
                $99.99
                <button onClick={() => deleteItem()}>Clear</button>
            </div>)}

            <h2>
                Total Cost: ${getTotalCost()}
            </h2>

            <div>
                <button onClick={()=>Clear()}>Clear</button>
            </div>
        </>
    )
}

export default Cart