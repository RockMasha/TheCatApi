import { BtnMore, List } from "./CatsList.styled";
import CatCard from "../CatCard/CatCard";
import { BarLoader } from "react-spinners";
import colors from "../../constans/colors";
import { useEffect, useState } from "react";

let isFirstRender = true;

function CatsList(props) {
  const [loader, setLoader] = useState(false);

  const setCatsList = async () => {
    if (loader) {
      return;
    }
    setLoader(true);
    await props.setCatsElements();
    setLoader(false);
  };

  useEffect(() => {
    startCats();
  }, []);
  const startCats = async () => {
    if (isFirstRender) {
      isFirstRender = false;
      await setCatsList();
    }
  };

  return (
    <section>
      <List>
        {props.list.map((data, index) => (
          <CatCard data={data} key={"catCard" + index} />
        ))}
      </List>
      {props.list.length === 0 || (
        <BtnMore onClick={setCatsList}>
          MORE CATS!
          {loader && <BarLoader color={colors.pink} height="5px" />}
        </BtnMore>
      )}
    </section>
  );
}

export default CatsList;
