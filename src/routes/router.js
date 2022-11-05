import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Orders from "../components/Pages/Orders/Orders";
import Signup from "../components/Pages/Signup/Signup";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
