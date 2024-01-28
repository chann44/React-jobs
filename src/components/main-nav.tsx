import { type NavItem } from "@/types";
import { Button } from "./ui/button";
import { siteRoutes } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";

const NavLinks: NavItem[] = [
  { href: siteRoutes.jobs, title: "Browse Jobs" },
  { href: siteRoutes.consultaint, title: "Consultaitns" },
  { href: siteRoutes.learn, title: "Learn" },
];

export function MainNav() {
  return (
    <nav className="flex items-center w-full">
      <div className="flex gap-5">
        {NavLinks.map((link, index) => (
          <NavLink key={index} {...link} />
        ))}
      </div>
      <div className="ml-auto">
        <Button className="gap-2">
          Post a Job <Icons.arrowRight />
        </Button>
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
