import { AiFillFileAdd, AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdSpaceDashboard, MdAllInbox } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DahsboardLayout = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="LinkTiems md:w-64 h-screen sticky top-0">
        <div
          className="py-4 px-4 text-xs md:text-2xl font-bold"
          style={{ borderBottom: "1px dashed #999" }}
        >
          Dashboard
        </div>
        <nav className="dashbord-link text-xl flex flex-col justify-between h-full LinkTiems">
          <div>
            <NavLink
            title="Dashboard"
              to="/dashboard/ghraph"
              className=" gap-3  flex items-center  py-2 px-4 hover:bg-white"
            >
              <MdSpaceDashboard />
              <span className="md:block hidden">Dashboard</span>
            </NavLink>
            <NavLink
            title="Add questions"
              to="/dashboard/addpost"
              className=" gap-3  flex items-center  hover:bg-white py-2 px-4"
            >
              <AiFillFileAdd />
              <span className="md:block hidden">Add Question</span>
            </NavLink>
            <NavLink
            title="All questions"
              to="/dashboard/all_questions"
              className=" gap-3  flex items-center  py-2 px-4 hover:bg-white"
            >
              <MdAllInbox />
              <span className="md:block hidden">All Questions</span>
            </NavLink>
          </div>
          <div className="pb-20 pt-3" style={{ borderTop: "1px dashed #999" }}>
            <NavLink
            title="Home"
              to="/"
              className="py-2 px-4 gap-3  flex items-center hover:bg-white"
            >
              <AiFillHome />
              <span className="md:block hidden">Home</span>
            </NavLink>
            <a href="#" title="Setting" className="gap-3  flex items-center py-2 px-4 hover:bg-white">
              <AiFillSetting />
              <span className="md:block hidden">Settings</span>
              
            </a>
          </div>
        </nav>
      </div>
      <div className="w-9/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DahsboardLayout;
