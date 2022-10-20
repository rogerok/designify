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
  Heading,
  HeroText,
  ButtonContainer,
  ButtonWrapper,
  HeroButton,
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
        <Heading>We Are Paperpillar</Heading>
        <HeroText>
          A team of passionate designers and developers from Yogyakarta
        </HeroText>
        <ButtonContainer ref={ref}>
          <ButtonWrapper>
            <HeroButton className={inView ? "" : "corner"} type="button">
              {inView ? (
                <>Chat with use</>
              ) : (
                <FiMail color="white" fontSize="3rem" />
              )}
            </HeroButton>
          </ButtonWrapper>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

/* import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
} from "./HeroStyles";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };

  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-200px",
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <HeroSection id="hero">
      <HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
      <HeroImage className="guy" src="./images/hero-guy-1.png" />
      <CharacterContainer>
        <ImageCharacter
          dragConstraints={dragConstraints}
          className="one"
          src="./images/image 1.png"
        />
        <ImageCharacter
          dragConstraints={dragConstraints}
          className="two"
          src="./images/image 2.png"
        />
        <ImageCharacter
          variants={variants}
          whileHover="hover"
          drag
          dragConstraints={dragConstraints}
          className="three"
          src="./images/image 3.png"
        />
      </CharacterContainer>
      <HeroContent>
        <Heading>We Are Designify</Heading>
        <HeroText>
          A team of passionate designer and developers ready to provide unique
          and outstanding products for you!
        </HeroText>
        ]{" "}
        <ButtonContainer ref={ref}>
          <ButtonWrapper>
            <HeroButton className={inView ? "" : "corner"} type="button">
              {inView ? (
                <>Chat with use</>
              ) : (
                <FiMail color="white" fontSize="3rem" />
              )}
            </HeroButton>
          </ButtonWrapper>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
 */
