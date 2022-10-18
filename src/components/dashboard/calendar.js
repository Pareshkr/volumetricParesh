import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calender() {
    const [value, onChange] = useState(new Date());
    return (
        <>
        <div className="w-full h-full  text-center ">
        <Calendar onChange={onChange} value={value} />
        </div>
        </>
    );
}