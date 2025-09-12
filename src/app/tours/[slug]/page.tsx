import { storyblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchTourPage = async (slug: string) => {
  const { isEnabled } = await draftMode();
  const client = storyblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TourPage = async (props: any) => {
  const story = await fetchTourPage(props.params.slug);
  return <StoryblokStory story={story} />;
};
export default TourPage;
