import React from 'react';
import useInputs from "../hooks/useInputs.js";

const InfoCustomReducer = () => {
    const [state, onChange] = useInputs({name: '', nickName: ''})
    const {name, nickName} = state

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

export default InfoCustomReducer;