import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import Contact from "../pages/Homepage/Contact/Contact";
import DahsboardLayout from "../pages/Dashboard/DahsboardLayout";
import AddPost from "../pages/Dashboard/AddPost/AddPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DahsboardLayout />,
    children: [
      {
        path: "addpost",
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
