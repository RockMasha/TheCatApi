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
import { useEffect, useState } from "react";

openPage();
const { getCats } = api;

function App() {
  const [breed, setBreed] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const setCatsList = async (newBreed = null, isChangeBreed) => {
    try {
      if (isChangeBreed) {
        resetList(newBreed);
      }
      const newList = await getCatsData(newBreed);
      if (newBreed === "") {
        showEmpty();
        return;
      }
      if (isChangeBreed && isNotSimilarBreed(newBreed)) {
        setList(newList);
      } else {
        plusList(newList);
      }
      nextPage();
      setError(false);
    } catch (error) {
      catchError(error);
    } finally {
      setLoading(false);
    }
  };

  const resetList = async (newBreed) => {
    setList([]);
    setBreed(newBreed);
    setPage(0);
  };

  const plusList = (newList = []) => {
    const stateList = [...list];
    const updateList = stateList.concat(newList);
    setList(updateList);
  };
  const getCatsData = async (newBreed) => {
    const data = await getCats(newBreed, page);
    return data;
  };
  const isNotSimilarBreed = (breedNew) => {
    return breed !== breedNew;
  };
  const catchError = (error) => {
    if (error.message !== "canceled") {
      showError();
    }
    setError(true);
  };

  const nextPage = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  return (
    <AppSt>
      <Toaster />
      <Title>Cats</Title>
      <SortCats setCatsElements={setCatsList} />
      {loading && <Loader />}
      {!error && <CatsList list={list} setCatsElements={setCatsList} />}
      <GlobalStyles />
    </AppSt>
  );
}

export default App;
