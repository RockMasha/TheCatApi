import { Component } from "react";
import { Formik } from "formik";
import { SortForm, SortInput, SortSection } from "./SortCats.styled";
import Container from "../rep/Container/Container";
import api from "../../api";

const { getBreeds } = api;
const breeds = await getBreeds();

class SortCats extends Component {
  setCats = async (event) => {
    const { value } = event.currentTarget;
    const sortData = this.getSortCats(value);
    await this.props.setCatsElements(sortData, true);
  };

  getSortCats = (value) => {
    const sortList = breeds.filter((cat) => {
      return cat.name.toLowerCase().includes(value.toLowerCase());
    });
    const sortIdList = sortList.map((cat) => cat.id);
    return sortIdList.join(",");
  };

  render() {
    return (
      <SortSection>
        <Container>
          <Formik>
            <SortForm>
              <SortInput
                name="sort"
                onChange={this.setCats}
                placeholder="American Shorthair..."
              />
            </SortForm>
          </Formik>
        </Container>
      </SortSection>
    );
  }
}

export default SortCats;
