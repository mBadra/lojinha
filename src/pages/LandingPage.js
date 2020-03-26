import React from "react";
import TopnavComponent from "../components/Header/TopnavComponent";
import TextomeioComponent from "../components/LandingPage/TextomeioComponent";
import FeaturedComponent from "../components/LandingPage/FeaturedComponent";
import PromotionComponent from "../components/PromotionComponent";
import OpinionComponent from "../components/OpinionComponent";

const LandingPage = () => (
  <div>
    <TopnavComponent />
    <TextomeioComponent />
    <FeaturedComponent />
    <PromotionComponent />
    <OpinionComponent />
  </div>
);

export default LandingPage;
