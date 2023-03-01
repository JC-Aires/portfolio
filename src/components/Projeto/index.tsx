import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
