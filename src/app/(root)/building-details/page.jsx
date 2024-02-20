import BuildingSlider from "@/Components/BuildingSlider/Slider";
import BuildingSliderMobile from "@/Components/BuildingSlider/SliderMobile";
import AboutSide from "@/Components/Pages/building-details/Description/AboutSide/AboutSide";
import LocationMap from "@/Components/Pages/building-details/Description/LocationDetails/LocationMap";
import Similar from "@/Components/Pages/building-details/Similar/Similar";
import Breadcrumbs from "@/Components/Regular/Breadcrumbs/Breadcrumbs";
import Container from "@/Components/Regular/Container";

export default function BuildingDetail() {
  return (
    <div className="w-full">
      <BuildingSliderMobile />
      <Container>
        {/* title and slider part */}
        <section className="py-4">
          {/* Header part */}
          <div className="md:flex flex-col md:flex-row gap-4 justify-between items-center py-[14px] hidden">
            <h1 className="md:text-[24px] xxl:text-3xl font-semibold">
              70 Pine Street, New York, New york 10005
            </h1>

            <div className="hidden md:block">
              <Breadcrumbs
                paths={[
                  { name: "buildings", link: "#" },
                  { name: "Downtown", link: "#" },
                  { name: "Financial district", link: "#" },
                  { name: "70 pine street", link: "#" },
                ]}
              />
            </div>
          </div>

          {/* preview slider */}
          <BuildingSlider />
        </section>
        <section className="flex flex-col-reverse md:flex-row flex-start items-start justify-between gap-[9%] md:gap-20 w-full mt-2 md:mt-6">
          {/* about , description */}
          <div className="w-full md:w-[61%] overflow-hidden">
            <AboutSide />
          </div>

          {/* Location map */}
          <div className="w-full md:w-[33%] mb-4 md:mb-14 static md:sticky md:top-0">
            <LocationMap />
          </div>
        </section>
        <Similar />
      </Container>
    </div>
  );
}
