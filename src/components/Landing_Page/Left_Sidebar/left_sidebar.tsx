import { cn } from "@/lib/utils";
import IndividualBar from "../../../lib/individual_bar";
import { useMusicContext } from "@/lib/MusicProvider";
import MobileMenu from "./MobileMenu";

const Page = () => {
  const { isActive } = useMusicContext();

  return (
    <div className="flex h-20 w-full justify-between bg-[#0E0E0E] lg:h-full lg:flex-col lg:pt-7">
      <div className="flex items-start gap-1 sm:mx-auto lg:items-center 2xl:gap-3">
        <img
          src="Logo.png"
          className="my-auto ml-5 w-8 lg:my-0 xl:w-10 2xl:w-full"
          alt="Logo"
        />
        <h1
          className={cn(
            "hidden items-center text-[#FF5656] md:flex",
            isActive ? "logo-height-active" : "logo-height",
          )}
        >
          Dream<span className="font-medium text-white">Music</span>
        </h1>
      </div>

      <div className="hidden flex-1 justify-around sm:flex lg:flex-col">
        <div
          className={cn(
            "my-auto lg:mt-16 lg:px-16",
            isActive && "px-4 lg:px-8 xl:px-12 2xl:px-16",
          )}
        >
          <h1 className={cn("menu", isActive && "text-center lg:text-left")}>
            Menu
          </h1>
          <div
            className={cn(
              "flex items-center gap-3 lg:mt-2 lg:flex-col lg:items-start 2xl:gap-6",
            )}
          >
            <IndividualBar name="Home" />
            <IndividualBar name="Trends" />
            <IndividualBar name="Library" />
            <IndividualBar name="Discover" />
          </div>
        </div>

        <div
          className={cn(
            "my-auto lg:mb-20 lg:px-16",
            isActive && "px-4 lg:px-8 xl:px-12 2xl:px-16",
          )}
        >
          <h1 className="menu">General</h1>
          <div
            className={cn(
              "flex gap-3 lg:mt-2 lg:flex-col 2xl:gap-6",
              isActive && "items-center lg:items-start",
            )}
          >
            <IndividualBar name="Settings" />
            <IndividualBar name="Log Out" />
          </div>
        </div>
      </div>

      <div className="my-auto mr-5 sm:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Page;
