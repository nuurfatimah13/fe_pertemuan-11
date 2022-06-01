import styled from "styled-components";

// Membuat Styled Component Footer
const StyledFooter = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    background-color: #4cc9f0;
    color: darkgoldenrod;
  }

  @media (min-width: 992px) {
    background-color: aqua;
    color: black;
  }
`;

// export Styled Component Footer
export default StyledFooter;