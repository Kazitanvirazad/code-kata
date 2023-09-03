import Home from "./components/Home";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

const Routers = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Home />} />
            </>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};


export default Routers;