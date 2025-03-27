import { Formik } from "formik";
import { SortForm, SortInput, SortSection } from "./SortCats.styled";
import Container from "../rep/Container/Container";
import api from "../../api";

const { getBreeds } = api;
const breeds = await getBreeds();

function SortCats(props) {
  const setCats = async (event) => {
    const { value } = event.currentTarget;
    const sortData = getSortCats(value);
    await props.setCatsElements(sortData, true);
  };

  const getSortCats = (value) => {
    const sortList = breeds.filter((cat) => {
      return cat.name.toLowerCase().includes(value.toLowerCase());
    });
    const sortIdList = sortList.map((cat) => cat.id);
    return sortIdList.join(",");
  };

  return (
    <SortSection>
      <Container>
        <Formik>
          <SortForm>
            <SortInput
              name="sort"
              onChange={setCats}
              placeholder="American Shorthair..."
            />
          </SortForm>
        </Formik>
      </Container>
    </SortSection>
  );
}

export default SortCats;
