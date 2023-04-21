import Link from "next/link";
import { PageTitle } from "./components/page-title";

export default function Home() {
  return (
    <header className="relative grid place-content-center h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://d26if1huzogbvq.cloudfront.net/episode-1-poster.jpg"
        className="fixed w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://d26if1huzogbvq.cloudfront.net/episode-1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col gap-4 items-center text-white p-10 bg-slate-800 bg-opacity-50">
        <PageTitle>Talis Blog</PageTitle>
        <p>Alles über unsere Segel-Reise auf der Ostsee</p>
        <p>In Kürze mehr :)</p>
        <ol className="list-disc">
          <li>
            <Link href="/post/1">Episode 1</Link>
          </li>
        </ol>
      </div>
    </header>
  );
}
