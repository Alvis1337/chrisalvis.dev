import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "*",
                element: <Navigate to="/404"/>,
            },
            {
                index: true,
                element: <LandingPage/>,
            },
            {
                path: '/404',
                element: <ErrorPage/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>

)
