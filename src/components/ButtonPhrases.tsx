import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ButtonSecondary } from './Button/ButtonSecondary'

type Phrase = {
  text: string
}[][]

interface ButtonPhrasesProps {
  phrases: Phrase
}

export function ButtonPhrases({ phrases }: ButtonPhrasesProps) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="grid h-[448px]">
      {phrases.map((_, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-[repeat(3,_minmax(440px,_1fr))] max-2xl:grid-cols-[repeat(3,_minmax(350px,_1fr))] max-lg:grid-cols-2 max-md:grid-cols-1">
              {phrases[i].map((phrase) => {
                return (
                  <ButtonSecondary
                    key={phrase.text}
                    text={phrase.text}
                    variantPhrase
                  />
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>

    //     <div className="grid grid-cols-[repeat(3,_minmax(440px,_1fr))] max-2xl:grid-cols-[repeat(3,_minmax(350px,_1fr))] max-lg:grid-cols-2 max-md:grid-cols-1">
    //   {phrases[page - 1].map((phrase) => {
    //     return (
    //       <ButtonSecondary key={phrase.text} text={phrase.text} variantPhrase />
    //     )
    //   })}
    // </div>
  )
}
