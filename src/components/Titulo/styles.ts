import styled from 'styled-components'

import { Props } from '.' //não precisa o caminho todo pq o arquivo chama index

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
