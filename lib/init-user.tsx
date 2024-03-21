import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";


export const initialUser = async () => {
  const clerkUser = await currentUser();


if (!clerkUser) {
    return redirectToSignIn();
}

// const user = await db.user.findUnique({
//     where: {
//         id: clerkUser.id
//     }
// });

// if (user) {
//     return user;
// } 

  const user = await db.user.create({
    data: {
      userId: clerkUser.id,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`,
      email: clerkUser.emailAddresses[0].emailAddress
    }
  });

  return user;
};
