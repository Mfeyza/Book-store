import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import myimg from "../img/old-books-2.jpg";
import AdPage from "./AdPage";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../img/Spinner-1s-200px.gif";
import { Pagination } from "react-bootstrap";
import Paginate from "./Paginate";

const BookList = ({ book, setBook,loading }) => {
  console.log(book);
  const navigate=useNavigate()
  const [currentPage,setCurrentPage]=useState(1)//! mevcut sayfa sayısı için state varsaylan 1olarak ayarladım
  const [booksPerPage]=useState(5)//! her sayfada gösterilecek öge sayısı

  const indexOfLastBook=currentPage*booksPerPage ; //!Sayfada gösterilen son kitabın indexsi
  const indexOfFirstBook=indexOfLastBook-booksPerPage; //! Sayfadaki ilk kitabın indexsi
  const currentBook = book.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(book.length / booksPerPage);//!Toplam sayfa sayısı


  if (loading) {
    return (
      <div className="text-center mt-4 flex-grow-1">
        <img src={Spinner} alt="spinner" />
      </div>
    );
  } else if (book.length === 0) {
    return <AdPage />;
  } else {
    return (
      <div className="d-flex flex-wrap gap-5 mt-5 justify-content-center m-auto">
        {currentBook.map((book) => (
          <Card
            key={book.id}
            className="mb-4 d-flex justify-content-center card "
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              src={book?.volumeInfo?.imageLinks?.thumbnail || myimg}
              style={{ height: "16rem", width: "16rem", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{book?.volumeInfo?.title}</Card.Title>
              <Card.Text> {book?.volumeInfo?.authors}</Card.Text>
              <Card.Text> {book?.volumeInfo?.publishedDate}</Card.Text>
              <Card.Text className="card-footer"> <strong>{book?.saleInfo?.retailPrice?.amount || "100"} TL</strong></Card.Text>
              

            
              
            </Card.Body>
            <div className="card-footer">
              <Button className="button" variant="primary" onClick={() => navigate(`BookDetails/${book.id}`)}>
                Detay Görüntüle
              </Button>
              </div>
          </Card>
        ))}

 <Paginate pages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    );
  }
};

export default BookList;
