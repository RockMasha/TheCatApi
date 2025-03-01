import { Component } from "react";
import { Wrapper } from "./Loader.styled";
import { PuffLoader } from "react-spinners";

class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <PuffLoader />
      </Wrapper>
    );
  }
}

export default Loader;
