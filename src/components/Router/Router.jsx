import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Error from "../ErrorPage/Error";
import Home from "../HomePage/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>,
        errorElement:<Error></Error>,
        children:[
          {
            path: "/",
            element:<Home></Home>
          }
        ]
    }
]);

export default Router;