import { Component } from 'react'
import PropTypes from 'prop-types'

class MyClassComponent extends Component {
    render() {
        const {name, children} = this.props

        return <div>{name} 클래스 컴포넌트 {children}</div>
    }
}

MyClassComponent.defaultProps = {
    name: '기본 props',
}

MyClassComponent.propTypes = {
    name: PropTypes.string,
}

export default MyClassComponent
