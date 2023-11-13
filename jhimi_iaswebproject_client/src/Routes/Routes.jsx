import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import DahsboardLayout from "../pages/Dashboard/DahsboardLayout";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import AdminAllquestion from "../pages/Dashboard/AdminAllquestion/AdminAllquestion";
import AllQuestion from "../pages/Homepage/AllQuestion/AllQuestion";
import Loginpage from "../pages/Loginpage/Loginpage";
import GhrapgDashboard from "../pages/Dashboard/Ghrapg-dashboard/GhrapgDashboard";
import Dashboard from "../pages/Dashboard/Dashboard.jsx/Dashboard";

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
        path: "/allqsn",
        element: <AllQuestion />,
      },
      {
        path: "/questions/:id",
        element: <QuestionsPage />,
        loader: ({ params }) =>
          fetch(
            `https://jhimi-iaswebproject-server.vercel.app/qustions/${params.id}`
          ),
      },
      // {
      //   path: "/login",
      //   element: <Loginpage />
      // }
    ],
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/dashboard",
    element: <DahsboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/ghraph",
        element: <GhrapgDashboard />,
      },
      {
        path: "addpost",
        element: <AddPost />,
      },
      {
        path: "all_questions",
        element: <AdminAllquestion />,
      },
    ],
  },
]);

export default router;
