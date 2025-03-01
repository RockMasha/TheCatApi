import { Component } from "react";
import { BtnMore, List } from "./CatsList.styled";
import CatCard from "../CatCard/CatCard";
import { BarLoader } from "react-spinners";
import colors from "../../constans/colors";

let isFirstRender = true;

class CatsList extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
    };
  }

  setCatsList = async () => {
    if (this.state.loader) {
      return;
    }
    this.setState({ loader: true });
    await this.props.setCatsElements();
    this.setState({ loader: false });
  };

  render() {
    const { loader } = this.state;
    const { list } = this.props;

    return (
      <section>
        <List>
          {list.map((data, index) => (
            <CatCard data={data} key={"catCard" + index} />
          ))}
        </List>
        {list.length === 0 || (
          <BtnMore onClick={this.setCatsList}>
            MORE CATS!
            {loader && <BarLoader color={colors.pink} height="5px" />}
          </BtnMore>
        )}
      </section>
    );
  }

  componentDidMount = async () => {
    if (isFirstRender) {
      isFirstRender = false;
      await this.setCatsList();
    }
  };
}

export default CatsList;
