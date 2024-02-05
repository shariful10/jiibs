import Breadcrumbs from "@/Components/Regular/Breadcrumbs/Breadcrumbs";
import Container from "@/Components/Regular/Container";
import DetailsSlider from "@/Components/Regular/DetailsSlider/DetailsSlider";
import Description from "./Description/Description";
import Similar from "./Similar/Similar";

export default function BuildingDetail() {
  return (
    <>
      {/* title and slider part */}
      <Container className="py-4">
        {/* Header part */}
        <div className=" mdx:flex flex-col mdx:flex-row gap-4 justify-between items-center py-[18px] hidden">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
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
        <div className="w-full">
          <DetailsSlider />
        </div>
      </Container>

      {/* Description */}
      <Container>
        <Description />
      </Container>

      {/* Similar Buildings */}
      <Container>
        <Similar />
      </Container>
    </>
  );
}
