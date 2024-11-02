import React, {useMemo, useState} from 'react';

function getAverage(numbers) {
    console.log('평균값 계산 중...')
    if(numbers.length === 0) return 0

    const sum = numbers.reduce((a, b) => a + b)

    return sum / numbers.length
}

const Average = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    const onChange = (e) => {
        setNumber(e.target.value)
    }

    const onInsert = () => {
        setList(list.concat(parseInt(number)))
        setNumber('')
    }

    const avg = useMemo(() => {
        return getAverage(list)
    }, [list]);

    return (
        <div>
            <input type="text" value={number} onChange={onChange} onKeyUp={event => event.key === 'Enter' && onInsert()}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <div>
                <b>평균:</b> {avg}
            </div>
        </div>
    );
};

export default Average;