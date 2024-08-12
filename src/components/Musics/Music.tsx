import { MusicDataProps } from "@/lib/music_data";
import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ColumnsProps = {
  music: MusicDataProps;
  activeName: string | null;
  onDoubleClick: (id: string) => void;
};

const Page = ({ music, activeName, onDoubleClick }: ColumnsProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: music.id.toString() });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      id={music.id.toString()}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={cn(
        "grid grid-cols-popular items-center gap-x-1 py-2 text-center font-['Poppins',sans-serif] text-xs font-semibold text-[#F6F6F6] md:text-sm xl:text-base 2xl:text-lg",
        activeName === music.title ? "selected-music" : "",
      )}
      onDoubleClick={() => onDoubleClick(music.title)}
    >
      {activeName === music.title ? (
        <img
          src="/assets/Playing.svg"
          className="mx-auto"
          alt="Playing"
        />
      ) : (
        <h1 className="">{music.id}</h1>
      )}
      <div className="ml-2 grid grid-cols-subnav items-center gap-2 2xl:gap-0">
        <img src={`/assets/${music.title}.svg`} alt="Thumbnail" />
        <h1 className="truncate text-left">{music.title}</h1>
      </div>
      <h1 className="truncate">{music.playing.toLocaleString()}</h1>
      <h1>{music.time}</h1>
      <h1 className="truncate pr-6 text-right md:pr-16">{music.album}</h1>
    </div>
  );
};

export default Page;
