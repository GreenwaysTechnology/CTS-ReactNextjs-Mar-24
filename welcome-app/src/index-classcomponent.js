import ReactDOM from 'react-dom/client';
import React from 'react';

class Heading extends React.Component {

    render() {
        return <div>
            <h1>Hello React</h1>
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading></Heading>)