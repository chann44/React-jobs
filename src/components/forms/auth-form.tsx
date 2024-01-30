"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function AuthForm() {
  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={async () => {
          try {
            await signIn("github", {
              callbackUrl: "/",
            });
          } catch (E) {
            console.log(E);
          }
        }}
        variant={"outline"}
      >
        <Icons.gitHub />
        with Github
      </Button>
      <Button
        onClick={() => {
          signOut();
        }}
        variant={"outline"}
      >
        <Icons.gitHub />
        with Linkedin
      </Button>
    </div>
  );
}
