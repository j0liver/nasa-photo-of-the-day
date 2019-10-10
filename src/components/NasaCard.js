import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {NasaCardLayout} from './NasaCardLayout'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";



const NasaCard = () => {
    const [data, setData] = useState('')
    const [date, setDate] = useState('')
    const [datePicked, setDatePicked] = useState(new Date)
useEffect(() => {
    let dateString = new Date(
        datePicked.getTime() - (datePicked.getTimezoneOffset() * 60000)
      )
        .toISOString()
        .split("T")[0];
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=rocj75ODDqxakiAGGNl0xbDn5b8vkgbb5DV7aWhM&date=${dateString}`)
        .then(response => {
            console.log(response.data);
            setData(response.data)
        })
        .catch(error => {
            console.log(error);
        });
        
},[datePicked])
return (
    <div>
        <NasaCardLayout  title = {data.title} img = {data.hdurl} about = {data.explanation} copyright = {data.copyright} setDate = {setDatePicked} date = {date} datePicked = {datePicked} />
    </div>
)
}

export default NasaCard