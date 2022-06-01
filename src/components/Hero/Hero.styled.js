import styled from "styled-components";

const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    margin: 2rem auto;
  }
  
  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;

// Membuat Styled Component Hero
const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    .hero__left {
      padding: 2.7rem;
      flex-basis: 50%;
    }

    .hero__right {
      flex-basis: 50%;
    }

    h3 {
      color: cadetblue;
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .hero__left {
      flex-basis: 40%;
    }
  }
`;

// export Styled Component Hero
export default StyledHero;
export {Container};