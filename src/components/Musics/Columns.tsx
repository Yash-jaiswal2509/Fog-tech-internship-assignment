import { MusicDataProps } from "@/lib/music_data";
import Music from "./Music";

type ColumnsProps = {
  musicData: MusicDataProps[];
};

const Page = ({ musicData }: ColumnsProps) => {
  return (
    <>
      <div className="grid-cols-popular my-4 grid text-center font-['Poppins',sans-serif] text-lg font-semibold text-[#CFC5C5]">
        <h1>#</h1>
        <h1>TITLE</h1>
        <h1>PLAYING</h1>
        <h1>TIME</h1>
        <h1>ALBUM</h1>
      </div>

      {musicData.map((music) => (
        <Music music={music} />
      ))}
    </>
  );
};

export default Page;
