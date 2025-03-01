import { Field, Form } from "formik";
import styled from "styled-components";
import colors from "../../constans/colors";

export const SortSection = styled.section`
  padding-bottom: 40px;
`;

export const SortForm = styled(Form)`
  display: block;
`;

export const SortInput = styled(Field)`
  width: 300px;
  padding-left: 4px;
  font-size: 20px;
  border: 1px solid transparent;
  border-bottom: 2.5px solid ${colors.black};
  transition: border-bottom 0.5s, border-radius 0.5s;
  &:focus {
    border-bottom: 2.5px solid ${colors.blue};
    border-radius: 0 0 15px 0;
    outline: 1px solid transparent;
  }
`;
