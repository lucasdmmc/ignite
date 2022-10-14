import {Route, Routes} from 'react-router-dom'
import { CompleteOrderPage } from './Pages/CompleteOrder'
import { HomePage } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/completeOrder' element={<CompleteOrderPage />} />
    </Routes>
  )
}