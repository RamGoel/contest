/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../home'
import FormPage from '../form'
import './index.css'
import SuccessPage from '../success'
import { useEffect, useState } from 'react'
import Loader from '../../components/loader'
const RouterPage = () => {
    const [isLoaderVisible, setLoaderVisible] = useState(true)
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

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoaderVisible(false)
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return (
        <div>
            {isLoaderVisible ? <Loader /> : null}
            <RouterProvider router={router} />
        </div>
    )
}

export default RouterPage