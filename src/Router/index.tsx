import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import Keyboard from '../Pages/Keyboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keyboard" element={<Keyboard />} />
    </Routes>
  )
}
