import { Button } from '../components/Button'

interface LettersProps {
  onAddWord: (word: string) => void
  onDeleteLastWord: () => void
}

export function Letters({ onAddWord, onDeleteLastWord }: LettersProps) {
  const letters = [
    { text: 'a' },
    { text: 'b' },
    { text: 'c' },
    { text: 'd' },
    { text: 'e' },
    { text: 'f' },
    { text: 'space', variant: 'action' },
    { text: 'g' },
    { text: 'h' },
    { text: 'i' },
    { text: 'j' },
    { text: 'k' },
    { text: 'l' },
    { text: 'delete', variant: 'action' },
    { text: 'm' },
    { text: 'n' },
    { text: 'o' },
    { text: 'p' },
    { text: 'qu' },
    { text: 'r' },
    { text: 's' },
    { text: 't' },
    { text: 'u' },
    { text: 'v' },
    { text: 'w' },
    { text: 'x' },
    { text: 'y' },
    { text: 'z' },
  ]

  return (
    <div className="grid grid-cols-7 ">
      {letters.map((letter) => (
        <Button
          key={letter.text}
          text={letter.text}
          variant={`${letter.variant === 'action' ? 'action' : 'secondary'}`}
          onAddWord={onAddWord}
          onDeleteLastWord={onDeleteLastWord}
        />
      ))}
    </div>
  )
}
