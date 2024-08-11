import Columns from "./Columns";
import { useMusicContext } from "@/lib/MusicProvider";

const Page = () => {
  const { music } = useMusicContext();
  return (
    <div className="mx-auto my-4 mt-10 max-w-6xl text-[#F6F6F6]">
      <div className="mx-16 flex items-center justify-between font-['Poppine',sans-serif] font-semibold">
        <h1 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Popular
        </h1>
        <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg">See All</p>
      </div>
      <Columns musicData={music} />
    </div>
  );
};

export default Page;
