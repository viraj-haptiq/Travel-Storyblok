import { storyblokEditable } from "@storyblok/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Testimonial = (params: any) => {
  return (
    <div {...storyblokEditable(params.blok)}>
      <h2>{params.blok.comment}</h2>
      <p>{params.blok.name}</p>
    </div>
  );
};
