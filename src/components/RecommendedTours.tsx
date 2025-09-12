import { storyblokEditable } from "@storyblok/react";
import { RecommendedTour } from "./RecommendedTour";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RecommendedTours = (params: any) => {
  return (
    <section {...storyblokEditable(params.blok)}>
      <h2>{params.blok.name}</h2>
      {/* {JSON.stringify(params.blok)} */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {params.blok.tours.map((tour: any) => (
        <RecommendedTour blok={tour} key={tour.uuid} />
      ))}
    </section>
  );
};
