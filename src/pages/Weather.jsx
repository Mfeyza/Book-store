
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {
    const [input, setInput] = useState("İstanbul");
    const [weather,setWeather]=useState([]);
    const [error, setError] = useState("");
   

  const getWeather = async () => {
    if (!input) {
        setError("Lütfen bir şehir ismi giriniz.");
        return;
      }
    
    const APIkey = process.env.REACT_APP_API_KEY1;
    const cityName = input || "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=tr&units=metric&appid=${APIkey}`;

    try {
      const res = await axios.get(url);
      console.log(res.data);
      setError("");
        setWeather(res.data);
      
      

    } catch (error) {
      console.error("Bir hata oluştu!", error);
    }
    
  };
  useEffect(() => {
    if (input) {
      getWeather();
    }else{
      setInput([])
    }
  }, [input])
 
  const handleChange = (e) => {
    setInput(e.target.value);
};

  return (
    <div >
 <div className="input-group input-group-sm mb-3">
  <input type="text" className="form-control" placeholder='Şehir Ara..' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
   value={input}
   onChange={handleChange}/>
</div>

<div>
{weather.main&&
 <>
  <q>sıcaklık : {weather?.main?.temp}</q>
  <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" style={{fontSize:"10px"}} /></>
 
}
 

  
</div>

    </div>
  )
}

export default Weather