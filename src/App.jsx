import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Reviews from './pages/Reviews';
import Specs from './pages/Specs';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

export default function App(){
  return <div className="app-shell">
    <Navbar />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Navigate to="/" replace/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="specs" element={<Specs/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer />
  </div>
}
