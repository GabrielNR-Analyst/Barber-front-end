//imports
//imports
import type { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

//types
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
};

//app
export function Button({ 
  children,
  loading,
  ...rest
}: ButtonProps){
  return(
    <Container type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  )
}