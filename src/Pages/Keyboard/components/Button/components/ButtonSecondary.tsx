import { useState } from 'react'

interface ButtonSecondaryProps {
  text: string
  time: number
  isKeyboardAllowed: boolean
  onAddWord: (word: string) => void
}

export function ButtonSecondary({
  text,
  onAddWord,
  time,
  isKeyboardAllowed,
}: ButtonSecondaryProps) {
  const [delayHandler, setDelayHandler] = useState(null || Number)
  const [isAnimationOn, setIsAnimationOn] = useState(false)

  function handleMouseEnter() {
    if (isKeyboardAllowed) {
      setIsAnimationOn(true)
    }

    setDelayHandler(
      setTimeout(() => {
        setIsAnimationOn(false)
        onAddWord(text)
      }, time),
    )
  }

  function handleMouseLeave() {
    setIsAnimationOn(false)
    clearTimeout(delayHandler)
  }

  return (
    <button
      type="button"
      className="font-bold capitalize p-8 max-lg:p-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-h-[72px] max-lg:h-[36px]">
        <div
          className={`progress 
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
