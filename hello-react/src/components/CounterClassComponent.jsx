import React, { Component } from 'react'

class CounterClassComponent extends Component {

    state = {
        number: 0,
        fixedNumber: 0,
    }

    render() {
        const { number, fixedNumber } = this.state
        const { cdata } = this.props


        return (
            <div>
                <p>number:{number} / fixedNumber:{fixedNumber} / cdata:{cdata}</p>
                <button onClick={() => {
                    this.setState({ number: number + 1 }, () => console.log('1', this.state))
                    this.setState({ number: number + 1 }, () => console.log('2'))
                    this.setState({ number: number + 1 }, () => console.log('3'))
                    this.setState((prevState) => {
                        return { number: prevState.number + 1 }
                    }, () => console.log('4'))
                    this.setState((prevState, props) => {
                        return { number: prevState.number + 1 }
                    }, () => console.log('5'))
                }}>
                    숫자 증가
                </button>
            </div>
        )
    }
}

export default CounterClassComponent