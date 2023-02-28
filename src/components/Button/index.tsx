import { ButtonAction } from './components/ButtonAction'
import { ButtonNavigation } from './components/ButtonNavigation'
import { ButtonPrimary } from './components/ButtonPrimary'
import { ButtonSecondary } from './components/ButtonSecondary'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'action' | 'navigation'
  text: string
  time: number
  isKeyboardAllowed?: boolean
  onAddWord?: (word: string) => void
  onDeleteLastWord?: () => void
  href?: string
  whichIcon?: 'clock' | 'keyboard'
  title?: string
}

export function Button({
  variant,
  text,
  onAddWord,
  onDeleteLastWord,
  time,
  isKeyboardAllowed,
  href,
  whichIcon,
  title,
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <ButtonPrimary
        text={text}
        onAddWord={onAddWord!}
        time={time}
        isKeyboardAllowed={isKeyboardAllowed!}
      />
    )
  } else if (variant === 'secondary') {
    return (
      <ButtonSecondary
        text={text}
        onAddWord={onAddWord!}
        time={time}
        isKeyboardAllowed={isKeyboardAllowed!}
      />
    )
  } else if (variant === 'action') {
    return (
      <ButtonAction
        text={text}
        onAddWord={onAddWord!}
        onDeleteLastWord={onDeleteLastWord}
        time={time}
        isKeyboardAllowed={isKeyboardAllowed!}
      />
    )
  } else if (variant === 'navigation') {
    return (
      <ButtonNavigation
        text={text}
        time={time}
        href={href!}
        whichIcon={whichIcon}
        title={title}
      />
    )
  } else {
    return <div></div>
  }
}
