import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { storyblokApi } from "@/storyblok";

/**
 * Fetches the content for the FAQ page from Storyblok.
 */
async function fetchFaqPage() {
  const { isEnabled } = draftMode();
  const client = storyblokApi();

  const version =
    process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published";

  try {
    const { data } = await client.get(`cdn/stories/faq`, { version });
    return data.story;
  } catch (error) {
    return null;
  }
}

/**
 * The FAQ Page component.
 */
export default async function FaqPage() {
  const story = await fetchFaqPage();

  if (!story) {
    notFound();
  }

  return <StoryblokStory story={story} />;
}
