import Container from "@/Components/Regular/Container";
import SimilarSlider from "./components/SimilarSlider";

export default function SimilarBuildings() {
  return (
    <>
      <Container className="!px-0">
        <div className="mb-10 md:mb-20">
          <h1 className="text-xl md:text-[26px] xxl:text-3xl font-semibold mb-5">
            Similar buildings
          </h1>
          <SimilarSlider />
        </div>
      </Container>
    </>
  );
}
