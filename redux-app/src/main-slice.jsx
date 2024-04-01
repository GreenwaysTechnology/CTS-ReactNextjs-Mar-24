import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

//declare intial State:
const initialState = {
    value: 10
}
//create Slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //apis
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }
})
//we have to extract reducers,actions from the slice

const counterReduer = counterSlice.reducer
const { increment, decrement, incrementByAmount } = counterSlice.actions


const store = configureStore({
    reducer: {
        counter: counterReduer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

///////////////////////////////////////////////////////
const Counter = () => {
    //hook to get redux state
    const value = useSelector(state => {
        return state.counter.value
    })

    const dispatch = useDispatch()

    const onIncrement = () => {
        //send action via dispatcher
        dispatch({
            type: increment
        })
    }

    return <>
        <h1>Counter {value}</h1>
        <button onClick={onIncrement}>+</button>
    </>
}

const App = () => <div>
    <Counter />
</div>

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

)
