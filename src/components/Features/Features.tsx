import React from "react";
import { featuresData } from "../../data/featuresData";
import { Container, TitleWithDecoration } from "../../globalStyles";
import {
  FeaturesSection,
  FeaturesWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureText,
} from "./FeaturesStyles";

const Features = () => (
  <FeaturesSection>
    <Container>
      <TitleWithDecoration large decoration>
        What We Do
      </TitleWithDecoration>
      <FeaturesWrapper>
        {featuresData.map((feature) => (
          <FeatureColumn key={feature.name}>
            <FeatureImageWrapper className={feature.imgClass}>
              {feature.icon}
            </FeatureImageWrapper>
            <FeatureName>{feature.name}</FeatureName>
            <FeatureText>{feature.description}</FeatureText>
          </FeatureColumn>
        ))}
      </FeaturesWrapper>
    </Container>
  </FeaturesSection>
);

export default Features;
