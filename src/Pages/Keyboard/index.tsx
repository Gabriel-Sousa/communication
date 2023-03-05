import { useEffect } from 'react'

import { ButtonNavigation } from '../../components/Button/ButtonNavigation'
import { Input } from '../../components/Input'
import { Letters } from '../../components/Letters'
import { Words } from '../../components/Words'
import { useKeyboard } from '../../hooks/useKeyboard'
import { useTime } from '../../hooks/useTime'

export default function Keyboard() {
  const { time } = useTime()
  const { resetInput } = useKeyboard()

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (stream) {
      // console.log('Permissão para o áudio concedida.')
    })
    .catch(function () {
      // console.log('Erro ao solicitar permissão para o áudio: ' + err)
    })

  if ('speechSynthesis' in window) {
    // console.log('Web Speech API é compatível com este navegador')
  } else {
    alert('Web Speech API não é compatível com este navegador')
  }

  useEffect(() => {
    resetInput()
  }, [])

  return (
    <main>
      <div className="text-7xl max-lg:text-4xl transition-all">
        <Input />
        <Words />
        <Letters />
      </div>

      <div className="flex justify-start items-center max-sm:flex-col max-sm:items-start ml-12 max-sm:ml-4 max-md:ml-8 p-4 my-4 gap-4">
        <div className="flex items-center gap-2">
          <ButtonNavigation
            text={'Voltar para escolher o tempo'}
            href={'/'}
            whichIcon={'clock'}
            title={'Altera tempo de confirmação'}
          />
          <span className="text-2xl max-lg:text-xl max-md:text-lg">
            Tempo de confirmação é <strong>{time / 1000}s</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ButtonNavigation
            text={'Trocar de teclado'}
            href={'/choice'}
            whichIcon={'keyboard'}
            title={'Trocar de teclado'}
          />
          <span className="text-2xl max-lg:text-xl max-md:text-lg">
            Trocar de teclado
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="text-2xl max-lg:text-xl max-md:text-lg bg-green-500 rounded-lg hover:brightness-75 px-4 py-2"
            onClick={resetInput}
          >
            Resetar
          </button>
        </div>
      </div>
    </main>
  )
}
