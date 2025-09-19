import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Tour } from "./components/Tour";
import { Page } from "./components/Page";
import { Hero } from "./components/Hero";
import { Grid } from "./components/Grid";
import { Feature } from "./components/Feature";
import { Testimonial } from "./components/Testimonial";
import { RecommendedTours } from "./components/RecommendedTours";
import { Faq } from "./components/Faq";

export const storyblokApi = storyblokInit({
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
    faq_section: Faq,
  },
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  enableFallbackComponent: true,
});
