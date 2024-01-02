
import './App.css';
import ShopCatergory from './Pages/ShopCatergory';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import {LoginSignup} from './Pages/LoginSignup';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCatergory banner={men_banner} category='men'/>}/>
        <Route path='/women' element={<ShopCatergory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCatergory banner={kids_banner} category='kids'/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path=":productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
        
    
     
    </div>
  );
}

export default App;
