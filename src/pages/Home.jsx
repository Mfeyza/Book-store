import React from 'react'

import Main from '../components/Main'
import Weather from './Weather'
import { useState } from 'react'
import BookList from './BookList'
import Rate from './Rate'

import AdPage from './AdPage'
import {data2} from '../helper/data2'
import ElektronikP from './ElektronikP'






const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  
console.log(data2);
  return (
    <div className='kapsayıcı d-flex flex-column w-100 '>
      <Main  book={books} setBooks={setBooks} setLoading={setLoading}/>
     <div className='d-flex flex-row w-100 justify-content-space-between' >
   <Rate />
       
      
      <BookList  book={books} setBook={setBooks} loading={loading} />
      <Weather className="weather"/>
        </div>
    
    


    
    </div>
  )
}

export default Home