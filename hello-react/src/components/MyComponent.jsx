import PropTypes from 'prop-types'

const MyComponent = (props) => {
    const { name, children, favoriteNumber } = props
    return <div>{favoriteNumber} {name} 함수형 컴포넌트 {children}</div>
}

// MyComponent.defaultProps = {
//     name: '기본 props',
//     favoriteNumber: 0,
// }

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent