import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Home/shared/Footer'
import Header from './components/Home/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import { getUserCart } from './store/slices/cart.slice'
import { getAllProducts } from './store/slices/products.slice'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getUserCart())
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route className='login' path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductInfo />} />

      </Routes>
      <Footer className='footer' />
    </div>
  )
}

export default App
