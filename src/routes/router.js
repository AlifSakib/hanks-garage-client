import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Pages/Checkout/Checkout";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Orders from "../components/Pages/Orders/Orders";
import Signup from "../components/Pages/Signup/Signup";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
