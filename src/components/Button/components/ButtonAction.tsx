import { useState } from 'react'
import { MdBackspace, MdSpaceBar } from 'react-icons/md'

interface ButtonActionProps {
  text: string
  time: number
  onAddWord: (word: string) => void
  onDeleteLastWord?: () => void
}

export function ButtonAction({
  text,
  onAddWord,
  onDeleteLastWord,
  time,
}: ButtonActionProps) {
  const [delayHandler, setDelayHandler] = useState(null || Number)

  function handleMouseEnter() {
    setDelayHandler(
      setTimeout(() => {
        if (text === 'space') {
          onAddWord(' ')
        } else if (text === 'delete') {
          onDeleteLastWord && onDeleteLastWord()
        }
      }, time),
    )
  }

  function handleMouseLeave() {
    clearTimeout(delayHandler)
  }

  return (
    <button
      type="button"
      className="font-bold capitalize p-8 max-lg:p-4 flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text === 'space' ? <MdSpaceBar /> : <MdBackspace />}
    </button>
  )
}
