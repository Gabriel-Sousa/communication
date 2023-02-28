import { BrowserRouter } from 'react-router-dom'

import { KeyboardProvider } from './hooks/useKeyboard'
import { TimeProvider } from './hooks/useTime'
import { Router } from './Router'

export default function App() {
  return (
    <BrowserRouter>
      <TimeProvider>
        <KeyboardProvider>
          <Router />
        </KeyboardProvider>
      </TimeProvider>
    </BrowserRouter>
  )
}
