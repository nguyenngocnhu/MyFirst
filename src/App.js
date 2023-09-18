import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes ,Route } from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  return(
    <div>
    <Navbar />
  
    <Routes>
             <Route path="products" element={<Products />} />
             <Route path="/" element={<Home />} />
             <Route path="cart" element={<Cart />} />
             <Route path="/" element={<Home />} />
             <Route path="contact" element={<Contact />} />
             <Route path="about" element={<About />} />
             <Route path="/products/:id" element={<Product />} />

     </Routes>
     <div>
     <Footer/>
     </div>
   

  </div>
  );
}
  

export default App;
