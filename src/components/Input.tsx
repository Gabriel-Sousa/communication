interface InputProps {
  phrase: string[]
}

export function Input({ phrase }: InputProps) {
  return (
    <div className="font-medium p-4 max-lg:p-2">
      <input
        type="text"
        className="text-gray-400 w-full"
        readOnly
        value={phrase.toString().replaceAll(',', '')}
      />
    </div>
  )
}
