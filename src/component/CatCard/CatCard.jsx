import { Img, Li, Name, Origin, Prop, PropList } from "./CatCard.styled";

function CatCard(props) {
    const { data } = props;
    const { url, breeds } = data;
    const { name, origin, weight, life_span, affection_level } = breeds[0];

    return (
      <Li>
        <Img src={url} />
        <div>
          <Name>{name}</Name>
          <Origin>{origin}</Origin>
          <PropList>
            <Prop key="cat_weight">
              <p>Weight: {weight.metric} kg</p>
            </Prop>
            <Prop key="life">
              <p>Life: {life_span} years</p>{" "}
            </Prop>
            <Prop key="affection">
              <p>Affection: {affection_level}/5</p>{" "}
            </Prop>
          </PropList>
        </div>
      </Li>
    );
}

export default CatCard;
