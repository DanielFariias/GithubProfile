import { ReactNode } from 'react';
import * as C from './styles'

type Props = {
  children: ReactNode
}

export const UserContainer = ({ children }: Props) => (
  <C.Section>
    {children}
  </C.Section>
);