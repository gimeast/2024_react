import {useState} from 'react'

const Say = () => {
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState(0)
    const [color, setColor] = useState('')

    const enter = () => setMessage('안녕하세요 스타벅스입니다.')
    const exit = () => setMessage('감사합니다 안녕히가세요.')

    const colorChange = (color) => {
        setColor(color)
    }

    const arrObj = [
        { id: 1, value: true },
        { id: 2, value: true },
        { id: 3, value: false },
    ]

    const copy1 = arrObj.filter(obj => obj.id !== 2)
    console.log('copy1', copy1)

    const copy2 = arrObj.map(obj => obj.id === 3 ? { ...obj, value: true } : { ...obj, value: false })
    console.log('copy2', copy2)

    console.log('origin', arrObj)

    return (
        <div>
            <button onClick={() => colorChange('red')}>red</button>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
            <button onClick={() => {
                setNumber(number + 1)
                setNumber((prevState) => prevState + 1)
                setNumber((prevState) => prevState + 1)
            }}>숫자 증가
            </button>
            <h3 style={{ color: color }}>{message}</h3>
            <h3 style={{ color: color }}>{number}</h3>
        </div>
    )
}

export default Say