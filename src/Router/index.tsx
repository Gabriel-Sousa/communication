import { Route, Routes } from 'react-router-dom'

import Choice from '../Pages/Choice'
import Home from '../Pages/Home'
import Keyboard from '../Pages/Keyboard'
import Phrases from '../Pages/Phrases'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keyboard" element={<Keyboard />} />
      <Route path="/choice" element={<Choice />} />
      <Route path="/phrases" element={<Phrases />} />
    </Routes>
  )
}
