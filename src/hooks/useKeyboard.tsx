import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface KeyboardContextData {
  phrase: string[]
  isKeyboardAllowed: boolean
  startOrStop: () => void
  addWord: (word: string) => void
  deleteLastWord: () => void
  resetInput: () => void
}

interface KeyboardProviderProp {
  children: ReactNode
}
export const KeyboardContext = createContext({} as KeyboardContextData)

export function KeyboardProvider({ children }: KeyboardProviderProp) {
  const [phrase, setPhrase] = useState<string[]>([])
  const [isKeyboardAllowed, setIsKeyboardAllowed] = useState(false)

  useEffect(() => {
    if (!isKeyboardAllowed && phrase.length > 0) {
      const stringWords = phrase.join('')
      const arrayWords = stringWords.split(' ')
      const stringMsg = arrayWords.join(' ')

      const speech = new SpeechSynthesisUtterance(stringMsg)
      const voices = speechSynthesis.getVoices()
      speech.voice = voices[1]
      speech.volume = 2
      speech.rate = 0.7
      speech.pitch = 1

      window.speechSynthesis.speak(speech)
    }
  }, [phrase, isKeyboardAllowed])

  useEffect(() => {
    if (phrase.length === 0) {
      return
    }

    const speech = new SpeechSynthesisUtterance()
    speechSynthesis.onvoiceschanged = () => {
      //   const word = phrase[phrase.length - 1]
      const voices = speechSynthesis.getVoices()
      speech.voice = voices[1]
      //   speech.text = word
      //   speech.volume = 2
      //   speech.rate = 1
      //   speech.pitch = 1
      //   window.speechSynthesis.speak(speech)
    }

    const word = phrase[phrase.length - 1]
    const voices = speechSynthesis.getVoices()
    speech.voice = voices[1]
    speech.text = word
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

  function resetInput() {
    setPhrase([])
  }

  return (
    <KeyboardContext.Provider
      value={{
        phrase,
        isKeyboardAllowed,
        startOrStop,
        addWord,
        deleteLastWord,
        resetInput,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  )
}

export function useKeyboard(): KeyboardContextData {
  const context = useContext(KeyboardContext)

  return context
}
