import React from 'react';
import ReactDOM from 'react-dom/client';

class Review extends React.Component {

    state = {
        like: 10,
        dislike: 10
    }
    onLike = () => {
        this.setState(function (previousState) {
            console.log('Previous State ', previousState)
            return { ...previousState, like: previousState.like + 1 }
        })
    }
    render() {
        console.log('current state', this.state)
        return <div>
            <h1>Review Component</h1>
            <h5>Like {this.state.like} Dislike {this.state.dislike}</h5>
            <button onClick={this.onLike}>😁</button>
            {/* Inline listener */}
            <button onClick={() => {
                this.setState(function (previousState) {
                    console.log('Previous State ', previousState)
                    return { ...previousState, dislike: previousState.dislike + 1 }
                })
            }}>😫</button>

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