import { createBrowserRouter } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Error from "../ErrorPage/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<div>
            <Nav></Nav>
        </div>,
        errorElement:<Error></Error>
    }
]);

export default Router;