import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/home'
import Contact from './components/Contact'
import Services from './components/Services'
import Todos from './components/Todos'

const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/todos/:id',
                element: <Todos />
            }
        ]
    }
]

//route Configuration
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)