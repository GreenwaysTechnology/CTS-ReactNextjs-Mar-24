import { produce } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom/client';


class Counter extends React.Component {
    state = {
        value: 0
    }
    constructor() {
        super()
        console.log('constrcutor is called')
    }
    //render
    render() {
        console.log('render is called')
        return <>
            <h1>Counter {this.state.value} </h1>
            <button onClick={() => {
                this.setState(previousState => produce(previousState, (draft) => {
                    draft.value += 1
                }))
            }}>+</button>
        </>
    }
    componentDidMount() {
        console.log('ComponentDidMount')
    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate')
    }
}



const App = () => {
    return <>
        <Counter></Counter>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);