import { PageTitle } from "@/app/components/page-title";

const Post = () => {
  return (
    <main className="max-w-3xl mx-auto">
      <PageTitle>Episode 1</PageTitle>
      <video
        controls
        poster="https://d26if1huzogbvq.cloudfront.net/episode-1-poster.jpg"
        className="mt-4"
      >
        <source
          src="https://d26if1huzogbvq.cloudfront.net/episode-1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </main>
  );
};

export default Post;
