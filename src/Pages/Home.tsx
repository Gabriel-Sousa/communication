import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-7xl max-lg:text-4xl h-screen flex items-center justify-center ">
      <Link
        className="border border-green-500 rounded-full px-8 py-4 bg-green-400 hover:brightness-[0.8]"
        to={'/keyboard'}
      >
        Go to Keyboard
      </Link>
    </div>
  )
}
