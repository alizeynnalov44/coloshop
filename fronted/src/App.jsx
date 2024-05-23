
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AddProducts from './Pages/AddProducts';
import ProductDetails from './Pages/ProductDetails';
import NotFound from './Pages/NotFound';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
function App() {
  

  return (
    
 <div>
  <Header/>
 <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/AddProducts' element={<AddProducts />} />
          <Route path="/ProductDetails" element={<ProductDetails/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
<Footer/>
 </div>
        
  )
}




export default App
