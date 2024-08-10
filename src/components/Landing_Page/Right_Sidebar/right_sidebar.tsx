import Slider from "@mui/material/Slider";
import { useState } from "react";

const Page = () => {
  const [val, setValue] = useState<number>(100);
  const onChangeHandler = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="custom-gradient-2 flex h-lvh">
      <div className="box-shadow mx-auto mb-6 mt-auto flex h-fit flex-col items-center rounded-2xl bg-[#6B0000] p-5">
        <h1 className="font-[Poppins,sans-serif] text-lg font-semibold text-[#F6F6F6]">
          Now Playing
        </h1>
        <img src="../src/assets/Pic.svg" alt="Pic" className="mt-4" />
        <p className="mt-5 text-[#F6F6F6]">Beat It</p>
        <p className="text-sm text-[#CFC5C5]">Michael Jackson</p>
        <div className="mt-5 flex w-full items-center gap-5 text-[#F6F6F6]">
          <span>2:15</span>
          <Slider
            aria-label="Volume"
            onChange={() => onChangeHandler(val as number)}
            min={0}
            max={258}
            value={val}
            color="#F6F6F6"
          />
          <span>4:18</span>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <img src="../src/assets/Repeat.svg" className="mr-4" alt="" />
          <img src="../src/assets/Back.svg" alt="" />
          <img src="../src/assets/Play.svg" alt="" />
          <img src="../src/assets/Next.svg" alt="" />
          <img src="../src/assets/Random.svg" className="ml-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page;
