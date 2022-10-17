import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "../../globalStyles";

export const HeroSection = styled(Section)`
  position: relative;
  z-index: 11;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 640px;
  max-width: 100%;
  background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
  background-size: cover;
  background-attachment: fixed;

  @media screen and (min-width: 768px) {
    height: 592px;
  }
  @media screen and (min-width: 992px) {
    height: 710px;
  }
  @media screen and (min-width: 1200px) {
    height: 820px;
  }
  @media screen and (min-width: 2000px) {
    height: 1200px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  left: 0;
  z-index: 10;
  width: 100%;
  object-fit: cover;

  &.pattern {
    height: 100%;
    max-height: 100%;
    top: 0;
  }

  &.guy {
    bottom: 0;
    right: 5rem;
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const ImageCharacter = styled(motion.img)`
  z-index: 11;
  width: 100%;
  position: absolute;
  width: clamp(90px, 15vw, 200px);
  left: auto;
  &.one {
    top: 4rem;
    right: 200px;
    width: clamp(170px, 15vw, 230px);
    @media screen and (max-width: 768px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
  &.two {
    bottom: 4rem;
    right: 200px;
    z-index: 100;
    @media screen and (max-width: 768px) {
      right: 50px;
    }
  }
  &.three {
    top: 3rem;
    left: 150px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: clamp(2.8rem, 6vw, 6.7rem);
  font-weight: 700;
  text-align: center;
`;

export const HeroText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.3rem);
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 170px;
`;

export const ButtonWrapper = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

export const ButtonHero = styled(motion.button)`
  position: absolute;
  width: 250px;
  margin: 0 auto;
  padding: 20px;
  bottom: calc(100vh - 100px);
  right: 50%;
  transform: translate(50%);
  font-weight: 700;
  font-size: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 25px;
  border: none;
  background-color: white;
  color: #5238b1;
  cursor: pointer;
  transition: all 0.4s ease-in;

  &.corner {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 3rem;
    right: 3rem;
    width: 64px;
    height: 64px;
    background-color: #ef4b6c;
  }
  &:hover {
    box-shadow: 0 0 9px 9px #5238b1;
    transition: box-shadow 0.3s ease-in;
  }
`;
