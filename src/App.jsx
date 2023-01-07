import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Home/shared/Footer'
import Header from './components/Home/shared/Header'
import ProtectedRoutes from './components/Home/shared/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import { getAllProducts } from './store/slices/products.slice'


function App() {

  const [loading, setLoading] = useState(true)

  const [handleOpening, setHandleOpening] = useState(false)


  useEffect(() => {
    setLoading(false)
    setTimeout(() =>
      setLoading(true), [2000])
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className="App">
      <div className={`App__loading ${loading && 'App__loading-close'}`}  ></div>
      <Header setHandleOpening={setHandleOpening} handleOpening={handleOpening} />
      <div className='routes'>
        <Routes>
          <Route path='/' element={<Home handleOpening={handleOpening} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductInfo />} />
          {/*Rutas Protegidas*/}
          <Route element={<ProtectedRoutes />}>
            <Route className='login' path='/cart' element={<Cart />} />
            <Route path='/purchases' element={<Purchases />} />
          </Route>
        </Routes>
      </div>
      <Footer className='footer' />
    </div>
  )
}

export default App
