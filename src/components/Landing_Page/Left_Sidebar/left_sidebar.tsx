import IndividualBar from "../../../assets/individual_bar";

const Page = () => {
  return (
    // have to change height of the sidebar form lvh to h-full
    <div className="flex h-lvh flex-col bg-[#0E0E0E] pl-[70px] pt-[26px]">
      <div className="flex items-center gap-4">
        <img src="Logo.png" alt="Logo" />
        <h1 className="logo-height flex text-[#FF5656]">
          Dream<p className="font-medium text-white">Music</p>
        </h1>
      </div>

      <div className="mt-16">
        <h1 className="menu">Menu</h1>
        <div className="flex flex-col gap-6 mt-2">
          <IndividualBar name="Home" />
          <IndividualBar name="Trends" />
          <IndividualBar name="Library" />
          <IndividualBar name="Discover" />
        </div>
      </div>

      <div className="mt-auto mb-20">
        <h1 className="menu">General</h1>
        <div className="flex flex-col gap-6 mt-2">
          <IndividualBar name="Settings" />
          <IndividualBar name="Log Out" />
        </div>
      </div>
    </div>
  );
};

export default Page;
