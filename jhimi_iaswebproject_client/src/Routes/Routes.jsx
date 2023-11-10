import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import Contact from "../pages/Homepage/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
         },
         {
            path: '/contact',
            element: <Contact />
         }
    ]
    },
  ]);

  export default router;