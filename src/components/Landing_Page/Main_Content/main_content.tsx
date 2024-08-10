import Musics from "@/components/Musics/Musics";

const Page = () => {
  return (
    <div className="custom-gradient-1 h-full">
      <div className="mt-11 flex items-center justify-around text-[#F6F6F6]">
        <div className="flex gap-[50px] text-lg">
          <h1>Music</h1>
          <h1>Podcast</h1>
          <h1>Live</h1>
          <h1>Radio</h1>
        </div>
        <div className="relative w-[40%]">
          <input
            type="search"
            className="h-14 w-full rounded-full border-none bg-[#2C0000] px-5 font-['Poppins',sans-serif] font-medium"
            placeholder="Michael Jackson"
          />
          <img
            src="../src/assets/Search.svg"
            alt="Search"
            className="absolute right-5 top-3"
          />
        </div>
      </div>
      <div className="relative">
        <div className="custom-bg brightness-70 mx-auto mt-36 flex">
          <div className="my-auto ml-12">
            <h1 className="flex items-center gap-2 text-[#F6F6F6]">
              <img src="../src/assets/Verified.svg" />
              Verified Artist
            </h1>
            <h1 className="mt-1 font-['Poppins',sans-serif] text-[40px] font-semibold text-[#F6F6F6]">
              Michael Jackson
            </h1>
            <h1 className="mt-5 text-[#F6F6F6]">
              27,878,723 monthly listeners
            </h1>
          </div>
        </div>
        <img
          src="../src/assets/Michael.svg"
          alt=""
          className="absolute bottom-0 right-[20%] z-10"
        />
      </div>
      <Musics />
    </div>
  );
};

export default Page;
