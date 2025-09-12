import { storyblokEditable } from "@storyblok/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Feature = (params: any) => {
  return (
    <div {...storyblokEditable(params.blok)}>
      <h2>{params.blok.headline}</h2>
      <p>{params.blok.content}</p>
    </div>
  );
};
