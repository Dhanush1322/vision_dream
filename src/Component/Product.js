import React from 'react';
import '../Css/Product.css'; // Add any CSS styles here
import Header from './Header';
import Footer from './Footer';
import c1 from '../img/c1.jpg'
import c2 from '../img/c2.jpg'
import c3 from '../img/c3.jpg'
import c4 from '../img/c4.jpg'


function Product() {
  return (
    <>
    <Header/>
    <div className="product-container">
      <div className="product-row">
        {/* Product 1 */}
        <div className="product-item">
          <img src={c1} alt="Product 1" className="product-image" />
          <p className="product-name">Product 1</p>
        </div>

        {/* Product 2 */}
        <div className="product-item">
          <img src={c2} alt="Product 2" className="product-image" />
          <p className="product-name">Product 2</p>
        </div>

        {/* Product 3 */}
        <div className="product-item">
          <img src={c3} alt="Product 3" className="product-image" />
          <p className="product-name">Product 3</p>
        </div>

        {/* Product 4 */}
        <div className="product-item">
          <img src={c4} alt="Product 4" className="product-image" />
          <p className="product-name">Product 4</p>
        </div>
         {/* Product 4 */}
         <div className="product-item">
          <img src={c4} alt="Product 4" className="product-image" />
          <p className="product-name">Product 4</p>
        </div>
         {/* Product 4 */}
         <div className="product-item">
          <img src={c4} alt="Product 4" className="product-image" />
          <p className="product-name">Product 4</p>
        </div>
         {/* Product 4 */}
         <div className="product-item">
          <img src={c4} alt="Product 4" className="product-image" />
          <p className="product-name">Product 4</p>
        </div>
         {/* Product 4 */}
         <div className="product-item">
          <img src={c4} alt="Product 4" className="product-image" />
          <p className="product-name">Product 4</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Product;
