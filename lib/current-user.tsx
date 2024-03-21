import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";


export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null
  }
  

  const user = await db.user.findFirst({
    where: {
      userId
    }
  });

  return user;
}