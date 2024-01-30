<<<<<<< HEAD
import AboutSide from "./AboutSide";
=======
import AboutSide from "./AboutSide/AboutSide";
>>>>>>> 3c7eb54a968da3f700ae0419d38f7ef0b0bcf8d0
import LocationMap from "./LocationMap";

export default function Description() {
  return (
    <>
<<<<<<< HEAD
      <div className="mt-[53px] grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* about , description */}
        <div className="md:col-span-7 border border-red-400">
=======
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* about , description */}
        <div className="md:col-span-8">
>>>>>>> 3c7eb54a968da3f700ae0419d38f7ef0b0bcf8d0
          <AboutSide />
        </div>

        {/* Location map */}
<<<<<<< HEAD
        <div className="md:col-span-5 border border-green-400">
=======
        <div className="md:col-span-4">
>>>>>>> 3c7eb54a968da3f700ae0419d38f7ef0b0bcf8d0
          <LocationMap />
        </div>
      </div>
    </>
  );
}
