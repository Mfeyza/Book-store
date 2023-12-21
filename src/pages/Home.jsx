import React from "react";

import Main from "../components/Main";

import { useState } from "react";
import BookList from "./BookList";


import AdPage from "./AdPage";
import { data2 } from "../helper/data2";
import ElektronikP from "./ElektronikP";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(data2);
  return (
    <div className="kapsayıcı d-flex flex-column w-100 justify-content-center  align-items-center">
      <div className="w-100">
        <Main  book={books} setBooks={setBooks} setLoading={setLoading} />
      </div>

      <div className="d-flex flex-row w-100 justify-content-space-between">
       

        <BookList book={books} setBook={setBooks} loading={loading} />
      
      </div>
    </div>
  );
};

export default Home;
