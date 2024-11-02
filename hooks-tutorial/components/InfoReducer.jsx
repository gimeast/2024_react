import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const InfoReducer = () => {
    const [state, dispatch] = useReducer(reducer, {name: '', nickName: ''})
    const {name, nickName} = state

    const onChange = (e) => {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                이름: <input type="text" name="name" onChange={onChange} value={name}/>
                닉네임: <input type="text" name="nickName" onChange={onChange} value={nickName}/>
            </div>
            <div>
                <div>
                    <b>{name}{nickName && `(${nickName})`}</b>님 안녕하세요
                </div>
            </div>
        </div>
    );
};

export default InfoReducer;