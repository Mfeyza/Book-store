import React from 'react'
import { useState } from 'react';
import {data2} from "../helper/data2"

const ElektronikP = () => {
    
    const [seciliElektronik ,setSeciliElektronik]=useState("");
  
 console.log(data2);
    
    return (
      <div className='d-flex flex-column justify-content-center align-items-center '>
      
          <div className='d-flex justify-content-center align-items-center flex-wrap gap-5 cards mt-5'>
        {data2.map(({ id,image, title, price,description,  }) => (
          <div className="card"  key={id} style={{width: "18rem"}} >
              <img src={image} className="card-img-top" alt="..." style={{ height: "16rem", width: "16rem", objectFit: "cover" }}></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text desc">{description}</p>
              <p><strong></strong> {price}</p>
             
  
            </div>
            
            <div className="card-footer">
             <button className='button'>Sepete Ekle</button>
            </div>
          </div>
        ))}
      </div>
      
      </div>
    );
  };

export default ElektronikP
