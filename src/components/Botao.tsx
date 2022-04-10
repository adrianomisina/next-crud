interface BotaoProps {
  btnColor?: "green"|"blue"|"gray"
  className?: string
  children: any
}

export default function Botao(props: BotaoProps) {
  const btnColor = props.btnColor ?? "gray"
  return (
    <div>
      <button className={
        `bg-gradient-to-r from-${props.btnColor}-400 to-${props.btnColor}-700
         text-white px-4 py-2 rounded-md
         ${props.className}
        `
        }>
        {props.children}
      </button>
    </div>
  )
}