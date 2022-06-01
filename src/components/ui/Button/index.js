import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
  //padding: 0.8rem 0.2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) => 
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  ${({ size, theme }) => 
    theme.size[size] || theme.size.md}; 

  // PROPS FULL
  ${(props) => 
    props.full && 
    css`
      display: block;
      width: 100%;
    `}
`;

// export component Button
export default Button;