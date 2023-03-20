import { useState } from 'react'

import { useKeyboard } from '../../hooks/useKeyboard'
import { useTime } from '../../hooks/useTime'

interface ButtonSecondaryProps {
  text: string
  variantPhrase?: boolean
}

export function ButtonSecondary({
  text,
  variantPhrase = false,
}: ButtonSecondaryProps) {
  const { time } = useTime()
  const { isKeyboardAllowed, addWord } = useKeyboard()
  const [delayHandler, setDelayHandler] = useState(null || Number)
  const [isAnimationOn, setIsAnimationOn] = useState(false)

  function handleMouseEnter() {
    if (isKeyboardAllowed) {
      setIsAnimationOn(true)
    }

    setDelayHandler(
      setTimeout(() => {
        setIsAnimationOn(false)
        addWord(text)
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

  if (variantPhrase) {
    return (
      <button
        type="button"
        className="font-bold capitalize p-8 max-lg:p-3 text-5xl max-2xl:text-4xl max-sm:text-2xl transition-all  lg:h-[112px] md:h-[100px] max-sm:h-[]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-h-[60px] max-lg:h-[36px] max-md:h-[24px]">
          <div
            className={`progress
          ${timeComputed}
          ${isAnimationOn ? 'block' : 'hidden'}
          
            max-lg:h-[36px] max-md:h-[24px]
          `}
          />
          <p
            className={`relative 
            ${
              isAnimationOn &&
              `
              bottom-[72px] 
              max-lg:bottom-[36px]
              max-md:bottom-[24px]
              `
            }`}
          >
            {text}
          </p>
        </div>
      </button>
    )
  } else {
    return (
      <button
        type="button"
        className="font-bold capitalize p-8 max-lg:p-3 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-h-[72px] max-lg:h-[36px]">
          <div
            className={`progress
          ${timeComputed}
          ${isAnimationOn ? 'block' : 'hidden'}
            max-lg:h-[36px]
          `}
          />
          <p
            className={`relative
            ${isAnimationOn && 'bottom-[72px] max-lg:bottom-[36px]'}`}
          >
            {text}
          </p>
        </div>
      </button>
    )
  }
}
