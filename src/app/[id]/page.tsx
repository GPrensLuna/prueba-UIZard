import type { HackerNewsPost } from "../typescript";

const DetailPostId = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
  ).then((res) => res.json() as Promise<HackerNewsPost>);
  return <iframe className="w-full h-full" src={post.url} title={post.title} />;
};

export default DetailPostId;
