import { MusicDataProps } from "@/lib/music_data";
import Music from "./Music";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMusicContext } from "@/lib/MusicProvider";
import { useState } from "react";

type ColumnsProps = {
  musicData: MusicDataProps[];
};

const Page = ({ musicData }: ColumnsProps) => {
  const { setMusic, setIsActive } = useMusicContext();
  const [active, setActive] = useState<number | null>(null);

  const handleDoubleClick = (id: number) => {
    setActive(active != id ? id : id);
    setIsActive(true);
  };

  const getMusicPos = (id: number) => {
    return musicData.findIndex((music) => music.id == id);
  };

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id == over.id) {
      return;
    }

    const oldPos = getMusicPos(active.id);
    const newPos = getMusicPos(over.id);
    const newMusicList = arrayMove(musicData, oldPos, newPos).map(
      (music, index) => {
        return { ...music, id: index + 1 };
      },
    );

    setMusic(newMusicList);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <>
      <div className="my-4 grid grid-cols-popular text-center font-['Poppins',sans-serif] font-semibold text-[#CFC5C5] text-xs md:text-sm lg:text-base 2xl:text-lg">
        <h1>#</h1>
        <h1>TITLE</h1>
        <h1 className="truncate">PLAYING</h1>
        <h1>TIME</h1>
        <h1>ALBUM</h1>
      </div>

      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext
          items={musicData}
          strategy={verticalListSortingStrategy}
        >
          {musicData.map((data, index) => (
            <Music
              music={data}
              key={index}
              active={active}
              onDoubleClick={handleDoubleClick}
            />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

export default Page;
