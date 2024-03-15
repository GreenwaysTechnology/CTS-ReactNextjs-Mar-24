import { produce } from 'immer';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const Review = () => {
    const [like, setLike] = useState(0)

    //Life cycle methods
    useEffect(() => {
        //you can write any async code 
        setTimeout(() => {
            setLike(like + 10)
        }, 5000)
    }, [])

    return <div>
        <h1>Like {like}</h1>
        <button onClick={() => {
            setLike(like + 1)
        }}>+</button>
    </div>
}

const App = () => {
    return <>
        <Review />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);