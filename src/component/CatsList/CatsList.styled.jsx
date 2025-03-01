import styled from "styled-components";
import colors from "../../constans/colors";

export const List = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const BtnMore = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;
  margin: 0 auto;
  font-size: 24px;
  color: ${colors.white};
  background-color: ${colors.black};
  border: 1px solid transparent;
  border-radius: 5px;
`;
