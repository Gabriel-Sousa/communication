import { useState } from 'react'

interface ButtonSecondaryProps {
  text: string
  onAddWord: (word: string) => void
}

export function ButtonSecondary({ text, onAddWord }: ButtonSecondaryProps) {
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
      className="font-bold capitalize p-8 max-lg:p-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{text}</span>
    </button>
  )
}
