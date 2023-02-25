import { useEffect, useState } from 'react'

import { version } from '../../../package.json'
import { Input } from './components/Input'
import { Letters } from './components/Letters'
import { Words } from './components/Words'

interface KeyboardProps {
  time: number
}

export default function Keyboard({ time }: KeyboardProps) {
  const [phrase, setPhrase] = useState<string[]>([])
  const [isKeyboardAllowed, setIsKeyboardAllowed] = useState(false)

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (stream) {
      // console.log('Permissão para o áudio concedida.')
    })
    .catch(function () {
      // console.log('Erro ao solicitar permissão para o áudio: ' + err)
    })

  if ('speechSynthesis' in window) {
    // console.log('Web Speech API é compatível com este navegador')
  } else {
    alert('Web Speech API não é compatível com este navegador')
  }

  useEffect(() => {
    if (!isKeyboardAllowed && phrase.length > 0) {
      const word = phrase
      console.log(word)

      const stringWords = phrase.join('')
      const arrayWords = stringWords.split(' ')
      const stringMsg = arrayWords.join('')

      const speech = new SpeechSynthesisUtterance(stringMsg)
      const voices = speechSynthesis.getVoices()
      speech.voice = voices[1]
      speech.volume = 2
      speech.rate = 1
      speech.pitch = 1

      window.speechSynthesis.speak(speech)
    }
  }, [phrase, isKeyboardAllowed])

  useEffect(() => {
    if (phrase.length === 0) {
      return
    }

    const word = phrase[phrase.length - 1]

    const speech = new SpeechSynthesisUtterance(word)
    const voices = speechSynthesis.getVoices()
    speech.text = word
    speech.voice = voices[1]
    speech.volume = 2
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
  }, [phrase])

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
        <Words
          onAddWord={addWord}
          time={time}
          isKeyboardAllowed={isKeyboardAllowed}
        />
        <Letters
          onAddWord={addWord}
          onDeleteLastWord={deleteLastWord}
          time={time}
          isKeyboardAllowed={isKeyboardAllowed}
        />
      </div>
      <strong className="fixed bottom-0 right-8">ALPHA {version}</strong>
    </main>
  )
}
