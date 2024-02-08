import Link from "next/link";

import { type NavItem } from "@/types";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "./ui/button";
import { siteRoutes } from "@/config/site";
import { Icons } from "./icons";

export const NavLinks: NavItem[] = [
  { href: siteRoutes.jobs, title: "Browse Jobs" },
  { href: siteRoutes.consultaint, title: "Consultaitns" },
  { href: siteRoutes.learn, title: "Learn" },
];

export function MainNav() {
  return (
    <nav className="flex items-center w-full">
      <div className="md:flex gap-5 hidden">
        {NavLinks.map((link, index) => (
          <NavLink key={index} {...link} />
        ))}
      </div>
      <div className="ml-auto space-x-4 hidden md:block">
        <Link
          href={siteRoutes.postJob}
          className={cn(
            buttonVariants({
              variant: "default",
            })
          )}
        >
          Post a Job <Icons.arrowRight />
        </Link>
        <Button variant={"ghost"}>Login</Button>
      </div>
    </nav>
  );
}

export function NavLink({ href, title }: NavItem) {
  return (
    <Link className="text-lg hover:font-medium" href={href}>
      {title}
    </Link>
  );
}
