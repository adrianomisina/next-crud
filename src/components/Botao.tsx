interface BotaoProps {
  // btnColor?: 'green'|'blue'|'gray'
  className?: string
  children: any
}

export default function Botao(props: BotaoProps) {
  // const btnColor = props.btnColor ?? 'gray'
  return (
    <div>
      <button className={
        // `bg-gradient-to-r from-${btnColor}-400 to-${btnColor}-700
        `bg-gradient-to-r from-green-400 to-green-700
         text-white px-4 py-2 rounded-md
         ${props.className}
        `
        }>
        {props.children}
      </button>
    </div>
  )
}