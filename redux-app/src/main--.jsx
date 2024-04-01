import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'


const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

//declare intial State:
const initialState = {
    posts: [],
    status: "idle",
    error: ""
}
//fetch data
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data
})

//create slice 
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        //normal reducers
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = "loading"
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded"
            // state.posts = state.posts.concat(action.payload)
            state.posts.push(action.payload)
            console.log(state.posts)
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        })
    }
})

const postReducer = postsSlice.reducer

const store = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

///////////////////////////////////////////////////////
const Post = () => {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => {
        //console.log(state.posts.posts)
        return state.posts
    })

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

       if (loading === 'loading') return <p>Loading...</p>
    return (
        <div>
            <h2>Blog Posts</h2>
            {entities.posts.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}



const App = () => <div>
    <Post />
</div>

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

)
