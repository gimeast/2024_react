import React, {useCallback, useMemo, useRef, useState} from 'react';

function getAverage(numbers) {
    console.log('평균값 계산 중...')
    if(numbers.length === 0) return 0

    const sum = numbers.reduce((a, b) => a + b)

    return sum / numbers.length
}

const AverageRef = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('')
    const inputEl = useRef(null)

    const onChange = useCallback((e) => {
        setNumber(e.target.value)
    }, [])

    const onInsert = useCallback(() => {
        setList(list.concat(parseInt(number))) //number, list를 조회하기 때문에 배열안에 number,list를 넣어준다.
        setNumber('')
        inputEl.current.focus()
    }, [number, list]) //number 또는 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => {
        return getAverage(list)
    }, [list]);

    return (
        <div>
            <input type="text" ref={inputEl} value={number} onChange={onChange} onKeyUp={event => event.key === 'Enter' && onInsert()}/>
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

export default AverageRef;