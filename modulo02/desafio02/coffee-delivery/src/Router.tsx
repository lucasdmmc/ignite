import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  )
}
