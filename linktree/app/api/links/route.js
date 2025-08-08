import { connectDB } from "@/lib/mongodb";
import Link from "@/models/Link";

// POST - Create new link
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

// GET - Fetch user's links
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
    }

    await connectDB();

    // Find all links for the user, sorted by creation date (newest first)
    const links = await Link.find({ userId }).sort({ createdAt: -1 });

    return new Response(JSON.stringify(links), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// PUT - Update existing link
export async function PUT(req) {
  try {
    const { id, name, url } = await req.json();

    if (!id || !name || !url) {
      return new Response(JSON.stringify({ error: "Missing fields: id, name, and url are required" }), { status: 400 });
    }

    await connectDB();

    // Find and update the link
    const updatedLink = await Link.findByIdAndUpdate(
      id,
      { name, url },
      { new: true, runValidators: true }
    );

    if (!updatedLink) {
      return new Response(JSON.stringify({ error: "Link not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(updatedLink), { status: 200 });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return new Response(JSON.stringify({ error: "Invalid data provided" }), { status: 400 });
    }

    // Handle invalid ObjectId
    if (error.name === 'CastError') {
      return new Response(JSON.stringify({ error: "Invalid link ID" }), { status: 400 });
    }

    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// DELETE - Remove link
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Link ID is required" }), { status: 400 });
    }

    await connectDB();

    // Find and delete the link
    const deletedLink = await Link.findByIdAndDelete(id);

    if (!deletedLink) {
      return new Response(JSON.stringify({ error: "Link not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Link deleted successfully", deletedLink }), { status: 200 });
  } catch (error) {
    // Handle invalid ObjectId
    if (error.name === 'CastError') {
      return new Response(JSON.stringify({ error: "Invalid link ID" }), { status: 400 });
    }

    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
