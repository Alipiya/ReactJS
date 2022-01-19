import './App.css';
import { Logotip } from './components/logo';
import { Message } from './components/message';


export default function App() {
  return (<div className='App'>
    <Logotip
      messageProps={'МЕССЕНДЖЕР'}>
    </Logotip>
    <Message></Message>
  </div>
  )
};
