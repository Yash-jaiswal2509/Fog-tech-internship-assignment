import { Outlet } from "react-router-dom";
import LeftSidebar from "./Left_Sidebar/left_sidebar";
import RightSidebar from "./Right_Sidebar/right_sidebar";

const Layout = () => {
  return (
    <div className="grid-cols-layout grid h-full">
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Layout;
