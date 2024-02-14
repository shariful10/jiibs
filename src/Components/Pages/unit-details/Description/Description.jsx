import AboutSide from "./AboutSide/AboutSide";
import LocationMap from "./LocationDetails/LocationMap";

export default function Description() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row flex-start items-start justify-between gap-[9%] md:gap-20 w-full mt-6">
        {/* about , description */}
        <div className="w-full md:w-[61%]">
          <AboutSide />
        </div>

        {/* Location map */}
        <div className="w-full md:w-[30%] mb-4 md:mb-0">
          <LocationMap />
        </div>
      </div>
    </>
  );
}
