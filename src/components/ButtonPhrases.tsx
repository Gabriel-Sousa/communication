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
    <div className="grid grid-cols-[repeat(3,_minmax(440px,_1fr))] max-2xl:grid-cols-[repeat(3,_minmax(350px,_1fr))] max-lg:grid-cols-2 max-md:grid-cols-1">
      {phrases[page - 1].map((phrase) => {
        return (
          <ButtonSecondary key={phrase.text} text={phrase.text} variantPhrase />
        )
      })}
    </div>
  )
}
