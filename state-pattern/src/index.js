import React from 'react';
import ReactDOM from 'react-dom/client';

class HouseRating extends React.Component {

    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }

    render() {
        return <div>
            <h1>House Rating Component</h1>
            <h1>House Name {this.state.house.name}</h1>
            <h5>Points : {this.state.house.points}</h5>
            <button>😁</button>
      

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