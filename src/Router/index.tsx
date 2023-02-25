import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import Keyboard from '../Pages/Keyboard'

export function Router() {
  const [time, setTime] = useState(() => {
    const hasTimeLimitOnLocalStorage = localStorage.getItem('timeLimit-v1.0')
    if (hasTimeLimitOnLocalStorage) {
      return Number(hasTimeLimitOnLocalStorage)
    }
    return 2500
  })
  function changeTime(time: number) {
    setTime(time)
    localStorage.setItem('timeLimit-v1.0', JSON.stringify(time))
  }
  return (
    <Routes>
      <Route path="/" element={<Home time={time} changeTime={changeTime} />} />
      <Route path="/keyboard" element={<Keyboard time={time} />} />
    </Routes>
  )
}
