import { useState } from 'react'

import { version } from '../../package.json'
import { Input } from '../components/Input'
import { Letters } from '../components/Letters'
import { Words } from '../components/Words'
export default function Keyboard() {
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
        />
        <Words onAddWord={addWord} />
        <Letters onAddWord={addWord} onDeleteLastWord={deleteLastWord} />
      </div>
      <strong className="fixed bottom-0 right-8">ALPHA {version}</strong>
    </main>
  )
}
