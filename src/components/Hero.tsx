import { storyblokEditable } from "@storyblok/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hero = (params: any) => {
  return (
    <section {...storyblokEditable(params.blok)}>
      <h1>{params.blok.headline}</h1>
    </section>
  );
};
