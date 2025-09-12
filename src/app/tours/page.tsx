import { RecommendedTour } from "@/components/RecommendedTour";
import { storyblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const fetchToursPage = async () => {
  const client = storyblokApi();
  const response = await client.getStory(`tours`, {
    version: "draft",
  });
  return response.data.story;
};
const fetchAllTours = async () => {
  const client = storyblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: "draft",
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
