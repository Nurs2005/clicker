import { useState } from 'react'
import Button from './Button/Button';
import Input from './Input/Input';

export default function Form({ setLink, setShow }) {
    const [inputValue, setInputValue] = useState('')
    const [isEmpty, setColor] = useState(false)

    const fetchShortUrl = (url) => {
        
        fetch(`https://clck.ru/--?url=${url}`)
        .then(res=> res.text())
        .then((res)=>{
            setLink(res)
            setShow(true)
            console.log(res);
        } )
    }

    const changeLink = () => {
        fetchShortUrl(inputValue)
    }

    return (
        <div className='string'>
            <Input setColor={setColor} inputValue={inputValue} setInputValue={setInputValue} />
            <Button state={isEmpty} value={'Сократить'} func={changeLink} />
        </div>
    )
}