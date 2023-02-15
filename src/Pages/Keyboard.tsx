import { useState } from 'react'

import { version } from '../../package.json'
import { Input } from '../components/Input'
import { Letters } from '../components/Letters'
import { Words } from '../components/Words'

interface KeyboardProps {
  time: number
}

export default function Keyboard({ time }: KeyboardProps) {
  const [phrase, setPhrase] = useState<string[]>([])
  const [isKeyboardAllowed, setIsKeyboardAllowed] = useState(false)

  function addWord(word: string) {
    if (!isKeyboardAllowed) {
      return
    }
    setPhrase((state) => [...state, word])
  }

  function deleteLastWord() {
    if (phrase.length === 0) {
      return
    }
    if (!isKeyboardAllowed) {
      return
    }

    const newPhrase = [...phrase]
    newPhrase.pop()

    setPhrase(newPhrase)
  }

  function startOrStop() {
    setIsKeyboardAllowed(!isKeyboardAllowed)
  }

  return (
    <main>
      <div className="text-7xl max-lg:text-4xl transition-all">
        <Input
          phrase={phrase}
          isKeyboardAllowed={isKeyboardAllowed}
          startOrStop={startOrStop}
          time={time}
        />
        <Words onAddWord={addWord} time={time} />
        <Letters
          onAddWord={addWord}
          onDeleteLastWord={deleteLastWord}
          time={time}
        />
      </div>
      <strong className="fixed bottom-0 right-8">ALPHA {version}</strong>
    </main>
  )
}
