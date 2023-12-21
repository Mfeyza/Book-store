import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../img/anasayfa_1200x390-18122023dr123.webp"
import img2 from "../img/anasayfa_1200x390-Aralik-Kitaplarda-Yogun-Kis-Indirimi.webp"
import img3 from "../img/anasayfa_1200x390-Yapi-Kredi-Yayinlari-Ozel-Fiyatlar.webp"



const AdPage = () => {
  return (
    <div className='d-flex justify-content-center w-100 mt-5 '>
    <Carousel >
      <Carousel.Item className='w-100' >
      <img src={img1} alt=""  />
        
      </Carousel.Item>
      <Carousel.Item className='w-100'>
        <img src={img2} alt="" />
       
       
        
      </Carousel.Item>
      <Carousel.Item className='w-100'>
       <img src={img3} alt="" />
       
      </Carousel.Item>
    </Carousel>

   
  
    </div>
  )
}

export default AdPage