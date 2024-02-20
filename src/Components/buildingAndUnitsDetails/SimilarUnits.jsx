import Container from "@/Components/Regular/Container";
import SimilarUnitsSlider from "./components/SimilarUnitsSlider";

export default function SimilarUnits() {
  return (
    <Container className="!px-0">
      <div className="mb-10 md:mb-20">
        <h1 className="text-xl md:text-[26px] xxl:text-3xl font-semibold mb-5">
          Similar Units
        </h1>
        <SimilarUnitsSlider />
      </div>
    </Container>
  );
}
