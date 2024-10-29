import React, { Component } from 'react'
import '../styles/ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    }

    input = React.createRef()

    handleChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleButtonClick = (e) => {
        const validated = this.state.password === '111'

        this.setState({
            clicked: true,
            validated: validated,
        })

        this.input.current.focus()
    }

    render() {
        return (
            <div>
                <input
                    ref={this.input}
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'fail') : ''} />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample