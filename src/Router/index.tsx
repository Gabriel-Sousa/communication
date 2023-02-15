import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import Keyboard from '../Pages/Keyboard'

export function Router() {
  const [time, setTime] = useState(2500)
  function changeTime(time: number) {
    setTime(time)
  }
  return (
    <Routes>
      <Route path="/" element={<Home time={time} changeTime={changeTime} />} />
      <Route path="/keyboard" element={<Keyboard time={time} />} />
    </Routes>
  )
}
