import styled from "styled-components";

export const FeaturesSection = styled.section`
  margin: 0 auto;
  padding: 140px;
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  margin: 0 auto;
  padding-top: 2rem;

  &.text {
    background-color: red;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FeatureImageWrapper = styled.div`
  margin: 1rem 0;
  border-radius: 50%;
  padding: 30px;

  &.one {
    background: linear-gradient(130deg, #9cb3ff 0%, #b0ffe9 100%);
  }
  &.two {
    background: linear-gradient(220deg, #e7d1ff 0%, #8383ef 100%);
  }
  &.three {
    background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
  }
  &.four {
    background: linear-gradient(130deg, #ffa8e8 0%, #ffe6e6 100%);
  }
  &.five {
    background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
  }
  &.six {
    background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
  }
`;

export const FeatureName = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1b2025;
`;

export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  font-size: 1.2rem;
  color: #626881;
  text-align: center;
  letter-spacing: 0.5;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
