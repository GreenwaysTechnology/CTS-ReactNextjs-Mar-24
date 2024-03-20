import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useWindowWidth } from './hooks/useWindowWidth';

const Frame = props => {
    const width = useWindowWidth()
    return <>
        <h1>Frame</h1>
        <h1>Width: {width}</h1>
    </>
}


const Panel = props => {
    const width = useWindowWidth()

    return <>
        <h1>Panel</h1>
        <h1>Width: {width}</h1>
    </>
}


const App = () => {
    return <>
        <Panel />
        <hr></hr>
        <Frame />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);