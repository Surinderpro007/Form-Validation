
// import { createContext, useRef, useState } from 'react'
// import './App.css'
// // import Context1 from './components/Context Api/Context1'

// import Formhandle from './components/Formhandle'
// // import Lifecycle from './components/Lifecycle'
// // import Timer from './components/Timer'
// import UseRef from './components/useRef/UseRef'
// import LargerFiber from './components/Fiber/LargerFiber'
// import ApiPage from './components/Pagination/ApiPage'

// // const colorProv = createContext()
// function App() {


//   // const [txtColor,setTxtColor] = useState("white")
//   // const [color,setColor] = useState("black")



//   return (
//     <>
//       {/* <Timer/> */}
//       {/* <Lifecycle/> */}
//       {/* <Formhandle/> */}

// {/* <colorProv.Provider value={{color,setColor,txtColor,setTxtColor}}>
// <div id="container" style={{backgroundColor:color,color:txtColor}}>
// <Context1/>
// </div>
// </colorProv.Provider> */}

// {/* <UseRef/> */}

// {/* <LargerFiber/> */}

// {/* <ApiPage/> */}

      
//     </>
//   )
// }


// export default App
// // export {colorProv}



// import React from "react";
// import BlogForm from "./components/Blog/BlogForm";
// import BlogList from "./components/Blog/BlogList";
// import { BlogProvider } from "./components/Blog/BlogContext";

// function App() {
//   return (
//     <BlogProvider>
//       <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
//         <h2>Blog App</h2>
//         <BlogForm />
//         <BlogList />
//       </div>
//     </BlogProvider>
//   );
// }
// export default App; 


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import BlogList from './components/X/BlogList';
// import BlogForm from './components/X/BlogForm';
// import BlogPost from './components/X/BlogPost';
// import { getAllBlogs } from './components/X2/blogService';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BlogList />} />
//         <Route path="/create" element={<BlogForm />} />
//         <Route path="/blog/:id" element={<BlogPost />} />
//         <Route 
//           path="/edit/:id" 
//           element={<BlogForm initialBlog={getAllBlogs().find(blog => blog.id === parseInt(window.location.pathname.split('/')[2], 10))} />} 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import logo from './logo.svg';
import './App.css';
import Products from './components/compo/Products/Products';
import { useState } from 'react';
import CartContext from './components/context/CardContext';
import FullCart from './components/compo/FullCart/FullCart';
function App() {
  let [cart, setCart] = useState({});

  function addToCart(product) {
    const newCart = { ...cart }; // copy of state
    if (!newCart[product.id]) {
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);

    console.log(product);
  }

  function removeFromCart(product) {
    console.log(product);
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      <div className="App">
        <FullCart />
        <Products />

      </div>
    </CartContext.Provider>
  );
}

export default App;


// ProductCard()

// cart = {1:{id: 1, title: x, quantity: 2}, 
//  2: { id: 2, title: x1, quantity: 1 }, 
//  3: { id: 3, title: x2, quantity: 3 }, 
//  4: { id: 4, title: x3, quantity: 4 }
//}
// product = { id: 2, title: x1, quantity: 1 }
// cart[product.id]