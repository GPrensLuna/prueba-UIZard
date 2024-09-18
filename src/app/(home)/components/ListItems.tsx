import { api } from "@/api";
import type { HackerNewsPost } from "../typescript";

export const ListItems = async ({
  id,
}: {
  id: HackerNewsPost["id"];
}): Promise<JSX.Element> => {
  const post = await api.fetchPostById(id);

  if (!post) {
    return (
      <li className="grid h-16 gap-2">
        <output className="text-red-500">Error loading post</output>
      </li>
    );
  }

  return (
    <div className="grid h-16 gap-2 w-full">
      <h3 className="font-semibold text-sm truncate">
        {post.title || post.by}
      </h3>
      <div className=" justify-between items-center opacity-70 flex">
        <p className="text-sm text-gray-600">{post.by}</p>
        {post.url ? (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Visit website
          </a>
        ) : (
          <p className="text-sm text-gray-400">No URL available</p>
        )}
      </div>
    </div>
  );
};
