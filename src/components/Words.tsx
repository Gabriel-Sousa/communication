import { Button } from './Button'

interface WordsProps {
  onAddWord: (word: string) => void
}

export function Words({ onAddWord }: WordsProps) {
  const words = [{ text: 'eu ' }, { text: 'sim ' }, { text: 'não ' }]

  return (
    <div className="flex items-center justify-around border-b-2 border-t-2">
      {words.map((word) => (
        <Button
          key={word.text}
          text={word.text}
          variant="primary"
          onAddWord={onAddWord}
        />
      ))}
    </div>
  )
}
