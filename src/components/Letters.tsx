import { ButtonAction } from './Button/ButtonAction'
import { ButtonSecondary } from './Button/ButtonSecondary'

export function Letters() {
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
      {letters.map((letter) => {
        if (letter.variant === 'action') {
          return <ButtonAction key={letter.text} text={letter.text} />
        }

        return <ButtonSecondary key={letter.text} text={letter.text} />
      })}
    </div>
  )
}
