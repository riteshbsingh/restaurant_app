import { Routes, Route } from 'react-router-dom';
import './App.css'
import ProductContainer from './components/ProductContainer';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
