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
        this.state.like++
        console.log('inside listener', this.state)
        //calling render :Dont do this 
        // this.render()
    }
    render() {
        console.log('inside render', this.state)
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