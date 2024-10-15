// import { Post } from "@/lib/models";
// import { connectToDb } from "@/lib/utils";
// import { NextResponse } from "next/server";

// export const GET = async (request) => {
//   try {
//     await connectToDb();
//     const posts = await Post.find();
//     return NextResponse.json(posts);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch posts!");
//   }
// };

import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // Prevent database connection during the build phase
  if (process.env.NEXT_PHASE === "phase-production-build") {
    // Return an empty response or a mock response if needed
    return NextResponse.json({ message: "Skipping database fetch during build." });
  }

  try {
    await connectToDb(); // Only connects during runtime, not during the build
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Failed to fetch posts!" }, { status: 500 });
  }
};