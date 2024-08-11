import { Outlet } from "react-router-dom";
import LeftSidebar from "./Left_Sidebar/left_sidebar";
import RightSidebar from "./Right_Sidebar/right_sidebar";
import { cn } from "@/lib/utils";
import { useMusicContext } from "@/lib/MusicProvider";

const Layout = () => {
  const { isActive } = useMusicContext();
  return (
    <div
      className={cn(
        "grid h-full",
        isActive
          ? "lg:grid-cols-activeLayoutTablet grid-cols-activeLayoutMobile 2xl:grid-cols-activeLayout"
          : "lg:grid-cols-inactiveLayout",
      )}
    >
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Layout;
