import { Link } from 'react-router-dom'

export default function Choice() {
  return (
    <div className="slideContainer  max-lg:text-4xl h-screen flex flex-col items-center justify-center gap-16 p-16 max-w-5xl mx-auto">
      <span className="text-5xl"> Qual teclado?</span>
      <div className="flex max-md:flex-col max-md:w-80 justify-center items-center gap-5 text-center">
        <Link
          className="border border-green-500  max-md:w-full max-md:block rounded-full px-8 py-4 bg-green-400 hover:brightness-[0.8] text-3xl"
          to={'/phrases'}
        >
          Teclado de frases
        </Link>
        <Link
          className="border border-green-500  max-md:w-full  max-md:block rounded-full px-8 py-4 bg-green-400 hover:brightness-[0.8] text-3xl"
          to={'/keyboard'}
        >
          Teclado padrão
        </Link>
      </div>
    </div>
  )
  // return (
  //   <div className="text-7xl max-lg:text-4xl h-screen flex items-center justify-center ">
  //     <Link
  //       className="border border-green-500 rounded-full px-8 py-4 bg-green-400 hover:brightness-[0.8]"
  //       to={'/keyboard'}
  //     >
  //       Go to Keyboard
  //     </Link>
  //   </div>
  // )
}
