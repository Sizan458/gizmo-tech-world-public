import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Error from "../ErrorPage/Error";
import Home from "../HomePage/Home/Home";
import AddProducts from "../AddProductPage/AddProduct/AddProducts";

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
            element:<Home></Home>,
            loader:()=>fetch('https://gizmo-tech-world-server-h2bsbf08q-mdsizan-mahmuds-projects.vercel.app/brands')
          },
          {
            path:"/AddProduct",
            element:<AddProducts></AddProducts>
          }
        ]
    }
]);

export default Router;