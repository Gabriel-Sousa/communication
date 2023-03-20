import { useEffect } from 'react'

import { ButtonNavigation } from '../../components/Button/ButtonNavigation'
import { Input } from '../../components/Input'
import { Letters } from '../../components/Letters'
import { Words } from '../../components/Words'
import { useKeyboard } from '../../hooks/useKeyboard'

export default function Keyboard() {
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
            variant="time"
          />
        </div>
        <div className="flex items-center gap-2">
          <ButtonNavigation
            text={'Trocar de teclado'}
            href={'/choice'}
            whichIcon={'keyboard'}
            title={'Trocar de teclado'}
            variant="keyboard"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            className="text-4xl font-bold max-lg:text-2xl max-md:text-xl bg-green-500 hover:brightness-75 p-4 rounded-full"
            onClick={resetInput}
          >
            Resetar
          </button>
        </div>
      </div>
    </main>
  )
}
