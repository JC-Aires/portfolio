import styled from 'styled-components'

import { Props } from '.' //não precisa o caminho todo pq o arquivo chama index

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
