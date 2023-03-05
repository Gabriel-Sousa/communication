import { Link } from 'react-router-dom'

import { useTime } from '../../hooks/useTime'

export default function Home() {
  const { time, changeTime } = useTime()

  return (
    <div className="slideContainer text-5xl max-lg:text-4xl h-screen flex flex-col items-center justify-center gap-16 p-16 max-w-5xl mx-auto">
      <span> Escolha o tempo para confirmação das letras </span>
      <input
        type="range"
        min="0.5"
        max="5"
        step={0.5}
        value={time / 1000}
        className="slider"
        id="myRange"
        onChange={(e) => changeTime(Number(e.target.value) * 1000)}
      />
      <span>{time / 1000} segundos</span>

      <Link
        className="border border-green-500 rounded-full px-8 py-4 bg-green-400 hover:brightness-[0.8]"
        to={'/choice'}
      >
        Começar ?
      </Link>
    </div>
  )
}
