import { useState } from 'react'

interface ButtonPrimaryProps {
  text: string
  onAddWord: (word: string) => void
}
export function ButtonPrimary({ text, onAddWord }: ButtonPrimaryProps) {
  const [delayHandler, setDelayHandler] = useState(null || Number)

  function handleMouseEnter() {
    setDelayHandler(
      setTimeout(() => {
        onAddWord(text)
      }, 2500),
    )
  }

  function handleMouseLeave() {
    clearTimeout(delayHandler)
  }

  return (
    <button
      type="button"
      className="font-bold capitalize p-8 max-lg:px-4 max-lg:py-2 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{text}</span>
    </button>
  )
}
