import React, {useState, useEffect} from 'react'

function Products({products}) {

    const [type, setType] = useState(""); 

    const filterProduct = (type) => {
        setType(type)
    }

    const convertArrayToObject = (products) => {
        const obj = {};
        const arrType = [...products]
            .map((item) => item.type)
            .reduce((acc, type) => (acc.includes(type) ? acc : [...acc, type]), []);

        arrType.forEach((type) => {
            obj[type] = [];
        });

        products.forEach((product) => {
            obj[product.type] = [...obj[product.type], product.name];
        });

        console.log('obj:', obj);
        return obj;
    };

    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <ul className="list">
                        {[...products]
                            .reduce((acc, prod) => {
                                return acc.includes(prod.type) ? acc : [...acc, prod.type];
                            }, [])
                            .map((item) => (
                                <li key={item} onClick={() => filterProduct(item)}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="products">
                    <ul className="prods">
                        {type
                            ? convertArrayToObject(products)[type].map((product) => {
                                  return (
                                      <li key={product.id}>
                                          <p>Type: {type}</p>
                                          <p>Name: {product}</p>
                                      </li>
                                  );
                              })
                            : [...products].map((product) => {
                                  return (
                                      <li key={product.id}>
                                          <p>Type: {product.type}</p>
                                          <p>Name: {product.name}</p>
                                      </li>
                                  );
                              })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products
