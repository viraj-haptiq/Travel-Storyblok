// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { StoryblokComponent } from "@storyblok/react";
export const Page = (params: any) => {
  return (
    <main>
      {params.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
