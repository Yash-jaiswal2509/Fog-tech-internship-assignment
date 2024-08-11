import { MusicDataProps } from "@/lib/music_data";
import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ColumnsProps = {
  music: MusicDataProps;
  active: number | null;
  onDoubleClick: (id: number) => void;
};

const Page = ({ music, active, onDoubleClick }: ColumnsProps) => {
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
        "grid-cols-popular grid items-center gap-x-1 py-2 text-center font-['Poppins',sans-serif] font-semibold text-[#F6F6F6] text-xs md:text-sm xl:text-base 2xl:text-lg",
        active == music.id ? "selected-music" : "",
      )}
      onDoubleClick={() => onDoubleClick(music.id)}
    >
      {active == music.id ? (
        <img
          src="../src/assets/playing.svg"
          className="mx-auto"
          alt="Playing"
        />
      ) : (
        <h1 className="">{music.id}</h1>
      )}
      <div className="grid-cols-subnav ml-2 grid items-center gap-2 2xl:gap-0">
        <img src={`../src/assets/${music.title}.svg`} alt="Thumbnail" />
        <h1 className="truncate text-left">{music.title}</h1>
      </div>
      <h1 className="truncate">{music.playing.toLocaleString()}</h1>
      <h1>{music.time}</h1>
      <h1 className="truncate pr-6 md:pr-16 text-right">{music.album}</h1>
    </div>
  );
};

export default Page;
