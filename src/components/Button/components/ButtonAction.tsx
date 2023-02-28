import { useState } from 'react'
import { MdBackspace, MdSpaceBar } from 'react-icons/md'

interface ButtonActionProps {
  text: string
  time: number
  isKeyboardAllowed: boolean

  onAddWord: (word: string) => void
  onDeleteLastWord?: () => void
}

export function ButtonAction({
  text,
  onAddWord,
  onDeleteLastWord,
  time,
  isKeyboardAllowed,
}: ButtonActionProps) {
  const [delayHandler, setDelayHandler] = useState(null || Number)
  const [isAnimationOn, setIsAnimationOn] = useState(false)

  function handleMouseEnter() {
    if (isKeyboardAllowed) {
      setIsAnimationOn(true)
    }

    setDelayHandler(
      setTimeout(() => {
        if (text === 'space') {
          setIsAnimationOn(false)

          onAddWord(' ')
        } else if (text === 'delete') {
          setIsAnimationOn(false)

          onDeleteLastWord && onDeleteLastWord()
        }
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
    <button
      type="button"
      className="font-bold capitalize p-8 max-lg:p-4 flex justify-center"
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
          {text === 'space' ? <MdSpaceBar /> : <MdBackspace />}
        </p>
      </div>
    </button>
  )
}
