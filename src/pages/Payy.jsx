import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import myimg from "../img/old-books-2.jpg";
import sepetimg from "../img/ayyildiz.jpg"

import axios from "axios";

const Payy = () => {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()
  
    useEffect(() => {
        setLoading(true);
        const savedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        //! her kitaba ait miktarı ekle
        const booksWithQuantities = savedBooks.map(book => ({
          ...book,
          quantity: 1 //! bşlangıçta her kitabın miktarı 1
        }));
        setBooks(booksWithQuantities);
        setLoading(false);
      }, []);
    if (loading) {
      return <div>
        <p>Loading...</p>;
   
      </div> 
    }
  
    if (!books.length) {
      return <div className='d-flex justify-content-center align-items-center flex-column'>
        <p>Sepete Ürün Ekle.</p>
        <img src={sepetimg} alt=""className='w-50 h-50 ' />;
      </div> 
    }
  
    const discount = 0.20;
    const shipping = 25;
    const subTotal = books.reduce(
        (acc, book) => (book?.saleInfo?.retailPrice?.amount || 100) * book.quantity + acc,
        0
      );
      const discountA = subTotal * discount;
      const total = subTotal - discountA + shipping;
      const increase = (bookId) => {
        setBooks(CBooks =>
          CBooks.map(book =>
            book.id === bookId ? { ...book, quantity: book.quantity + 1 } : book
          )
        );
      };
      
      const decrease = (bookId) => {
        setBooks(CBooks =>
          CBooks.map(book =>
            book.id === bookId && book.quantity > 1
              ? { ...book, quantity: book.quantity - 1 }
              : book
          )
        );
      };
      const removeBook = (bookId) => {
        const updateBooks = books.filter(book => book.id !== bookId);
        setBooks(updateBooks);
        localStorage.setItem('selectedBooks', JSON.stringify(updateBooks));
      };
      const clear = () => {
        setBooks([]); 
        localStorage.setItem('selectedBooks', JSON.stringify([])); 
      };
    return (
      <div className='d-flex flex-row w-100 justify-content-between mt-5'>
        <div className='d-flex flex-row justify-content-center ms-5 flex-wrap gap-5'>
         {books.map((book) => (
          
        <Card style={{ width: '15rem'}}>
          <Card.Img
            style={{ height: "10rem", width: "15rem", objectFit: "cover" }}
            variant="top"
            src={book?.volumeInfo?.imageLinks?.thumbnail || myimg}
          />
          <Card.Body>
            <Card.Title>{book?.volumeInfo?.title}</Card.Title>
            <Card.Title>{book?.saleInfo?.retailPrice?.amount || 100}</Card.Title>
            <div className='d-flex flex-row align-items-center justify-content-center'>
              <div className='hesapbtn me-3'> <FontAwesomeIcon icon={faPlus} className='btn'  onClick={() => increase(book.id)} /></div>
                
                <div className='mt-3 fs-5'><p><strong>{book.quantity}</strong></p></div> 
                <div className='hesapbtn ms-3'> <FontAwesomeIcon className='btn' icon={faMinus} onClick={() => decrease(book.id)} /></div>
               
              </div>
              <Button className='button1 card-footer' onClick={() => removeBook(book.id)}>Sil</Button>
          </Card.Body>
        </Card>))}
        </div>
        <div  className='me-5 d-flex  flex-column '>
        <table className="table d-flex justify-content-center me-5 ">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Toplam Tutar:</th>
          <td>
            <span className="subtotal">{subTotal.toFixed(2)}</span>TL
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">İndirim(20%)</th>
          <td>
            <span className="tax">{(subTotal * discount).toFixed(2)}</span> TL
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Kargo Ücreti</th>
          <td>
            <span className="shipping">{shipping.toFixed(2)}</span> TL
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Ödenecek Tutar:</th>
          <td>
            
            <span className="total">
              {(subTotal + subTotal * discount + shipping).toFixed(2)}
              TL</span>
          </td>
        </tr>
        
      </tbody>
    </table>
    <div className='d-flex  flex-column w-100 '>
    <button className='button m-1'onClick={() => navigate("/Login")}>Satın Al</button>
    <button className='button1 m-1 'onClick={clear}>Sepeti Temizle</button>
    </div>
   
        </div>
      </div>
    );
  };
  
  export default Payy;