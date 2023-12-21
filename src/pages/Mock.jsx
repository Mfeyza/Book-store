import React, { useState } from 'react';
import axios from 'axios';

const Mock = () => {
  const [data, setData] = useState({
    name: 'Clarusway',
    price: '100',
    amount: '1',
    image: 'https://clarusway.com/wp-content/uploads/2022/07/clarusway-logo-classic.jpg'
  });
  const [products, setProducts] = useState([]);
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://65841cc14d1ee97c6bcf02d9.mockapi.io/api/productmfy/user';
      const productToAdd = { ...data, quantity: 1 }; 
      const response = await axios.post(url, productToAdd);
      setProducts([...products, { ...response.data }]);
      setData({
        name: '',
        price: '',
        amount: '',
        image: ''
      });
    } catch (error) {
      console.error('Ürün eklenirken bir hata oluştu', error);
    }
  };
  const handleDelete = async (productId, index) => {
    try {
      const url = `https://65841cc14d1ee97c6bcf02d9.mockapi.io/api/productmfy/user/${productId}`;
      await axios.delete(url); 
      const newProducts = products.filter(product => product.id !== productId); 
      setProducts(newProducts);
    } catch (error) {
      console.error('Ürün silinirken bir hata oluştu', error);
    }
  };
  const increase = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1; 
    setProducts(newProducts);
  };
  
  const decrease = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 1) {
      newProducts[index].quantity -= 1; 
      setProducts(newProducts);
    }
  };
  const ProductTotal = (product) => {
    return (product.price * product.quantity).toFixed(2);
  };


  return (
    <div>
        <div className='d-flex flex-row justify-content-evenly align-items-center flex-wrap'>
    <article className="mb-4 mt-4 form ">
      <h1 className="text-center">Ürün Ekle</h1>
      <form className="p-2" onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Ürün Adı</label>
          <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={handleData} required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Fiyat</label>
          <input type="number" className="form-control" id="price" name="price" value={data.price} onChange={handleData} required />
        </div>
       
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Miktar</label>
          <input type="number" className="form-control" id="amount" name="amount" value={data.amount} onChange={handleData} required />
        </div>
    
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Resim</label>
          <input type="url" className="form-control" id="image" name="image" value={data.image} onChange={handleData} required />
        </div>
     
        <div className="text-center">
          <button type="submit" className="btn button btn-success btn-sm">Add Product</button>
        </div>
      </form>
    </article>
    <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} className="img-fluid rounded-start" alt="Product" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Fiyat: {product.price}</p>
                  <p className="card-text">Miktar: {product.quantity}</p>
                </div>
              </div>
            </div>
            <p>Toplam: {ProductTotal(product)} TL</p>
            <div className='d-flex gap-5'>
            <button className='button1' onClick={() => increase(index)}>Artır</button>
            <button className='button1' onClick={() => decrease(index)}>Azalt</button>
            <button className='button' onClick={() => handleDelete(product.id, index)}>Sil</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Mock;
    


