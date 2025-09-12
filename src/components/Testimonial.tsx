// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const Testimonial = (params: any) => {
  return (
    <div>
      <h2>{params.blok.comment}</h2>
      <p>{params.blok.name}</p>
    </div>
  );
};
