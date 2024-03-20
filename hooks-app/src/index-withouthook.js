import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';


const Frame = props => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //window listner:
        window.addEventListener('resize', handleResize)
        //unMount
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    })

    return <>
        <h1>Frame</h1>
        <h1>Width: {width}</h1>
    </>
}


const Panel = props => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //window listner:
        window.addEventListener('resize', handleResize)
        //unMount
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    })

    return <>
        <h1>Panel</h1>
        <h1>Width: {width}</h1>
    </>
}


const App = () => {
    return <>
        <Panel />
        <hr></hr>
        <Frame/>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);