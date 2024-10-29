import React from 'react'

const IterationSample = () => {
    const [names, setNames] = React.useState([
        {
            id: 1,
            text: '눈사람',
        },
        {
            id: 2,
            text: '얼음',
        },
        {
            id: 3,
            text: '눈',
        },
        {
            id: 4,
            text: '바람',
        },
    ])

    const [inputText, setInputText] = React.useState('')
    const [nextId, setNextId] = React.useState(5)

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const onRemove = (id) => {
        const filteredNames = names.filter((name) => name.id !== id)
        setNames(filteredNames)
    }

    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)

    return (
        <>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={() => {
                setNames([...names, { id: nextId, text: inputText }])
                // setNames(names.concat({ id: nextId, text: inputText }))
                setNextId(nextId + 1)
                setInputText('')
            }}>추가
            </button>
            <ul>
                {nameList}
            </ul>
        </>
    )
}

export default IterationSample