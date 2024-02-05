import AboutSide from "./AboutSide/AboutSide";
import LocationMap from "./LocationDetails/LocationMap";

export default function Description() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row flex-start items-start justify-between gap-10 md:gap-20 w-full">
        {/* about , description */}
        <div className="w-full md:w-4/6">
          <AboutSide />
        </div>

        {/* Location map */}
        <div className="w-full md:w-2/6">
          <LocationMap />
        </div>
      </div>
    </>
  );
}
