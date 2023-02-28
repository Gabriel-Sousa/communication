import { ButtonPrimary } from './Button/ButtonPrimary'

export function Words() {
  const words = [{ text: 'eu ' }, { text: 'sim ' }, { text: 'não ' }]

  return (
    <div className="flex items-center justify-around border-b-2 border-t-2">
      {words.map((word) => (
        <ButtonPrimary key={word.text} text={word.text} />
      ))}
    </div>
  )
}
