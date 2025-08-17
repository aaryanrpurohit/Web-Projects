import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "@/models/Link";
import connectDB from "@/lib/mongoose";

export async function GET() {
  await connectDB();
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const links = await Link.find({ userId }).sort({ createdAt: -1 });
  return new Response(JSON.stringify(links), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { name, url } = await req.json();

  // Fetch username from Clerk
  const user = await currentUser();
  const username = user?.username || user?.primaryEmailAddress?.emailAddress || "Unknown";

  const link = await Link.create({
    userId,
    username,
    name,
    url
  });

  return new Response(JSON.stringify(link), { status: 201 });
}
