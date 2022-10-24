import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentSection = styled.section`
  padding: 100px;
  background-color: #fff;
  @media screen and(max-width:1100px) {
    padding: 70px;
  }
`;

export const ContentRow = styled.article<{ reverse?: boolean }>`
  margin: 3rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  background-color: #fff;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TopLine = styled(motion.h6)`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: grey;
`;

export const ContentHeader = styled(motion.h3)`
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const ContentDescription = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ImageWrapper = styled.div<{
  backgroundColor: string;
  imgStart?: string;
}>`
  max-height: 600px;
  position: relative;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0 0 32px 4px #dfdfdf;
  background-image: ${({ backgroundColor }) => backgroundColor || "#fafeff"};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url("./images/hero-pattern-bg.png");
    background-size: 100% auto;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const ContentImage = styled(motion.img)`
  max-width: 100%;
  margin: 0 auto;
  vertical-align: middle;
  object-fit: cover;
`;

export const ContentButton = styled.button<{ backgroundColor: string }>`
  height: 3rem;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 25px;
  border: none;
  background-image: ${({ backgroundColor }) => backgroundColor || "#fafeff"};
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 32px 4px #cfcfcf;
    transition: box-shadow 0.3s ease-in;
  }

  @media screen and (max-width: 968px) {
    max-width: 60%;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;
