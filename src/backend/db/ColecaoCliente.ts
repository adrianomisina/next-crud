import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
  async salvar(cliente: Cliente): Promise<Cliente> {
    return null
  }

}