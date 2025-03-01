import styled from "styled-components";
import colors from "../../../constans/colors";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.opacity};
  z-index: 100;
`;

export const ModalStyled = styled.div`
  position: relative;
  padding: 40px;
  background-color: ${colors.white};
  border-radius: 15px;
`;
