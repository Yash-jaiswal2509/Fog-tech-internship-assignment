import { useMusicContext } from "./MusicProvider";
import { cn } from "./utils";

interface IndividualBarProps {
  name: string;
}

const Page = ({ name }: IndividualBarProps) => {
  const { isActive } = useMusicContext();
  return (
    <div className="mt-2 items-center gap-3 lg:flex 2xl:gap-5">
      <img
        src={`/assets/${name}.svg`}
        alt={`${name}`}
        className={cn(
          "mb-1 hidden lg:mb-0 lg:block lg:size-6 xl:size-8 2xl:size-10",
          isActive && "mx-auto",
        )}
      />
      <h1 className={cn("individual-bar-text text-left lg:text-lg xl:text-xl hover:text-[#FF5656] hover:cursor-pointer")}>
        {name}
      </h1>
    </div>
  );
};

export default Page;
