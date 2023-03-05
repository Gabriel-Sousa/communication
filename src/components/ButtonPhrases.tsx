import { ButtonSecondary } from './Button/ButtonSecondary'

type Phrase = {
  text: string
}[][]

interface ButtonPhrasesProps {
  page: number
  phrases: Phrase
}

export function ButtonPhrases({ page, phrases }: ButtonPhrasesProps) {
  return (
    <div className="grid grid-cols-7 ">
      {phrases[page - 1].map((phrase) => {
        return <ButtonSecondary key={phrase.text} text={phrase.text} />
      })}
    </div>
  )
}
