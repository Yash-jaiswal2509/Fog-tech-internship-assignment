import { useMusicContext } from "@/lib/MusicProvider";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const Page = () => {
  const [val, setValue] = useState<number>(100);
  const { isActive } = useMusicContext();

  const onChangeHandler = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <>
      {isActive && (
        <>
          <div className="custom-gradient-2 hidden h-full lg:flex">
            <div className="box-shadow mx-2 mb-6 mt-auto flex w-[80%] h-fit flex-col items-center rounded-2xl bg-[#6B0000] md:mx-auto xl:p-3 2xl:p-5">
              <h1 className="mt-2 font-[Poppins,sans-serif] text-lg font-semibold text-[#F6F6F6]">
                Now Playing
              </h1>

              <img
                src="../src/assets/Pic.svg"
                alt="Pic"
                className="mt-4 w-[90%] xl:w-[95%] 2xl:w-full"
              />

              <p className="mt-5 text-[#F6F6F6]">Beat It</p>
              <p className="text-sm text-[#CFC5C5]">Michael Jackson</p>
              <div className="mt-5 flex w-[80%] items-center gap-5 text-[#F6F6F6] xl:w-[85%] 2xl:w-full">
                <span>2:15</span>
                <Slider
                  aria-label="Volume"
                  onChange={onChangeHandler}
                  min={0}
                  max={258}
                  value={val}
                  sx={{ color: "#F6F6F6" }}
                />
                <span>4:18</span>
              </div>

              <div className="mb-2 mt-6 flex items-center gap-2">
                <img
                  src="../src/assets/Repeat.svg"
                  className="mr-4"
                  alt="Repeat"
                />
                <img src="../src/assets/Back.svg" alt="Back" />
                <img src="../src/assets/Play.svg" alt="Play" />
                <img src="../src/assets/Next.svg" alt="Next" />
                <img
                  src="../src/assets/Random.svg"
                  className="ml-4"
                  alt="Random"
                />
              </div>
            </div>
          </div>

          {/* from 1024px */}
          <div className="box-shadow flex items-center justify-around gap-5 bg-[#6B0000] p-2 lg:hidden">
            <div className="flex items-center gap-2">
              <img src="../src/assets/Pic.svg" alt="Pic" className="max-h-20" />
              <h1 className="hidden text-nowrap font-[Poppins,sans-serif] text-lg font-semibold text-[#F6F6F6] md:block">
                Now Playing
              </h1>
            </div>

            <div className="my-auto w-20 px-2 text-center">
              <p className="truncate text-[#F6F6F6]">Beat It</p>
              <p className="truncate text-xs text-[#CFC5C5]">Michael Jackson</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-evenly gap-2">
                <img
                  src="../src/assets/Repeat.svg"
                  alt="Repeat"
                  className="size-5 sm:size-6"
                />
                <img
                  src="../src/assets/Back.svg"
                  alt="Back"
                  className="size-7 sm:size-8"
                />
                <img
                  src="../src/assets/Play.svg"
                  alt="Play"
                  className="size-7 sm:size-8"
                />
                <img
                  src="../src/assets/Next.svg"
                  alt="Next"
                  className="size-7 sm:size-8"
                />
                <img
                  src="../src/assets/Random.svg"
                  alt="Random"
                  className="size-4 sm:size-6"
                />
              </div>

              <div className="flex w-48 items-center gap-5 text-sm text-[#F6F6F6] sm:w-72 sm:text-base">
                <span>2:15</span>
                <Slider
                  aria-label="Volume"
                  onChange={onChangeHandler}
                  min={0}
                  max={258}
                  value={val}
                  sx={{ color: "#F6F6F6" }}
                />
                <span>4:18</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
