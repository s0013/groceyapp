import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('../Products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems ? cartItems.length : 0;

  const toggleCart = () => {
    setShowCart(!showCart);
  };

 return (
  <div className="container" style={{ backgroundImage: "url('data:image/jpeg;base64,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')", backgroundSize: 'cover', minHeight: '100vh' }}>
    <div className='d-flex justify-content-between px-4 bg-dark text-white align-items-center' style={{ marginTop: '20px' }}>
      <h2>GROCERY</h2>
      <h4 onClick={toggleCart}>Cart<small className="ms-2">{cartItemCount}</small></h4>
    </div>

    <div className='row mt-5 bg-slate-400'>
      <div className='col-md-8 bg-slate-400'>
        <div className='row row-cols-1 row-cols-md-3 g-4 bg-slate-400'>
          {products.map(product => (
            <div key={product.id} className='col'>
              <Product
                title={product.title}
                image={product.image}
                price={product.price}
                imageWidth="100px" // set width of the image
                imageHeight="auto" // set height of the image (auto for maintaining aspect ratio)
              />
            </div>
          ))}
        </div>
      </div>
      {showCart && (
        <div className="col-md-4">
          <Cart cartItems={cartItems} />
        </div>
      )}
    </div>
  </div>
);

}

export default Home;
