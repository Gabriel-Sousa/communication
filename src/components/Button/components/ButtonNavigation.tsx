// import { useState } from 'react'
import { MdKeyboardAlt, MdTimer } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

interface ButtonActionProps {
  text: string
  time: number
  href: string
  whichIcon?: 'clock' | 'keyboard'
  title?: string
}

export function ButtonNavigation({
  href,
  whichIcon,
  title,
}: ButtonActionProps) {
  // const [delayHandler, setDelayHandler] = useState(null || Number)
  // const [isAnimationOn, setIsAnimationOn] = useState(false)

  const navigate = useNavigate()

  function handleNavigate(href: string) {
    navigate(href)
  }

  // function handleMouseEnter() {
  //   setIsAnimationOn(true)

  //   setDelayHandler(
  //     setTimeout(() => {
  //       setIsAnimationOn(false)
  //       navigate('/')
  //     }, time),
  //   )
  // }

  // function handleMouseLeave() {
  //   setIsAnimationOn(false)

  //   clearTimeout(delayHandler)
  // }

  // let timeComputed = '_25'

  // if (time === 500) {
  //   timeComputed = '_05'
  // } else if (time === 1000) {
  //   timeComputed = '_10'
  // } else if (time === 1500) {
  //   timeComputed = '_15'
  // } else if (time === 2000) {
  //   timeComputed = '_20'
  // } else if (time === 2500) {
  //   timeComputed = '_25'
  // } else if (time === 3000) {
  //   timeComputed = '_30'
  // } else if (time === 3500) {
  //   timeComputed = '_35'
  // } else if (time === 4000) {
  //   timeComputed = '_40'
  // } else if (time === 4500) {
  //   timeComputed = '_45'
  // } else if (time === 5000) {
  //   timeComputed = '_50'
  // } else {
  //   timeComputed = '_25'
  // }
  return (
    <button
      onClick={() => handleNavigate(href)}
      className={'p-4 bg-green-500 rounded-full hover:brightness-75 '}
      title={title}
    >
      {whichIcon === 'clock' ? (
        <MdTimer size={36} />
      ) : whichIcon === 'keyboard' ? (
        <MdKeyboardAlt size={36} />
      ) : (
        <div></div>
      )}
    </button>
  )

  // return (
  //   <button
  //     type="button"
  //     className="font-bold capitalize p-8 max-lg:p-4 flex justify-center"
  //     onMouseEnter={handleMouseEnter}
  //     onMouseLeave={handleMouseLeave}
  //   >
  //     <div className="max-h-[72px] max-lg:h-[36px]">
  //       <div
  //         className={`progress
  //         ${timeComputed}
  //         ${isAnimationOn ? 'block' : 'hidden'}
  //           max-lg:h-[36px]
  //         `}
  //       />
  //       <p
  //         className={`relative
  //           ${isAnimationOn && 'bottom-[72px] max-lg:bottom-[36px]'}`}
  //       >
  //         {text}
  //       </p>
  //     </div>
  //   </button>
  // )
}
