//imports
// import { useCallback, useRef } from 'react';
// import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

// import api from '../../services/api';

// import { FormHandles } from '@unform/core';
// import { Form } from '@unform/web';
// import * as Yup from 'yup';

// import getValidationErros from '../../utils/getValidationErrors';
// import { useToast } from '../../hooks/toast';

import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { 
  AnimationContainer, 
  Background, 
  Container, 
  Content 
} from './styles';

//Interface
// interface signUpFormData {
//   name: string;
//   email: string;
//   password: string;
// }

//app
export function SignUp() {
  
  //refs
  // const formRef = useRef<FormHandles>(null);
  // console.log(formRef)

  //hook
  // const { addToast } = useToast()

  // const history = useHistory();



  //callbacks
  // const handleSubmit = useCallback(async(data: signUpFormData) => {
    // try {
      // formRef.current?.setErrors({})

  //     const schema = Yup.object().shape({
  //       name: Yup.string()
  //         .required('Nome obrigatório'),
  //       email: Yup.string()
  //         .required('E-mail obrigatório')
  //         .email('Digite um e-mail válido'),
  //       password: Yup.string()
  //         .min(6, 'No mínimo 6 dígitos')
  //     })

  //     await schema.validate(data, {
  //       abortEarly: false
  //     })

  //     await api.post('/users', data)

  //     history.push('/');

  //     addToast({
  //       type: 'success',
  //       title: 'Cadastro realizado!',
  //       description: 'Você já pode fazer seu logon no Gobarber'
  //     })

    // } catch (err) {
  //     console.log(err)
  //     if (err instanceof Yup.ValidationError) {
  //       const errors = getValidationErros(err);
      
  //       formRef.current?.setErrors(errors);
      
  //       return
  //     }

  //     //disparar toast
  //     addToast({
  //       type: 'error',
  //       title: 'Erro na cadastro',
  //       description: 'Ocorreu um erro ao fazer cadastro, tente novamente'
  //     });
    // }
  // }, [/*addToast, history*/]);

  //app
  
  return (
    <Container>
      <Background />
  
      <Content>
       <AnimationContainer>
        <img src={logoImg} alt="GoBarber" />
   
        {/* <Form ref={formRef} onSubmit={handleSubmit}> */}
        <form>
          <h1>Faça Seu Cadastro</h1>
  
          <Input name="name" /*icon={FiUser}*/ placeholder="Nome" />
          <Input name="email" /*icon={FiMail}*/ placeholder="Email" />
  
          <Input 
            name="password" 
            // icon={FiLock} 
            type="password" 
            placeholder="Senha" 
          />
  
          <Button type="submit">Cadastrar</Button>
  
        {/* </Form> */}
        </form>

        <Link to="/">
          <FiArrowLeft />
            Voltar ao Login
        </Link>
  
       </AnimationContainer>
      </Content>

    </Container>
  )
} 