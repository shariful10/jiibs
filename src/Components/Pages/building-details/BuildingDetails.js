import Breadcrumbs from "@/Components/Regular/Breadcrumbs/Breadcrumbs";
import Container from "@/Components/Regular/Container";
import DetailsSlider from "@/Components/Regular/DetailsSlider/DetailsSlider";

export default function BuildingDetails() {
  return (
    <>
      <Container className="py-4">
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
        <DetailsSlider />
      </Container>
    </>
  );
}
