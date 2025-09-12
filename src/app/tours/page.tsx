import { RecommendedTour } from "@/components/RecommendedTour";
import { storyblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchToursPage = async () => {
  const { isEnabled } = await draftMode();
  const client = storyblokApi();
  const response = await client.getStory(`tours`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};
const fetchAllTours = async () => {
  const { isEnabled } = await draftMode();

  const client = storyblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />;
      {tours.map((tour) => (
        <RecommendedTour blok={tour} key={tour.uuid} />
      ))}
    </div>
  );
};
export default ToursPage;
