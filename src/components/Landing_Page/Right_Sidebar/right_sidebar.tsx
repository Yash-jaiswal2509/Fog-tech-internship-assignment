import { useMusicContext } from "@/lib/MusicProvider";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

const Page = () => {
  const [val, setValue] = useState<number>(0);
  const { playNextTrack, playPrevTrack, playRandomTrack, loopTrack, howl, isActive, selectedMusic } = useMusicContext();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const onHandlePlayPause = () => {
    if (howl) {
      howl.playing() ? howl.pause() : howl.play();
    }
  };

  const onChangeHandler = (_event: Event, newValue: number | number[]) => {
    const newSeekValue = newValue as number;
    setValue(newSeekValue);

    if (howl) {
      howl.seek(newSeekValue);
    }
  };

  useEffect(() => {
    if (howl) {
      const updateSlider = () => {
        const seek = howl.seek() as number;
        setValue(seek);
      };

      const interval = setInterval(updateSlider, 1000);

      return () => clearInterval(interval);
    }
  }, [howl]);

  useEffect(() => {
    if (howl && selectedMusic) {
      setValue(0);
    }
  }, [selectedMusic]);

  const duration = howl?.duration() ?? 0;
  const currentTime = howl?.seek() ?? 0;

  return (
    <>
      {isActive && (
        <>
          <div className="custom-gradient-2 hidden h-full lg:flex">
            <div className="box-shadow mx-2 mb-6 mt-auto flex h-fit w-[85%] flex-col items-center rounded-2xl bg-[#6B0000] md:mx-auto xl:p-3 2xl:p-5">
              <h1 className="mt-2 font-[Poppins,sans-serif] text-lg font-semibold text-[#F6F6F6]">
                Now Playing
              </h1>

              <img
                src={`/assets/${selectedMusic && selectedMusic.title}.svg`}
                alt="Pic"
                className="mt-4 w-[90%] xl:w-[95%] 2xl:w-full"
              />

              <p className="mt-5 w-full truncate px-2 text-center text-[#F6F6F6]">
                {selectedMusic && selectedMusic.title}
              </p>
              <p className="text-sm text-[#CFC5C5]">Michael Jackson</p>
              <div className="mt-5 flex w-[80%] items-center gap-5 text-[#F6F6F6] xl:w-[85%] 2xl:w-full">
                <span>{formatTime(currentTime)}</span>
                <Slider
                  aria-label="Volume"
                  onChange={onChangeHandler}
                  min={0}
                  max={duration}
                  value={val}
                  sx={{ color: "#F6F6F6" }}
                />
                <span>{formatTime(duration)}</span>
              </div>

              <div className="mb-2 mt-6 flex items-center gap-2">
                <img
                  src="/assets/Repeat.svg"
                  className="mr-4 cursor-pointer"
                  alt="Repeat"
                  onClick={loopTrack}
                />
                <img src="/assets/Back.svg" className="cursor-pointer" alt="Back" onClick={playPrevTrack} />
                {howl?.playing() ?
                  (
                    <img
                      src="/assets/Pause.svg"
                      alt="Pause"
                      className="size-10 cursor-pointer"
                      onClick={onHandlePlayPause}
                    />
                  ) : (
                    <img
                      src="/assets/Play.svg"
                      alt="Play"
                      className="size-10 cursor-pointer"
                      onClick={onHandlePlayPause}
                    />
                  )
                }
                <img src="/assets/Next.svg" className="cursor-pointer" alt="Next" onClick={playNextTrack} />
                <img
                  src="/assets/Random.svg"
                  className="ml-4 cursor-pointer"
                  alt="Random"
                  onClick={playRandomTrack}
                />
              </div>
            </div>
          </div>

          {/* from 1024px */}
          <div className="box-shadow flex items-center justify-around gap-5 bg-[#6B0000] p-2 lg:hidden">
            <div className="flex items-center gap-2">
              <img
                src={`/assets/${selectedMusic && selectedMusic.title}.svg`}
                alt="Pic"
              />
              <h1 className="hidden text-nowrap font-[Poppins,sans-serif] text-lg font-semibold text-[#F6F6F6] md:block">
                Now Playing
              </h1>
            </div>

            <div className="my-auto w-20 px-2 text-center">
              <p className="truncate text-[#F6F6F6]">
                {selectedMusic && selectedMusic.title}
              </p>
              <p className="truncate text-xs text-[#CFC5C5]">Michael Jackson</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-evenly gap-2">
                <img
                  src="/assets/Repeat.svg"
                  alt="Repeat"
                  className="size-5 sm:size-6 cursor-pointer"
                  onClick={loopTrack}
                />
                <img
                  src="/assets/Back.svg"
                  alt="Back"
                  className="size-7 sm:size-8 cursor-pointer"
                  onClick={playPrevTrack}
                />
                {howl?.playing() ?
                  (
                    <img
                      src="/assets/Pause.svg"
                      alt="Pause"
                      className="size-7 sm:size-8 cursor-pointer"
                      onClick={onHandlePlayPause}
                    />
                  ) : (
                    <img
                      src="/assets/Play.svg"
                      alt="Play"
                      className="size-7 sm:size-8 cursor-pointer"
                      onClick={onHandlePlayPause}
                    />
                  )
                }
                <img
                  src="/assets/Next.svg"
                  alt="Next"
                  className="size-7 sm:size-8 cursor-pointer"
                  onClick={playNextTrack}
                />
                <img
                  src="/assets/Random.svg"
                  alt="Random"
                  className="size-4 sm:size-6 cursor-pointer"
                  onClick={playRandomTrack}
                />
              </div>

              <div className="flex w-48 items-center gap-5 text-sm text-[#F6F6F6] sm:w-72 sm:text-base">
                <span>{formatTime(currentTime)}</span>
                <Slider
                  aria-label="Volume"
                  onChange={onChangeHandler}
                  min={0}
                  max={duration}
                  value={val}
                  sx={{ color: "#F6F6F6" }}
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
