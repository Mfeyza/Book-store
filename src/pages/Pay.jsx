
// import Card from 'react-bootstrap/Card';
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"
// import { useParams } from "react-router-dom";
// import myimg from "../img/old-books-2.jpg";

// import axios from "axios";



// const Pay = () => {
//   const [quantity, setQuantity] = useState(1);
//   const { id } = useParams();
//   const navigate = useNavigate()
//   console.log(id)
//   const [loading, setLoading] = useState(false);
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     const getBookDetails = async () => {
//       setLoading(true);
//       const apiKey = process.env.REACT_APP_API_KEY;
//       const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`;

//       try {
//         const response = await axios.get(url);
//         console.log('API Response:', response.data); 
//         setBook(response.data);
//       } catch (error) {
//         console.error("Bir hata oluştu!", error);
//       }
//       setLoading(false);
//     };

//     getBookDetails();
//   }, [id]);
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!book) {
//     return <p>No book found.</p>;
//   }

//   const { volumeInfo } = book;

//   const increase = () => {
//     setQuantity(Quantity => Quantity + 1);
//   };

//   const decrease = () => {
//     setQuantity(Quantity => Quantity > 1 ? Quantity - 1 : 1);
//   };

//   return (
//     <div>
//       <div className="offcanvas offcanvas-end canvasOff" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
//         <div className="offcanvas-header text-center">
//           <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><strong>Sepetim</strong></h5>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <Card style={{ width: '18rem' }}>
//           <Card.Img className="justfiy-content-center d-flex"
//           style={{ height: "16rem", width: "16rem", objectFit: "cover" }}
//           variant="top"
//           src={volumeInfo?.imageLinks?.thumbnail || myimg}
//         />
//             <Card.Body>
//               <Card.Title>{volumeInfo?.title}</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </Card.Text>
//               <div className='d-flex flex-row align-items-center'>
//                 <FontAwesomeIcon icon={faPlus} onClick={increase} />
//                 <p>{quantity}</p>
//                 <FontAwesomeIcon icon={faMinus} onClick={decrease} />
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pay;
import React from 'react'
