import Musics from "@/components/Musics/Musics";

const Page = () => {
  return (
    <div className="custom-gradient-1 h-full">
      <div className="mt-11 flex flex-col items-center gap-5 text-[#F6F6F6] md:flex-row md:justify-around">
        <div className="flex gap-6 text-base xl:gap-12 xl:text-lg">
          <h1>Music</h1>
          <h1>Podcast</h1>
          <h1>Live</h1>
          <h1>Radio</h1>
        </div>

        <>
          <div className="relative">
            <input
              type="search"
              className="h-12 w-[240px] rounded-full border-none bg-[#2C0000] px-5 font-['Poppins',sans-serif] font-semibold lg:w-[280px] xl:w-[320px] 2xl:h-14 2xl:w-[400px]"
              placeholder="Michael Jackson"
            />
            <img
              src="../src/assets/Search.svg"
              alt="Search"
              className="absolute right-5 top-3"
            />
          </div>
        </>
      </div>

      <div className="relative">
        <div className="custom-bg brightness-70 mx-auto mt-10 flex sm:mt-20 md:mt-28 xl:mt-36">
          <div className="my-auto ml-4 sm:ml-6 md:ml-12">
            <h1 className="flex items-center gap-2 text-sm text-[#F6F6F6] sm:text-base">
              <img src="../src/assets/Verified.svg" />
              Verified Artist
            </h1>
            <h1 className="mt-1 font-['Poppins',sans-serif] text-lg font-semibold text-[#F6F6F6] sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
              Michael Jackson
            </h1>
            <h1 className="mt-5 text-xs text-[#F6F6F6] sm:text-sm xl:text-base">
              27,878,723 monthly listeners
            </h1>
          </div>
        </div>
        <img
          src="../src/assets/Michael.svg"
          alt="Michael Jackson"
          className="absolute bottom-0 right-[12%] sm:right-[8%] z-10 h-[110%] sm:h-[120%] xl:h-auto 2xl:right-[16%]"
        />
      </div>
      <Musics />
    </div>
  );
};

export default Page;
