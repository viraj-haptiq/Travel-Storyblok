import Link from "next/link";

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
