import { createContext, ReactNode, useContext, useState } from 'react'

interface TimeContextData {
  time: number
  changeTime: (time: number) => void
}

interface TimeProviderProp {
  children: ReactNode
}
export const TimeContext = createContext({} as TimeContextData)

export function TimeProvider({ children }: TimeProviderProp) {
  const [time, setTime] = useState(() => {
    const hasTimeLimitOnLocalStorage = localStorage.getItem(
      '@communication:time-limit-1.0.0',
    )
    if (hasTimeLimitOnLocalStorage) {
      return Number(hasTimeLimitOnLocalStorage)
    }
    return 2500
  })
  function changeTime(time: number) {
    setTime(time)
    localStorage.setItem(
      '@communication:time-limit-1.0.0',
      JSON.stringify(time),
    )
  }
  return (
    <TimeContext.Provider value={{ time, changeTime }}>
      {children}
    </TimeContext.Provider>
  )
}

export function useTime(): TimeContextData {
  const context = useContext(TimeContext)

  return context
}
