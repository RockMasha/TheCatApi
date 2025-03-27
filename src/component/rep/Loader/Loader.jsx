import { Wrapper } from "./Loader.styled";
import { PuffLoader } from "react-spinners";

function Loader() {
  return (
    <Wrapper>
      <PuffLoader />
    </Wrapper>
  );
}

export default Loader;
