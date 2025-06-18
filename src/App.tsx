import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { router } from './routes';

function App() {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
