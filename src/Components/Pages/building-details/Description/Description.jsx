import AboutSide from "./AboutSide/AboutSide";
import LocationMap from "./LocationMap";

export default function Description() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* about , description */}
        <div className="md:col-span-8">
          <AboutSide />
        </div>

        {/* Location map */}
        <div className="md:col-span-4">
          <LocationMap />
        </div>
      </div>
    </>
  );
}
