import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import myimg from "../img/old-books-2.jpg";
import Spinner from "../img/Spinner-1s-200px.gif";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      setLoading(true);
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log("API Response:", response.data);
        setBook(response.data);
      } catch (error) {
        console.error("Bir hata oluştu!", error);
      }
      setLoading(false);
    };

    getBookDetails();
  }, [id]);
  if (loading) {
    return  <div className="text-center mt-4 flex-grow-1">
    <img src={Spinner} alt="spinner" />
  </div>
  }

  if (!book) {
    return <p>No book found.</p>;
  }

  const { volumeInfo, saleInfo } = book;
  const handleBuyButtonClick = () => {
    //! Öncelikle mevcut kitapları localStorage'dan al
    const savedBooks = JSON.parse(localStorage.getItem("selectedBooks")) || [];
    //! Yeni kitabı diziye ekle
    savedBooks.push(book);
    //! Yeni diziyi localStorage'a kaydet
    localStorage.setItem("selectedBooks", JSON.stringify(savedBooks));
    navigate("/Payy");
  };
  return (
    <div>
      <Card className="mb-4 text-center details" style={{ width: "100%" }}>
        <div className="d-flex justify-content-center">
          <Card.Img
            style={{ height: "16rem", width: "16rem", objectFit: "cover" }}
            variant="top"
            src={volumeInfo?.imageLinks?.thumbnail || myimg}
          />
        </div>
        <Card.Body>
          <Card.Title>{volumeInfo?.title}</Card.Title>
          <Card.Text>{volumeInfo?.authors}</Card.Text>
          <Card.Text>
            {volumeInfo?.description ? (
              <div
                dangerouslySetInnerHTML={{ __html: volumeInfo.description }}
              />
            ) : (
              "No description available."
            )}
          </Card.Text>
          <Card.Text>{/* {saleInfo?.retailPrice.amount || "100"} */}</Card.Text>
          <Button
            className="button footer-card"
            variant="primary"
            onClick={handleBuyButtonClick}
          >
            Satın Al
          </Button>
          <Button
            className="button footer-card"
            variant="primary"
            onClick={() => navigate(-1)}
          >
            Geri
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookDetails;
