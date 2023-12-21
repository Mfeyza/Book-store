
import React, { useEffect, useState } from 'react'
import {faCaretUp,faCaretDown}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Rate = () => {
  const [rate,setRate]=useState([])
   const getRate = async () => {
   
    const url ="https://finans.truncgil.com/today.json"
       
        try {
        const res = await fetch(url)
        const data = await res.json()
          console.log(data);
          setRate(data);
        } catch (error) {
          console.error("Bir hata oluştu!", error);
        }
       
      };
      useEffect(()=>{
        getRate()
      },[])
      
      
  return (
    <div className='ms-5'  >
    <p>
      <strong>USD:</strong>   {rate.USD ? rate.USD.Alış : "Yükleniyor..."}{rate.USD && (rate.USD.Değişim.includes('-') ? <FontAwesomeIcon icon={faCaretDown} fade style={{color: "#e21232",fontSize:"30px"}} /> :  <FontAwesomeIcon icon={faCaretUp} fade style={{color: "#31bf4d",fontSize:"30px"}} />)}
      </p>
      <p>
     <strong>EUR:</strong>    {rate.EUR ? rate.EUR.Alış : "Yükleniyor..."} 
        {rate.EUR && (rate.EUR.Değişim.includes('-') ? <FontAwesomeIcon icon={faCaretDown} fade style={{color: "#e21232",fontSize:"30px"}} /> :  <FontAwesomeIcon icon={faCaretUp} fade style={{color: "#31bf4d",fontSize:"30px"}}/>)} </p>
    </div>
  )
}

export default Rate