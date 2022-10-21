import styled from "styled-components";

export const ClientsSection = styled.section`
  margin: 0 auto;
  padding: 140px;

  @media screen and (max-width: 768px) {
    padding: 70px;
  }
`;

export const ClientsTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 1.88px;
`;

export const ClientsSubtitle = styled.h3`
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.5px;

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ClientsRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ClientsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;

  @media screen and (max-width: 1100px) {
    div:not(:first-child) {
      display: none;
    }
  }
`;

export const ClientImage = styled.img`
  width: 90px;

  @media screen and (max-width: 1100px) {
    width: clamp(80px, 40vw, 400px);
    height: 60%;
  }
`;

export const ClientWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  margin: 0.4rem;
  padding: 10px 40px;
  border-radius: 1rem;
  box-shadow: 0 0 32px 8px #dfdfdf;
  background-color: #fafeff;
`;
