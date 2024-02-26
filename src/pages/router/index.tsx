import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../home'
import FormPage from '../form'
import './index.css'
import SuccessPage from '../success'
import { useState } from 'react'
const RouterPage = () => {
    const [formData, setFormData] = useState(null)
    const router = createBrowserRouter([
        {

            path: '/',
            element: <HomePage />
        },
        {

            path: '/form',
            element: <FormPage setData={(data: any) => setFormData(data)} />
        },
        {

            path: '/success',
            element: <SuccessPage data={formData} />
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default RouterPage