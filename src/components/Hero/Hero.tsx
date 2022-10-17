import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { Header } from "../../globalStyles";
import {
  HeroSection,
  HeroImage,
  CharacterContainer,
  ImageCharacter,
  HeroContent,
  HeroHeader,
  HeroText,
  ButtonContainer,
  ButtonWrapper,
  ButtonHero,
} from "./HeroStyles";

const Hero = () => {
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };
  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
    animate: {
      scale: 1.5,
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-200px",
  });

  return (
    <HeroSection>
      <HeroImage className="pattern" src="./images/hero-pattern-bg.png" />
      <HeroImage className="guy" src="./images/hero-guy-1.png" />
      <CharacterContainer>
        <ImageCharacter className="one" src="./images/hero-guy-2.png" />
        <ImageCharacter className="two" src="./images/hero-guy-3.png" />
        <ImageCharacter className="three" src="./images/hero-girl.png" />
      </CharacterContainer>
      <HeroContent>
        <HeroHeader>We Are Paperpillar</HeroHeader>
        <HeroText>
          A team of passionate designers and developers from Yogyakarta
        </HeroText>
        <ButtonContainer ref={ref}>
          <ButtonWrapper>
            <ButtonHero className={inView ? "" : "corner"} type="button">
              {inView ? (
                <>Chat with use</>
              ) : (
                <FiMail color="white" fontSize="3rem" />
              )}
            </ButtonHero>
          </ButtonWrapper>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
