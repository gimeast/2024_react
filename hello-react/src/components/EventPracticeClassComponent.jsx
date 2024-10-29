import React, { Component } from 'react'

class EventPracticeClassComponent extends Component {
    // constructor(props) {
    //     super(props)
    //     this.handleChange = this.handleChange.bind(this)
    // }

    state = {
        username: '',
        message: '',
    }

    // handleChange(e) {
    //     this.setState({ message: e.target.value })
    // }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = (e) => {
        alert(this.state.username + '-' + this.state.message)
        this.setState({ username: '', message: '' })
    }

    handlelKeyUp = (e) => {
        if (e.key === 'Enter') this.handleClick()
    }

    render() {
        return (
            <div>
                <p>클래스컴포넌트</p>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <input type="text"
                       name="message"
                       onChange={this.handleChange}
                       value={this.state.message}
                       onKeyUp={this.handlelKeyUp}
                />
                <button onClick={this.handleClick}>확인
                </button>
            </div>
        )
    }

}

export default EventPracticeClassComponent