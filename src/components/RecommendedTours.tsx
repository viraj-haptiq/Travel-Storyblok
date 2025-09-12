// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { RecommendedTour } from "./RecommendedTour";

export const RecommendedTours = (params: any) => {
  return (
    <section>
      <h2>{params.blok.name}</h2>
      {/* {JSON.stringify(params.blok)} */}
      {params.blok.tours.map((tour: any) => (
        <RecommendedTour blok={tour} key={tour.uuid} />
      ))}
    </section>
  );
};
