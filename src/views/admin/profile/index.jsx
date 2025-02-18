import Banner from "./components/Banner";
import General from "./components/General";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-2">
        <div className="col-span-1 lg:!mb-0">
          <Banner />
        </div>
        {/* <div className="col-span-1 lg:col-span-1 lg:mb-0 3xl:col-span-1">
          <General />
        </div> */}
      </div>
      {/* all project & ... */}

      {/* <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
      </div> */}
    </div>
  );
};

export default ProfileOverview;
