import { MusicDataProps } from "@/lib/music_data";

const Page = ({ music }: { music: MusicDataProps }) => {
  return (
    <div
      id={music.id.toString()}
      className="grid-cols-popular grid items-center gap-x-1 py-2 text-center font-['Poppins',sans-serif] text-lg font-semibold text-[#F6F6F6]"
    >
      <h1 className="">{music.id}</h1>
      <div className="grid-cols-subnav ml-2 grid items-center">
        <img src={`../src/assets/${music.title}.svg`} alt="Thumbnail" />
        <h1 className="truncate text-left">{music.title}</h1>
      </div>
      <h1 className="">{music.playing.toLocaleString()}</h1>
      <h1 className="">{music.time}</h1>
      <h1 className="truncate pr-16 text-right">{music.album}</h1>
    </div>
  );
};

export default Page;
