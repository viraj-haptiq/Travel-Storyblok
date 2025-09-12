import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Grid = (params: any) => {
  return (
    <section {...storyblokEditable(params.blok)}>
      <h2>{params.blok.headline}</h2>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {params.blok.items.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
};
