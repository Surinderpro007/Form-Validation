

import ProductCard  from '../ProductCard/ProductCard';
import { useState, useEffect } from "react";
// const products = [
//   {
//     title: "Apple iPhone 14",
//     price: "Rs. 10,000"
//   },
//   {
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//   },
//   {
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ];


function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch('https://run.mocky.io/v3/63713955-6134-4c03-b531-db498973ec3c') 
    fetch('https://fakestoreapi.com/products') 
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (<ProductCard item={item} />);
      })}
    </div>
  )

}

export default Products;


// by the time products = data happens
// the return is already done 
// products is set 

// Hooks 
// useState hook 
// State variable 

// Hooks are helper functions of React 

// useState hook

// State variable
// 1) Once set causes a rerender of the component
// 2) It is set using a setter function 

// useEffect hook
// useEffect(function() {}, [])


// render 
// rerender
// mounting - when a component is called for the first time it is known as mounting 


// useEffect(callback, depArray)[]
