import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Match all routes except static files and Next.js internals
export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/"
  ],
};
