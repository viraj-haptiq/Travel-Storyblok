// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Feature = (params: any) => {
  return (
    <div>
      <h2>{params.blok.headline}</h2>
      <p>{params.blok.content}</p>
    </div>
  );
};
