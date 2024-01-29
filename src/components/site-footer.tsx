import { siteRoutes } from "@/config/site";
import { NavLink, NavLinks } from "./main-nav";
import Link from "next/link";
import { SiteLogo } from "./site-logo";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <>
      <footer className="container grid gap-5 md:grid-cols-3 py-5">
        <Link href={siteRoutes.root}>
          <SiteLogo />
        </Link>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold">Links</h2>
          {NavLinks.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <div>
            <a href="">
              <Button variant={"ghost"} size={"icon"}>
                <Icons.twitter />
              </Button>
            </a>
            <a href="">
              <Button variant={"ghost"} size={"icon"}>
                <Icons.gitHub className="h-5" />
              </Button>
            </a>
          </div>
        </div>
      </footer>
      <p className="p-4 text-center bg-secondary">
        MIT Licensed | Copyright © 2024-PRESENT Vikash Manda
      </p>
    </>
  );
}
