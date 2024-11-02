import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('마운트될 때만 실행')
    }, []);

    useEffect(() => {
        console.log('렌더링 완료')
        console.log({name, nickName})
    });

    useEffect(() => {
        console.log('effect', nickName)

        return () => {
            console.log('cleanup', nickName)
        }
    }, [nickName]);

    return (
        <div>
            <div>
                이름: <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                닉네임: <input type="text" onChange={(e) => setNickName(e.target.value)} value={nickName}/>
            </div>
            <div>
                <div>
                    <b>{name}{nickName && `(${nickName})`}</b>님 안녕하세요
                </div>
            </div>
        </div>
    );
};

export default Info;