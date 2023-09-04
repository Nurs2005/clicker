import './Input.css';

export default function Input({ inputValue, setInputValue, setColor }) {
    const onChange = (e) => {
        const value = e.currentTarget.value
        if(value.length > 0){
            setColor(true)
        }else{
            setColor(false)
        }
        setInputValue(value)
    }
    return (
        <input className="inputs" placeholder='Введите ссылку' value={inputValue} onChange={onChange}></input>
    )
}