import { NavLink, Outlet } from "react-router-dom";

const DahsboardLayout = () => {
  return (
    <div className="flex">

      {/* sidebar */}
      <div className="LinkTiems w-64 h-screen sticky top-0">
        <div
          className="py-4 px-4 text-2xl font-bold"
          style={{ borderBottom: "1px dashed #999" }}
        >
          Dashboard
        </div>
        <nav className="dashbord-link text-xl flex flex-col justify-between h-full LinkTiems">
          <div>
            <NavLink to="/dashboard/ghraph" className="block py-2 px-4 hover:bg-white">
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/addpost"
              className="block hover:bg-white py-2 px-4"
            >
              Add Question
            </NavLink>
            <NavLink to="/dashboard/qs" className="block py-2 px-4 hover:bg-white">
              All Questions
            </NavLink>
            <NavLink to="/dashboard/ghraph" className="block py-2 px-4 hover:bg-white">
              Settings
            </NavLink>
          </div>
          <div className="pb-20 pt-3" style={{borderTop: "1px dashed #999"}}>
            <NavLink to="/" className="block py-2 px-4 hover:bg-white">
              Home
            </NavLink>
            <a href="#" className="block py-2 px-4 hover:bg-white">
              Settings
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
