"use client";
import { Post, posts } from "../../data/Posts";
import PostItem from "./components/PostItem";

const PostPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {posts?.map((item: Post, index) => (
        <PostItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default PostPage;
