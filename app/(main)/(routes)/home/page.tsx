
import Intro from "@/app/sections/intro";
import { db } from "@/lib/db";
import { initialUser } from "@/lib/init-user";
import { redirect } from "next/navigation";

export default async function page() {




    return (
        <div>
            <Intro />

        </div>
    );
}
