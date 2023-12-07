"use client";

import { Post, posts } from "@/data/Posts";
import { formatDurationToNowFrom } from "@/utils/DateUtils";
import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {posts?.map((item: Post, index) => (
        <div
          className={`flex flex-col md:flex-row gap-4 ${index !== 0 && "border-t pt-4"
            }`}
          key={item.id}
        >
          <Image
            src={`/${item.thumbnail}`}
            alt="Post thumbnail"
            width="250"
            height="150"
          />

          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">
              <Link href={`/posts/${item.slug}`}>{item.title}</Link>
            </h2>
            <p>{formatDurationToNowFrom(item.createdAt)} ago</p>
          </div>
        </div>
      ))}
    </div>
  );
}
