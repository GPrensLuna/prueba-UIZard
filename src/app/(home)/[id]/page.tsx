import { api } from "@/api";

const DetailPostId = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const post = await api.fetchPostById(Number(id));
  if (!post?.url) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Error loading post or URL not available.</p>
      </div>
    );
  }

  return <iframe className="w-full h-full" src={post.url} title={post.title} />;
};

export default DetailPostId;
