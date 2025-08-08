import { connectDB } from "@/lib/mongodb";
import Link from "@/models/Link";

export async function POST(req) {
  try {
    const { name, url, userId } = await req.json();

    if (!name || !url || !userId) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    await connectDB();

    const newLink = await Link.create({ name, url, userId });

    return new Response(JSON.stringify(newLink), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
