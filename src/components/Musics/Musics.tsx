import Columns from "./Columns";
import { useMusicContext } from "@/lib/MusicProvider";

const Page = () => {
  const { music } = useMusicContext();
  return (
    <div className="mx-auto my-4 mt-10 max-w-6xl text-[#F6F6F6]">
      <div className="mx-16 flex items-center justify-between font-['Poppine',sans-serif] font-semibold">
        <h1 className="text-2xl">Popular</h1>
        <p className="text-lg">See All</p>
      </div>
      <Columns musicData={music} />
    </div>
  );
};

export default Page;
