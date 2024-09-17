"use client";
import { PostList } from "@/components/PostList";
import { ErrorMessage } from "@/components/ErrorMessage";
import { usePosts } from "@/hooks/usePosts";

export default function Home() {
  const { posts, error } = usePosts();
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}
