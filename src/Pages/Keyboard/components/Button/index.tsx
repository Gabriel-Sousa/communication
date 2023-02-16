import { ButtonAction } from './components/ButtonAction'
import { ButtonPrimary } from './components/ButtonPrimary'
import { ButtonSecondary } from './components/ButtonSecondary'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'action'
  text: string
  time: number
  isKeyboardAllowed: boolean
  onAddWord: (word: string) => void
  onDeleteLastWord?: () => void
}

export function Button({
  variant,
  text,
  onAddWord,
  onDeleteLastWord,
  time,
  isKeyboardAllowed,
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <ButtonPrimary
        text={text}
        onAddWord={onAddWord}
        time={time}
        isKeyboardAllowed={isKeyboardAllowed}
      />
    )
  } else if (variant === 'secondary') {
    return (
      <ButtonSecondary
        text={text}
        onAddWord={onAddWord}
        time={time}
        isKeyboardAllowed={isKeyboardAllowed}
      />
    )
  } else if (variant === 'action') {
    return (
      <ButtonAction
        text={text}
        onAddWord={onAddWord}
        onDeleteLastWord={onDeleteLastWord}
        time={time}
        isKeyboardAllowed={isKeyboardAllowed}
      />
    )
  } else {
    return <div></div>
  }
}
