import Container from "../Container";

const { default: Logo } = require("../Logo");

export default function SearchResultShow({ data = [] }) {
  console.log("data ", data);

  return (
    <>
      <div className="bg-black w-full absolute top-0 inset-x-0">
        <Container>
          <div className="">
            <Logo />
          </div>
          <div></div>
        </Container>
      </div>
    </>
  );
}
