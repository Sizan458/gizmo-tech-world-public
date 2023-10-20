import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Error from "../ErrorPage/Error";
import Home from "../HomePage/Home/Home";
import AddProducts from "../AddProductPage/AddProduct/AddProducts";
import Register from "../Register/Register";
import Login from "../LoginPage/Login";
import Cart from "../Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            loader:()=>fetch('http://localhost:5000/brands')
            
          },
          {
            path:"/AddProduct",
            element:<PrivateRoute>
              <AddProducts></AddProducts>
            </PrivateRoute>
          },
          {
            path:"/register",
            element:<Register></Register>
          },
          {
            path:"/login",
            element:<Login></Login>
            
          },
          {
            path:"/cart",
            element:<PrivateRoute>
              <Cart></Cart>
            </PrivateRoute>
          },
          
        ]
    }
]);

export default Router;