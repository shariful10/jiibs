import ApartmentCard from "@/Components/Regular/ApartmentCard/ApartmentCard";
import Container from "@/Components/Regular/Container";
import UnitCard from "@/Components/UnitCard";
import { data } from "@/Components/data";

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
          <div className="pt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 md:p-0">
            {apartments?.slice(0, 4).map((apartment, index) => (
              <UnitCard />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
