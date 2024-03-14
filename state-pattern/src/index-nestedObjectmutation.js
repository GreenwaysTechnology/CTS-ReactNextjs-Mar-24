import React from 'react';
import ReactDOM from 'react-dom/client';

class HouseRating extends React.Component {

    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }

    onIncreasePointByTwo = () => {
        this.setState((prevState) => {
            return {
                ...prevState, //level -0 copy
                house: {
                    ...prevState.house, // level-1 copy
                    points: prevState.house.points + 2
                }
            }
        })
    }

    render() {
        return <div>
            <h1>House Rating Component</h1>
            <h1>House Name {this.state.house.name}</h1>
            <h5>Points : {this.state.house.points}</h5>
            <button onClick={this.onIncreasePointByTwo}>😁</button>


        </div>
    }
}


const App = () => {
    return <>
        <HouseRating />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);