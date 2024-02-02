import AboutSide from "./AboutSide/AboutSide";
import LocationMap from "./LocationDetails/LocationMap";

export default function Description() {
  return (
    <>
      <div className="grid grid-cols-1 mdx:grid-cols-12 gap-20">
        {/* about , description */}
        <div className="mdx:col-span-8">
          <AboutSide />
        </div>

        {/* Location map */}
        <div className="mdx:col-span-4 order-1 mdx:order-2">
          <LocationMap />
        </div>
      </div>
    </>
  );
}
