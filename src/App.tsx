import { useState } from 'react'

import { Input } from './components/Input'
import { Letters } from './components/Letters'
import { Words } from './components/Words'

export default function App() {
  const [phrase, setPhrase] = useState<string[]>([])

  function addWord(word: string) {
    setPhrase((state) => [...state, word])
  }

  function deleteLastWord() {
    if (phrase.length === 0) {
      return
    }
    const newPhrase = [...phrase]
    newPhrase.pop()

    setPhrase(newPhrase)
  }

  return (
    <main>
      <div className="text-7xl max-lg:text-4xl">
        <Input phrase={phrase} />
        <Words onAddWord={addWord} />
        <Letters onAddWord={addWord} onDeleteLastWord={deleteLastWord} />
      </div>
      <strong className="fixed bottom-0 right-8">ALPHA 1.0.0</strong>
    </main>
  )
}
