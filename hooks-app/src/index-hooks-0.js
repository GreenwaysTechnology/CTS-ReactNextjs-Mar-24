import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Review() {
    //state declaration
    const [like, setLike] = useState(0)
    //listener 
    const onLike = () => {
        //logic
        // setLike((prevState) => {
        //     return prevState + 1
        // })
        //short cut
        // setLike((prevState) => prevState + 1)
        setLike(like + 1)

    }
    return <div>
        <h1>Review App</h1>
        <h3>Like {like}</h3>
        {/* <button onClick={onLike}>Like</button> */}
        <button onClick={() => setLike(like + 1)}>Like</button>
    </div>
}

const App = () => {
    return <>
        <Review />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);