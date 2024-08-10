interface IndividualBarProps {
  name: string;
}

const Page = ({ name }: IndividualBarProps) => {
  return (
    <div className="flex items-center gap-5">
      <img src={`../src/assets/${name}.svg`} alt={`${name}`} />
      <h1 className="individual-bar-text">{name}</h1>
    </div>
  );
};

export default Page;
