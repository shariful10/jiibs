import AboutSide from "./AboutSide";
import LocationMap from "./LocationMap";

export default function Description() {
  return (
    <>
      <div className="mt-[53px] grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* about , description */}
        <div className="md:col-span-7 border border-red-400">
          <AboutSide />
        </div>

        {/* Location map */}
        <div className="md:col-span-5 border border-green-400">
          <LocationMap />
        </div>
      </div>
    </>
  );
}
