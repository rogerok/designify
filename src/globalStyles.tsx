import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Monteserat' sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Section = styled.section`
  color: #fff;
  padding: 160px 0;
`;

export const Header = styled.h2<{ lightText?: boolean }>`
  margin-bottom: 1.4rem;
  font-size: 3rem;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "1c2237")};
`;
