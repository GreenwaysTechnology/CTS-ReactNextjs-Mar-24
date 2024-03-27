import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//reducer
const initalState = {
    value: 10
}
const ReviewReducer = createReducer(initalState, builder => {
    builder.addCase('review/like', (state, action) => {
        //immerjs code
        state.value++
    }).addCase('review/dislike', (state, action) => {
        state.value--
    }).addDefaultCase((state, action) => { })
})

//create Store Object

const store = configureStore({
    reducer: {
        review: ReviewReducer
    }
})

///////////////////////////////////////////////////////
const Review = () => {

    //hook to get redux state
    const like = useSelector(state => {
        //appstate.reducerName
        return state.review.value
    })

    const dispatch = useDispatch()

    const onLike = () => {
        //send action via dispatcher
        dispatch({
            type: 'review/like'
        })
    }

    return <>
        <h1>Value {like}</h1>
        <button onClick={onLike}>+</button>
        <button onClick={() => {
            dispatch({ type: 'review/dislike' })
        }}>-</button>

    </>
}

const App = () => <div>
    <Review />
</div>

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

)
