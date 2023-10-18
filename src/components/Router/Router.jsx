import { createBrowserRouter } from "react-router-dom";
import Nav from "../Navbar/Nav";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<div>
            <Nav></Nav>
        </div>
    }
]);

export default Router;