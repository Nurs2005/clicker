import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import { BsLink45Deg } from 'react-icons/bs';
import Button from './components/Button/Button';

function App() {
  const [link, setLink] = useState('')
  const [isShow, setShow] = useState(false)

  const addClipboard = (text)=>{
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="App">
      <p className='p1'>Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.</p>
      <main>
        <Form setLink={setLink} setShow={setShow} />
        <div className='copy' id={`${isShow && 'show'}`}>
          <p className='p' onClick={()=>{addClipboard(`${link}`)}}><BsLink45Deg />{link}</p>
          <Button value={'Копировать ctrl+c'} func={()=>{addClipboard(`${link}`)}} />
        </div>
      </main>
    </div>
  );
}

export default App;
