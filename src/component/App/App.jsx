import { Component } from "react";
import { AppSt, Title } from "./App.styled";
import CatsList from "../CatsList/CatsList";
import api from "../../api";
import { GlobalStyles } from "../GlobalStyled";
import Loader from "../rep/Loader/Loader";
import SortCats from "../SortCats/SortCats";
import { Toaster } from "react-hot-toast";
import { openPage } from "../../constans/tosts/openPage";
import { showError } from "../../constans/tosts/showError";
import { showEmpty } from "../../constans/tosts/showEmpty";

openPage();
const { getCats } = api;

class App extends Component {
  constructor() {
    super();
    this.state = {
      breed: "",
      list: [],
      loading: true,
      error: false,
    };
    this.page = 1;
  }

  setCatsList = async (breed = null, isChangeBreed) => {
    try {
      if (isChangeBreed) {
        await this.resetList(breed);
      }
      const newList = await this.getCatsData();
      if (breed === "") {
        showEmpty();
        return;
      }
      if (isChangeBreed && this.isNotSimilarBreed(breed)) {
        this.updateList(newList);
      } else {
        this.plusList(newList);
      }
      this.nextPage();
      this.setState({ error: false });
    } catch (error) {
      this.catchError(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  async resetList(breed) {
    await this.setState({ list: [], breed: breed });
    this.resetPage();
  }
  plusList(newList = []) {
    const stateList = [...this.state.list];
    const list = stateList.concat(newList);
    this.updateList(list);
  }
  async getCatsData() {
    const data = await getCats(this.state.breed, this.getPage());
    return data;
  }
  isNotSimilarBreed(breed) {
    return this.state.breed !== breed;
  }
  updateList(newList = []) {
    this.setState({ list: newList });
  }
  catchError(error) {
    if (error.message !== "canceled") {
      showError();
    }
    this.setState({ error: true });
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 0;
  }
  getPage() {
    return this.page;
  }

  render() {
    const { loading, error, list, breed } = this.state;
    return (
      <AppSt>
        <Toaster />
        <Title>Cats</Title>
        <SortCats setCatsElements={this.setCatsList} />
        {loading && <Loader />}
        {!error && (
          <CatsList
            list={list}
            setCatsElements={this.setCatsList}
            breed={breed}
          />
        )}
        <GlobalStyles />
      </AppSt>
    );
  }
}

export default App;
