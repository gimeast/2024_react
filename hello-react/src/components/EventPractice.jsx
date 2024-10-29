import React from 'react'

const EventPractice = () => {
    const [form, setForm] = React.useState({ username: '', message: '' })
    const { username, message } = form

    const event1 = () => alert('Hello Event!')

    const onChangeUsername = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        }

        setForm(nextForm)
    }
    const onChangeMessage = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        }

        setForm(nextForm)
    }

    const onClick = (e) => {
        alert(username + '-' + message)
        setForm({
            username: '',
            message: '',
        })
    }

    const onKeyUp = (e) => {
        if (e.key === 'Enter') onClick()
    }

    return (
        <div>
            <p>함수컴포넌트</p>
            <button onClick={event1}>Click Me</button>
            <br />

            <input type="text" name="username" onChange={onChangeUsername} value={username} />
            <input type="text" name="message" onChange={onChangeMessage} value={message} onKeyUp={onKeyUp} />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice