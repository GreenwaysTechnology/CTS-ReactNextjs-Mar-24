import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const MyInput = props => {
    const [text, setText] = useState('Subramaian')
    const [liked, setLiked] = useState(true)

    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    return <>
        <input value={text} onChange={handleChange} />
        <h1>Your Name : {text}</h1>
        <div>
            <input type="checkbox" checked={liked} onChange={(e) => {
                setLiked(e.target.checked)
            }} />
            Do you like
            <p>you {liked ? 'liked this' : ' did not like this'}</p>
        </div>
    </>
}


const App = () => {
    return <>
        <MyInput />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);