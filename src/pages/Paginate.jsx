import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({ pages, setCurrentPage }) => {
  const [activePage, setActivePage] = useState(1); //! aktif olan sayfa numarasını tutan state

  const handleSelect = (number) => { //! sayfa numarası seçildiğinde çalışacak fonksiyon
    setActivePage(number); //! aktif sayfa sayısını güncelle
    setCurrentPage(number);//! güncel sayfa numarasını bookliste iletecek
  };

  let items = [];
  //! toplam sayf sayısı kadar pagination.item oluştur
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handleSelect(number)}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => { //!sayfa sayısı değiştiğinde setcurrenpage ile bookliste haber ver
    setCurrentPage(activePage);
  }, [activePage, setCurrentPage]);

  return (
    <div>
      <Pagination className='pagination'>{items}</Pagination>
    </div>
  );
};

export default Paginate;