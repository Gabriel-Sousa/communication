import { useEffect, useState } from 'react'

import { ButtonNavigation } from '../../components/Button/ButtonNavigation'
import { ButtonPhrases } from '../../components/ButtonPhrases'
import { Input } from '../../components/Input'
import { useKeyboard } from '../../hooks/useKeyboard'
import { useTime } from '../../hooks/useTime'

export default function Phrases() {
  const { time } = useTime()
  const { resetInput } = useKeyboard()
  const [page, setPage] = useState(1)

  const phrases = [
    [
      { text: 'Mudar posição ' },
      { text: 'Arrumar cabeça ' },
      { text: 'subir ' },
      { text: 'descer ' },
      { text: 'ir para cadeira ' },
      { text: 'ir para cama ' },
      { text: 'calor ' },
      { text: 'frio ' },
      { text: 'colocar cobertor ' },
      { text: 'tirar cobertor ' },
    ],
    [
      { text: 'quero ver Artur ' },
      { text: 'quero falar com Artur ' },
      { text: 'quero saber do Artur ' },
      { text: 'whatsApp ' },
      { text: 'app BB ' },
      { text: 'extrato cc ' },
      { text: 'extrato conta Artur ' },
      { text: 'extrato investimentos ' },
      { text: 'site de compras ' },
    ],
    [
      { text: 'quero agua ' },
      { text: 'estou com fome ' },
      { text: 'doce de leite ' },
      { text: 'pudim' },
      { text: 'sorvete ' },
      { text: 'sopa ' },
      { text: 'usar laptop ' },
      { text: 'usar celular ' },
      { text: 'usar computador ' },
      { text: 'usar tablet ' },
    ],
    [
      { text: 'dor nas costas ' },
      { text: 'dor na cabeça ' },
      { text: 'dor na GTT ' },
      { text: 'ir para o escritório ' },
      { text: 'ir para a sala ' },
      { text: 'tomar banho ' },
    ],
  ]

  useEffect(() => {
    resetInput()
  }, [])

  return (
    <main>
      <div className="text-7xl max-lg:text-4xl transition-all">
        <Input />
        <div className="border-b-2 " />
        <ButtonPhrases page={page} phrases={phrases} />
      </div>

      <div className="flex justify-around items-center max-sm:flex-col max-sm:items-start ml-12 max-sm:ml-4 max-md:ml-8 p-4 my-4 gap-4">
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
        <div className="flex items-center gap-2">
          <strong className="text-2xl max-lg:text-xl max-md:text-lg">
            Página:
          </strong>
          {phrases.map((_, i) => (
            <button
              key={i + 1}
              className="text-2xl max-lg:text-xl max-md:text-lg px-4 py-1 bg-green-500 rounded-lg hover:brightness-75 "
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
