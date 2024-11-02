import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {value: state.value + 1}
        case "DECREMENT":
            return {value: state.value - 1}
        case "RESET":
            return init({value: 0})
        default :
            return state
    }
}

function init(initialState) {
    return initialState;
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {value: 0}, init) //3번째인자는 생략가능


    return (
        <div>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
            <p>현재 카운터 값: <b>{state.value}</b></p>
        </div>
    );
};

export default Counter;