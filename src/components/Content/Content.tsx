import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

import { ProjectDataType } from "../../data/projectsData";
import { Container, TitleWithDecoration } from "../../globalStyles";
import {
  ContentSection,
  ContentRow,
  TextWrapper,
  TopLine,
  ContentColumn,
  ContentHeader,
  ContentDescription,
  ContentButton,
  ContentImage,
  ImageWrapper,
} from "./ContentStyles";

type ContentType = {
  data: ProjectDataType;
};

const Content: React.FC<ContentType> = ({ data }) => {
  const {
    backgroundColor,
    buttonLabel,
    description,
    headline,
    img,
    imgStart,
    start,
    topLine,
    id,
    linkTo,
    reverse,
  } = data;

  const initial = { opacity: 0, y: 30 };
  const transition = { delay: 0.3, duration: 0.6 };

  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView)
      animation.start({
        opacity: 1,
        y: 0,
      });
  }, [inView, animation]);

  return (
    <ContentSection ref={ref}>
      <TitleWithDecoration large decoration>
        Our Projects
      </TitleWithDecoration>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <ContentHeader
                initial={initial}
                transition={{ delay: 0.3, duration: 0.4 }}
                animate={animation}
              >
                {headline}
              </ContentHeader>
              <ContentDescription
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                {description}
              </ContentDescription>
            </TextWrapper>
            <ContentButton type="button" backgroundColor={backgroundColor}>
              {buttonLabel}
            </ContentButton>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={transition}
            animate={animation}
          >
            <Tilt>
              <ImageWrapper
                backgroundColor={backgroundColor}
                imgStart={imgStart}
              >
                <ContentImage
                  src={img}
                  alt={topLine.text}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </ImageWrapper>
            </Tilt>
          </ContentColumn>
        </ContentRow>
      </Container>
    </ContentSection>
  );
};

export default Content;
