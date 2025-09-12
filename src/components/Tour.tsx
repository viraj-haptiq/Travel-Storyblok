import { storyblokEditable } from "@storyblok/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tour = (props: any) => {
  return (
    <main {...storyblokEditable(props.blok)}>
      <h1>{props.blok.name}</h1>
    </main>
  );
};

export { Tour };
