import './Button.css'

export default function TaskButton({ value, func, state }) {

    return (
        <button className="button" id={`${state && 'yellow'}`} onClick={func}>{value}</button>
    )
}