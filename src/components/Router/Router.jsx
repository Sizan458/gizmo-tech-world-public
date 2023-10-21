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
import Googles from "../MorePage/Googles/Googles";
import Waltons from "../MorePage/Waltons/Waltons";
import Xiaomis from "../MorePage/Xiaomi/Xiaomis";
import Onepluss from "../MorePage/Oneplus/Oneplus";
import Samsungs from "../MorePage/Samsungs/Samsungs";
import Realmes from "../MorePage/Realmes/Realmes";
import GoogleForm from "../Forms/GoogleForm/GoogleForm";


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
            loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/brands')
            
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
            loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/samsung-products')
            
          },
          {
            path:"/xiaomi",
            element:<Xiaomi></Xiaomi>,
            loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/xiaomi-products')
          },
        {
          path:"/oneplus",
          element:<Oneplus></Oneplus>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/onePlus-products')
        },
        {
          path:"/walton",
          element:<Walton></Walton>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/walton-products')
        },
        {
          path:'/google',
          element:<Google></Google>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/google-products')
        },
        {
          path:"/realme",
          element:<Realme></Realme>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/realme-products')
        },
        {
          path:"/google/:id",
          element:<PrivateRoute>
            <Googles></Googles>
          </PrivateRoute>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/google-products')
        },
        {
          path:"/walton/:id",
          element:<PrivateRoute>
            <Waltons></Waltons>
          </PrivateRoute>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/walton-products')
        },
        {
          path:"/xiaomi/:id",
          element:<PrivateRoute>
            <Xiaomis></Xiaomis>
          </PrivateRoute>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/xiaomi-products')
        },
        {
          path:"/oneplus/:id",
          element:<PrivateRoute>
            <Onepluss></Onepluss>
          </PrivateRoute>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/onePlus-products')
        },
        {
          path:"/samsung/:id",
          element:<PrivateRoute>
            <Samsungs></Samsungs>
          </PrivateRoute>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/samsung-products')
          
        },
        {
          path:"/realme/:id",
          element:<PrivateRoute>
            <Realmes></Realmes>
          </PrivateRoute>,
          loader:()=>fetch('https://gizmo-tech-world-server-93de56zfr-mdsizan-mahmuds-projects.vercel.app/realme-products')
        },
        {
          path:"/update/:id",
          element:<PrivateRoute>
            <GoogleForm></GoogleForm>
          </PrivateRoute>
          
        }
          
        ]
    }
]);

export default Router;