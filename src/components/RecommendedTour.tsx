import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RecommendedTour = (props: any) => {
  console.log(props);
  return (
    <div>
      <Link href={`${props.blok.full_slug}`}>
        <h3 className="font-bold">{props?.blok?.content?.introduction}</h3>
      </Link>
    </div>
  );
};
