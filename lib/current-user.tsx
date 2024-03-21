import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  

  const user = await db.user.findUnique({
    where: {
      userId
    }
  });

  return user;
}