import { produce } from 'immer';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Review = () => {
    const [review, setReview] = useState({ like: 0, dislike: 0 })
    const onLike = () => {
        // setReview(prevState => {
        //     //return { ...prevState, like: prevState.like + 1 }
        //     return produce(prevState, (draft) => {
        //         draft.like += 1
        //     })
        // })
        setReview(prevState => produce(prevState, (draft) => {
            draft.like += 1
        }))

    }
 
    return <div>
        <h1>Review App</h1>
        <h3>Like {review.like} DisLike {review.dislike}</h3>
        <button onClick={onLike}>Like</button>
    </div>
}

const App = () => {
    return <>
        <Review />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);