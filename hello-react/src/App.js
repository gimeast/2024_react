import './styles/App.css'
import MyClassComponent from './components/MyClassComponent'
import MyComponent from './components/MyComponent'
import CounterClassComponent from './components/CounterClassComponent'
import Say from './components/Say'
import EventPractice from './components/EventPractice'
import EventPracticeClassComponent from './components/EventPracticeClassComponent'
import ValidationSampleClassComponent from './components/ValidationSample'
import ScrollBox from './components/ScrollBox'
import React, { Component } from 'react'
import IterationSample from './components/IterationSample'
import LifeCycleSample from './components/LifeCycleSample'
import ErrorBoundary from './components/ErrorBoundary'

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {
    state = {
        color: '#000000',
    }
    scrollBox = React.createRef()

    render() {

        return (
            <>
                <div className="react">
                    <div>
                        <h3>props, children, 함수형컴포넌트, 클래스형컴포넌트</h3>
                        <MyComponent name="react" favoriteNumber={1}>hello~ MyComponent</MyComponent>
                        <MyClassComponent name="react">hello~ MyClassComponent</MyClassComponent>
                    </div>
                    <hr />

                    <div>
                        <h3>클래스형컴포넌트 state 동작 이해</h3>
                        <CounterClassComponent cdata={'test'} />

                        <h3>함수형컴포넌트 state 사용법</h3>
                        <Say />
                    </div>
                    <hr />

                    <div>
                        <h3>이벤트</h3>
                        <EventPractice />
                        <EventPracticeClassComponent />
                    </div>
                    <hr />

                    <div>
                        <h3>ref</h3>
                        <ValidationSampleClassComponent />
                        <ScrollBox ref={this.scrollBox} />
                        <button onClick={() => this.scrollBox.current.scrollToBottom()}>맨밑으로</button>
                    </div>
                    <hr />

                    <div>
                        <h3>컴포넌트 반복</h3>
                        <IterationSample />
                    </div>
                    <hr />

                    <h3>컴포넌트의 라이프사이클</h3>
                    <button onClick={() => {
                        this.setState({
                            color: getRandomColor(),
                        })
                    }}>랜덤 색상
                    </button>
                    <ErrorBoundary>
                        <LifeCycleSample color={this.state.color} />
                    </ErrorBoundary>
                    <hr />
                </div>
            </>
        )
    }
}

export default App
