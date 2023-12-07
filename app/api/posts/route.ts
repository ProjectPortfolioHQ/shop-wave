import { posts } from "@/data/Posts";

export async function GET() {
  return Response.json(posts);
}
