import { ReactNode } from 'react';
import * as C from './styles';

type Props = {
  children?: ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <C.Container>
      {children}
    </C.Container>
  )
}