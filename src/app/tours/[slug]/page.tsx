// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { storyblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const fetchTourPage = async (slug: string) => {
  const client = storyblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};
const TourPage = async (props: any) => {
  const story = await fetchTourPage(props.params.slug);
  return <StoryblokStory story={story} />;
};
export default TourPage;
