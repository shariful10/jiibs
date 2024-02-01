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
        <div className="flex gap-4 justify-between items-center py-[18px]">
          <h1 className="text-3xl font-semibold">
            70 Pine Street, New York, New york 10005
          </h1>

          <Breadcrumbs
            paths={[
              "buildings",
              "Downtown",
              "Financial district",
              "70 pine street",
            ]}
          />
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
      <Similar />
    </>
  );
}
