import styled, { css, createGlobalStyle } from "styled-components";

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

const titleDecoration = css`
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -20px;
    height: 2px;
    width: 40px;
    background-color: #ef4b6c;
    transform: translateX(-50%);
  }
`;

export const TitleWithDecoration = styled.h2<{
  large?: boolean;
  decoration?: boolean;
}>`
  position: relative;
  text-align: center;
  font-size: ${({ large }) =>
    large ? "clamp(1.3rem, 13vw, 3.1rem)" : "1.3rem"};
  font-weight: ${({ large }) => (large ? "700" : "500")};
  line-height: 1.06;
  letter-spacing: 1.88px;

  ${({ decoration }) => decoration && titleDecoration}
`;
