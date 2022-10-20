import React from "react";
import { featuresData } from "../../data/featuresData";
import {
  FeaturesSection,
  FeatureTitle,
  FeaturesWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureText,
} from "./FeaturesStyles";

const Features = () => (
  <FeaturesSection>
    <FeatureTitle>What We Do</FeatureTitle>
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
  </FeaturesSection>
);

export default Features;
