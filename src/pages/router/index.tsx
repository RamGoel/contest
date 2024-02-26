import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../home'
import FormPage from '../form'
import './index.css'
const RouterPage = () => {
    const router = createBrowserRouter([
        {

            path: '/',
            element: <HomePage />
        },
        {

            path: '/form',
            element: <FormPage />
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default RouterPage