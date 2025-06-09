/* eslint-disable @typescript-eslint/no-empty-object-type */
//Imports
// import { useField } from '@unform/core';
import { type InputHTMLAttributes } from "react";

// import { IconBaseProps } from 'react-icons';
// import { FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';

//Interfaces
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // name: string;
  // containerStyle?: {};
  // icon?: React.ComponentType<IconBaseProps>;
}

//app
export function Input({
  // name,
  // containerStyle,
  // icon: Icon,
  ...rest
}: InputProps){

  //refs
  // const inputRef = useRef<HTMLInputElement>(null)
  
  // //Estados
  // const [isFocused, setIsFocused] = useState(false)
  // const [isField, setIsField] = useState(false)
  
  // //fields
  // const { fieldName, defaultValue, error, registerField } = useField(name);


  // //Callbacks
  // const handleInputFocus = useCallback(() => {
  //   setIsFocused(true)
  // }, [])

  // const handleInputBlur = useCallback(() => {
  //   setIsFocused(false)

  //   setIsField( !!inputRef.current?.value)
  // }, [])


  // //useEffect
  // useEffect(() => {
  //   const field = {
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //   };
  //   registerField(field);
  //   return () => {
  //     // Limpar registro
  //   };
  // }, [fieldName, registerField])

  //app
  return (
    <Container 
      // style={containerStyle} 
      // $isErroded={!!error} 
      // $isField={isField} 
      // $isFocused={isFocused}
      // data-testid="input-container"
    >
      {/* {Icon && <Icon size={20} /> } */}
      <input
        // onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
        // defaultValue={defaultValue} 
        // ref={inputRef}
        // tabIndex={0}
        {...rest}
      />
        {/* {
          error && 
            <Error title={error}>
              <FiAlertCircle color="#c53030" size={20}/>
            </Error>
        } */}
    </Container>
  )
}