import type { HackerNewsPost } from "./app/(home)/typescript";

export const api = {
  fetchTopPosts: async (): Promise<number[]> => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`,
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch top posts: ${response.status}`);
      }

      const data = await response.json();

      if (
        Array.isArray(data) &&
        data.every((item) => typeof item === "number")
      ) {
        return data;
      } else {
        throw new Error("Response is not an array of numbers");
      }
    } catch {
      return [];
    }
  },

  fetchPostById: async (id: number): Promise<HackerNewsPost | null> => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch post with ID ${id}: ${response.status}`,
        );
      }

      const data = await response.json();

      if (
        data &&
        typeof data.id === "number" &&
        typeof data.by === "string" &&
        typeof data.title === "string"
      ) {
        return data as HackerNewsPost;
      } else {
        throw new Error(`Post data is invalid for ID ${id}`);
      }
    } catch {
      return null;
    }
  },
};
