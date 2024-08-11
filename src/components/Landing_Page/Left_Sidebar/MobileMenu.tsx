import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const Page = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon color="#FF5656" size={40} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-xl mr-4 p-5 w-60 border-none bg-[#0E0E0E] text-white">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-3 mt-1 text-lg">
            <img className="size-6" src="../src/assets/Home.svg" alt="" /> Home
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 mt-1 text-lg">
            <img className="size-6" src="../src/assets/Trends.svg" alt="" />
            Trends
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 mt-1 text-lg">
            <img className="size-6" src="../src/assets/Library.svg" alt="" />
            Library
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 mt-1 text-lg">
            <img className="size-6" src="../src/assets/Discover.svg" alt="" />
            Discover
          </DropdownMenuItem>

          <DropdownMenuLabel>General</DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-3 mt-1 text-lg">
            <img className="size-6" src="../src/assets/Settings.svg" alt="" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 mt-1 text-lg">
            <img className="size-6" src="../src/assets/Log Out.svg" alt="" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Page;
