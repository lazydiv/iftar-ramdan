
import Intro from "@/app/sections/intro";
import { initialUser } from "@/lib/init-user";
import { currentUser } from "@clerk/nextjs";
import { init } from "next/dist/compiled/webpack/webpack";

export default async function Home() {
 
  return (
    <div>
      <Intro />
      <section>

      </section>
    </div>
  );
}
