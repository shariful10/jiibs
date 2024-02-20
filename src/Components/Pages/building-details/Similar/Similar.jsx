import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import Container from "@/Components/Regular/Container";
import UnitCard from "@/Components/UnitCard";
import { data } from "@/Components/data";
import SimilarSlider from "./SimilarSlider";

export default function Similar() {
  const apartments = data.apartments;

  return (
    <>
      <Container className="!px-0">
        <div className="mb-10 md:mb-20">
          <div>
            <h1 className="text-xl md:text-[26px] xxl:text-3xl font-semibold mb-5">
              Similar buildings
            </h1>
          </div>
          <div>
            <SimilarSlider />
          </div>
        </div>
      </Container>
    </>
  );
}
