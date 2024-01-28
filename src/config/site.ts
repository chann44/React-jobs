import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "React Jobs",
  description: "An open source Job board for react communiy",
  url: "",
  ogImage: "",
  links: {
    twitter: "",
    github: "",
  },
};

export const authRoutes = {
  login: "/login",
  register: "/register",
} as const;

export const siteRoutes = {
  root: "/",
  hire: "/hire",
  jobs: "/jobs",
  learn: "/learn",
  postResources: "/post-resources",
  postJob: "/jobs/post-job",
  profie: "/profile",
  consultaint: "/counsultaint",
  test: "/test",
  ...authRoutes,
} as const;
