import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="/auth" element={<Auth/>}/>
        </>
    )
)


const AppComponent = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default AppComponent
