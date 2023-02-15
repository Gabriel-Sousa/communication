import { useState } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'

interface InputProps {
  phrase: string[]
  time: number
  isKeyboardAllowed: boolean
  startOrStop: () => void
}

export function Input({
  phrase,
  isKeyboardAllowed,
  startOrStop,
  time,
}: InputProps) {
  const [delayHandler, setDelayHandler] = useState(null || Number)

  function handleMouseEnter() {
    setDelayHandler(
      setTimeout(() => {
        startOrStop()
      }, time),
    )
  }

  function handleMouseLeave() {
    clearTimeout(delayHandler)
  }

  return (
    <div className="font-medium p-4 max-lg:p-2 flex justify-between items-center">
      <input
        type="text"
        className="text-gray-400 w-11/12"
        readOnly
        value={phrase.toString().replaceAll(',', '')}
      />
      <button
        className="justify-self-end mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isKeyboardAllowed ? <MdPause /> : <MdPlayArrow />}
      </button>
    </div>
  )
}
