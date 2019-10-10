import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const NasaCardLayout = (props) => {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <img src = {props.img} />
            <p>{props.about}</p>
            {props.copyright ?
            <h2>CopyRight: {props.copyright}</h2>:
            <h2>No CopyRight</h2>}
            {/* <DatePicker  onChange={date => props.setDate(date)} /> */}
            <DatePicker selected={props.datePicked} onChange={ date => props.setDate(date)} />
        </div>
    )
}