import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import myimg from "../img/old-books-2.jpg";

import axios from "axios";

const Payy = () => {
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()
  
    useEffect(() => {
        setLoading(true);
        const savedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        // Her kitaba ait miktarı ekle
        const booksWithQuantities = savedBooks.map(book => ({
          ...book,
          quantity: 1 // Başlangıçta her kitabın miktarı 1
        }));
        setBooks(booksWithQuantities);
        setLoading(false);
      }, []);
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!books.length) {
      return <p>No books in cart.</p>;
    }
  
    const discount = 0.20;
    const shipping = 25;
    const subTotal = books.reduce(
        (acc, book) => book?.saleInfo?.retailPrice?.amount * book.quantity + acc,
        0
      );
      const discountAmount = subTotal * discount;
      const total = subTotal - discountAmount + shipping;
      const increase = (bookId) => {
        setBooks(currentBooks =>
          currentBooks.map(book =>
            book.id === bookId ? { ...book, quantity: book.quantity + 1 } : book
          )
        );
      };
      
      const decrease = (bookId) => {
        setBooks(currentBooks =>
          currentBooks.map(book =>
            book.id === bookId && book.quantity > 1
              ? { ...book, quantity: book.quantity - 1 }
              : book
          )
        );
      };
      const removeBook = (bookId) => {
        const updatedBooks = books.filter(book => book.id !== bookId);
        setBooks(updatedBooks);
        localStorage.setItem('selectedBooks', JSON.stringify(updatedBooks));
      };
    return (
      <div className='d-flex flex-row w-100 gap-5'>
         {books.map((book) => (
        <Card style={{ width: '16rem' }}>
          <Card.Img
            style={{ height: "10rem", width: "16rem", objectFit: "cover" }}
            variant="top"
            src={book?.volumeInfo?.imageLinks?.thumbnail || myimg}
          />
          <Card.Body>
            <Card.Title>{book?.volumeInfo?.title}</Card.Title>
            <Card.Title>{book?.saleInfo?.retailPrice?.amount}</Card.Title>
            <div className='d-flex flex-row align-items-center'>
                 <FontAwesomeIcon icon={faPlus}  onClick={() => increase(book.id)} />
                 <p>{book.quantity}</p>
                <FontAwesomeIcon icon={faMinus} onClick={() => decrease(book.id)} />
              </div>
              <Button className='button1 card-footer' onClick={() => removeBook(book.id)}>Sil</Button>
          </Card.Body>
        </Card>))}
        <div>
        <table className="table">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Discount(20%)</th>
          <td>
            $<span className="tax">{(subTotal * discount).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(subTotal + subTotal * discount + shipping).toFixed(2)}
            </span>
          </td>
        </tr>
        <button className='button'onClick={() => navigate("/Login")}>Satın Al</button>
      </tbody>
    </table>
        </div>
      </div>
    );
  };
  
  export default Payy;