import React, {useState} from 'react';
import Counter from './components/Counter.jsx';
import Info from "./components/Info.jsx";
import InfoReducer from "./components/InfoReducer.jsx";
import Average from "./components/Average.jsx";
import "./app.css"
import AverageCallback from "./components/AverageCallback.jsx";
import AverageReducerCallback from "./components/AverageReducerCallback.jsx";
import AverageRef from "./components/AverageRef.jsx";
import InfoCustomReducer from "./components/InfoCustomReducer.jsx";

const App = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <h1>useState</h1>
            <Counter/>

            <h1>useEffect</h1>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'Show'}
            </button>
            {visible && <Info/>}

            <h1>useReducer</h1>
            <InfoReducer/>

            <h1>useMemo</h1>
            {/*<Average/>*/}
            {/*<AverageCallback/>*/}
            {/*<AverageReducerCallback/>*/}
            <AverageRef/>

            <h1>custom Hooks</h1>
            <h2>reducer</h2>
            <InfoCustomReducer/>

        </div>
    );
};

export default App;