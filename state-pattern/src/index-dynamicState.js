import { produce } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom/client';


//Container Component
class Review extends React.Component {
    //state declaration
    state = {
        like: 10
    }
    onLike = () => {
        this.setState(previousState => {
            return produce(previousState, (draft) => {
                draft.like += 1
            })
        })
    }
    render() {
        console.log('current state', this.state)
        return <div>
            {/* State as prop and listener as prop */}
            {/* <ReviewDisplay like={this.state.like} onLike={this.onLike} /> */}
            <ReviewDisplay  {...this.state} onLike={this.onLike} />

        </div>
    }
}


const ReviewDisplay = props => {
    return <>
        <h1>Review Component</h1>
        <h5>Like {props.like}</h5>
        <button onClick={props.onLike}>😁</button>
    </>
}


const App = () => {
    return <>
        <Review></Review>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);