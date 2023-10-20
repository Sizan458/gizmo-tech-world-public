import { Outlet, createBrowserRouter } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Error from "../ErrorPage/Error";
import Home from "../HomePage/Home/Home";
import AddProducts from "../AddProductPage/AddProduct/AddProducts";
import Register from "../Register/Register";
import Login from "../LoginPage/Login";
import Cart from "../Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import Samsung from "../BrandRoute/Samsung/Samsung";
import Xiaomi from "../BrandRoute/Xiaomi/Xiaomi";
import Oneplus from "../BrandRoute/Oneplus/Oneplus";
import Walton from "../BrandRoute/Walton/Walton";
import Google from "../BrandRoute/Google/Google";
import Realme from "../BrandRoute/Realme/Realme";

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
          {
            path:"/samsung",
            element:<Samsung></Samsung>,
            loader:()=>fetch('http://localhost:5000/samsung-products')
            
          },
          {
            path:"/xiaomi",
            element:<Xiaomi></Xiaomi>,
            loader:()=>fetch('http://localhost:5000/xiaomi-products')
          },
        {
          path:"/oneplus",
          element:<Oneplus></Oneplus>,
          loader:()=>fetch('http://localhost:5000/onePlus-products')
        },
        {
          path:"/walton",
          element:<Walton></Walton>,
          loader:()=>fetch('http://localhost:5000/walton-products')
        },
        {
          path:'/google',
          element:<Google></Google>,
          loader:()=>fetch('http://localhost:5000/google-products')
        },
        {
          path:"/realme",
          element:<Realme></Realme>,
          loader:()=>fetch('http://localhost:5000/realme-products')
        }
          
        ]
    }
]);

export default Router;