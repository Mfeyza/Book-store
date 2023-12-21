import React, { useEffect, useState } from "react";
import axios from "axios";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rate from "../pages/Rate";
import Weather from "../pages/Weather";

const Main = ({ books, setBooks, setLoading }) => {
  const [input, setInput] = useState("");

  const getBooks = async () => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    const query = input || "";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=40`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Bir hata oluştu!", error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    console.log(input);
    if (input) {
      //!son harfi silsende setbookda eleman kalıyor false olduğu için içeri girmiyor bu yüzden boşaltmıyor else durumu ile kesin boşaltması sağlanır
      getBooks();
    } else {
      setBooks([]); //!input boşsa boşalt
    }
  }, [input]); //!inputta göre isteği tekrar at.

  return (
    <div className="d-flex justify-content-between align-items-center mt-5 flex-row ">
       <Rate />
      <div className="searchbox">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
        <input
          className="searchinput"
          placeholder="Kitap Ara"
          type="search"
          value={input}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <Weather className="weather" />
    </div>
  );
  // }
};

export default Main;
