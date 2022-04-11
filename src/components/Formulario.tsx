import { useState } from 'react'
import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import Botao from './Botao'

interface FormularioProps {
  cliente: Cliente
  id: any
  cancelado?:()=> void
}

export default function Formulario(props: FormularioProps) {
  
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (<Entrada texto="Código" valor={id} somenteLeitura={false} className={'mb-5'} />) : false}
      <Entrada texto="Nome" valor={nome} somenteLeitura={false} valorMudou={setNome} className={'mb-5'}/>
      <Entrada texto="Idade" tipo="number" valor={idade} somenteLeitura={false} valorMudou={setIdade} className={''}/>

      <div className='flex justify-end mt-7'>
        <Botao className='bg-gradient-to-r from-blue-400 to-blue-700 mr-2'>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>

        <Botao onClick={props.cancelado} className='bg-gradient-to-r from-red-400 to-red-700' >
          Cancelar
        </Botao>
      </div>
    </div> 

  )
}