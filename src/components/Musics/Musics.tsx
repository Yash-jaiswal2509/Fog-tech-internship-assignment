import { musicData } from "@/lib/music_data";
import Columns from "./Columns";

const Page = () => {
  return (
    <div className="mx-auto mt-10 max-w-6xl text-[#F6F6F6]">
      <div className="mx-16 flex items-center justify-between font-['Poppine',sans-serif] font-semibold">
        <h1 className="text-2xl">Popular</h1>
        <p className="text-lg">See All</p>
      </div>
      <Columns musicData={musicData} />
    </div>
  );
};

export default Page;
