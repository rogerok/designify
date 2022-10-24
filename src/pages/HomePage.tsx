import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Clients from "../components/Clients/Clients";
import Content from "../components/Content/Content";
import { heroOne, heroTwo, heroThree, heroFour } from "../data/projectsData";

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Clients />
    <Content data={heroOne} />
    <Content data={heroTwo} />
    <Content data={heroThree} />
    <Content data={heroFour} />
  </>
);

export default HomePage;
