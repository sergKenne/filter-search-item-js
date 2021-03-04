import React, {useState, useEffect} from 'react'

function Products({products}) {

    const convertArrayToObject = (products) => {
        const obj = {};
        const arrType = [...products]
            .map(item => item.type)
            .reduce((acc, type) =>  acc.includes(type) ? acc : [...acc, type] ,[]
        );

        arrType.forEach(type => {
            obj[type] = [];
        });

        products.forEach( product => {
            obj[product.type] = [...obj[product.type], product.name];
        })
        console.log("obj:", obj);
    }

     convertArrayToObject(products);

    const [types, setTypes] = useState([]); 

    const [items, setItems] = useState(products);
    
    const filterProduct = (type) => {
        console.log(type);
        const filter =  [...products].filter(item => item.type===type);
        console.log("filter:", filter);
        setItems(filter);
    }

    useEffect(()=>{
        setItems([...products]);
    },[products]);

    useEffect(()=> {
        const eltType = [...products].reduce((acc, prod) => {
            return acc.includes(prod.type)? acc : [...acc, prod.type]
        },[])

        setTypes(eltType);
    }, [products])

     return (
         <>
             <div className="main">
                 <div className="sidebar">
                     <ul className="list">
                         {types.map((item) => (
                             <li key={item} onClick={() => filterProduct(item)}>
                                 {item}
                             </li>
                         ))}
                     </ul>
                 </div>
                 <div className="products">
                     <ul className="prods">
                         {items &&
                             items.map((product) => {
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
