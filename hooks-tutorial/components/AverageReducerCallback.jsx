import React, {useCallback, useMemo, useReducer, useState} from 'react';

function getAverage(numbers) {
    console.log('평균값 계산 중...')
    if (numbers.length === 0) return 0

    const sum = numbers.reduce((a, b) => a + b)

    return sum / numbers.length
}

function reducer(state, action) {
    switch (action.type) {
        case 'INSERT':
            return {
                ...state,
                list: state.list.concat(parseInt(state.number)),
                number: ''
            }
        case 'SET_NUMBER':
            return {
                ...state,
                [action.target.name]: action.target.value
            }
        default: return state
    }
}

const AverageReducerCallback = () => {
    const [state, dispatch] = useReducer(reducer, {list: [], number: ''})
    const {list, number} = state

    const onChange = useCallback((e) => {
        dispatch({type: 'SET_NUMBER', target: e.target})
    }, [])

    const onInsert = useCallback(() => {
        dispatch({type: 'INSERT'})
    }, [number, list]) //number 또는 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => {
        return getAverage(list)
    }, [list]);

    return (
        <div>
            <input type="text" name='number' value={number} onChange={onChange}
                   onKeyUp={event => event.key === 'Enter' && onInsert()}/>
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

export default AverageReducerCallback;