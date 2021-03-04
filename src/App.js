import React, {useEffect, useState} from 'react';
import './App.css';
import data from './data';
import Products from './component/Products';
import ProductsFilterByObject from './component/ProductsFilterByObject'

function App() {

  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(()=>{

    setProducts(data)

  },[]);

  return (
      <div className="App">
          {/* <Products products={products} /> */}
          <hr />
          <ProductsFilterByObject products={products} />
      </div>
  );
}

export default App;
