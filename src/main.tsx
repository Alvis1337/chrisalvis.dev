import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {persistor, store} from "./store/store.ts";
import {PersistGate} from "redux-persist/integration/react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import LandingPage from "./components/LandingPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "*",
                element: <Navigate to="/404"/>,
            },
            {
                index: true,
                element: <LandingPage/>,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    </StrictMode>

)
