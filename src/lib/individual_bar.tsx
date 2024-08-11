import { useMusicContext } from "./MusicProvider";
import { cn } from "./utils";

interface IndividualBarProps {
  name: string;
}

const Page = ({ name }: IndividualBarProps) => {
  const { isActive } = useMusicContext();
  return (
    <div className="mt-2  items-center gap-3 lg:flex 2xl:gap-5">
      <img
        src={`../src/assets/${name}.svg`}
        alt={`${name}`}
        className={cn("lg:block hidden lg:size-6 mb-1 lg:mb-0 xl:size-8 2xl:size-10",isActive && "mx-auto")}
      />
      <h1 className={cn("individual-bar-text text-left lg:text-lg xl:text-xl")}>
        {name}
      </h1>
    </div>
  );
};

export default Page;
