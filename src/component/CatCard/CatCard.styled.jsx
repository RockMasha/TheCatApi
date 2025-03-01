import styled from "styled-components";
import colors from "../../constans/colors";

export const Li = styled.li`
  width: 226px;
  padding: 10px;
  border: 3px solid ${colors.black};
  border-radius: 10px;
`;
export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
export const Name = styled.h3`
  margin-bottom: 7px;
  font-size: 20px;
  white-space: break-spaces;
`;
export const Origin = styled.p`
  margin-bottom: 7px;
  color: ${colors.grey};
  font-size: 16px;
`;
export const PropList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const Prop = styled.li`
  font-size: 14px;
`;
