import React from 'react';
import ReactDOM from 'react-dom/client';


class Review extends React.Component {

    //state declaration
    state = {
        //application data/ui data
        like: 10
    }
    //listener: arrow function
    onLike = () => {
        //react offers the pure function through which only we have to update u
        // this.setState(function (previousState) {
        //     // return {
        //     //     like: previousState.like + 1
        //     // }
        //     // return Object.assign({}, previousState, { like: previousState.like + 1 })
        //     return { ...previousState, like: previousState.like + 1 }
        // })
        // this.setState(previousState => ({ ...previousState, like: previousState.like + 1 }))

        this.setState(function (previousState) {
            console.log('Previous State ',previousState)
            return { ...previousState, like: previousState.like + 1 }
        })
    }
    render() {
        console.log('current state', this.state)
        return <div>
            <h1>Review Component</h1>
            <h5>Like {this.state.like}</h5>
            <button onClick={this.onLike}>😁</button>
        </div>
    }
}


const App = () => {
    return <>
        <Review></Review>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);