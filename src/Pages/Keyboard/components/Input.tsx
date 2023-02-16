import { useState } from 'react'
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
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
  const [isAnimationOn, setIsAnimationOn] = useState(false)

  function handleMouseEnter() {
    setIsAnimationOn(true)
    setDelayHandler(
      setTimeout(() => {
        setIsAnimationOn(false)
        startOrStop()
      }, time),
    )
  }

  function handleMouseLeave() {
    setIsAnimationOn(false)
    clearTimeout(delayHandler)
  }
  let timeComputed = '_25'

  if (time === 500) {
    timeComputed = '_05'
  } else if (time === 1000) {
    timeComputed = '_10'
  } else if (time === 1500) {
    timeComputed = '_15'
  } else if (time === 2000) {
    timeComputed = '_20'
  } else if (time === 2500) {
    timeComputed = '_25'
  } else if (time === 3000) {
    timeComputed = '_30'
  } else if (time === 3500) {
    timeComputed = '_35'
  } else if (time === 4000) {
    timeComputed = '_40'
  } else if (time === 4500) {
    timeComputed = '_45'
  } else if (time === 5000) {
    timeComputed = '_50'
  } else {
    timeComputed = '_25'
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
        {isKeyboardAllowed ? (
          <div className="max-h-[72px] max-lg:h-[35px]">
            <div
              className={`
              progress
              ${timeComputed}
              ${isAnimationOn ? 'block' : 'hidden'}
              max-lg:h-[35px]
            `}
            />
            <span
              className={`relative 
            ${isAnimationOn && 'bottom-[72px] max-lg:bottom-[35px]'}`}
            >
              <MdPause title="Pause" />
            </span>
          </div>
        ) : (
          <div className="max-h-[72px] max-lg:h-[35px]">
            <div
              className={`progress
              ${timeComputed}
              ${isAnimationOn ? 'block' : 'hidden'}
              max-lg:h-[35px]
              `}
            />
            <span
              className={`relative
              ${isAnimationOn && 'bottom-[72px] max-lg:bottom-[35px]'}`}
            >
              <MdPlayArrow title="Play" />
            </span>
          </div>
        )}
      </button>
    </div>
  )
}