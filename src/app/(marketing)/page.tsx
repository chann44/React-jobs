import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { FeaturedJobs } from "./components/featuredJobs";
import { FeaturedConsultaint } from "@/components/featured-consultaint";

const prefix = "/clients/";
const postfix = ".svg";

const clients = [
  `${prefix}netflix${postfix}`,
  `${prefix}discord${postfix}`,
  `${prefix}pinterest${postfix}`,
  `${prefix}vercel${postfix}`,
  `${prefix}uber${postfix}`,
];

export default function Home() {
  return (
    <main>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold ">
            The #1 Job Board for <span className="text-primary">React</span>{" "}
            Developers
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl md:text-2xl sm:leading-8 font-medium">
            Find companies looking to hire React developers or post a job if you
            are hiring React developers.
          </p>
        </div>
      </section>
      <div className="bg-secondary">
        <section
          id="clients"
          className="container flex flex-col gap-10 md:flex-row md:gap-20 items-center py-8 sm:py-12 md:py-32 max-w-6xl mx-auto"
        >
          <h2 className="text-lg md:text-2xl">Truted by:</h2>
          <div className="grid grid-cols-5 gap-5 items-center">
            {clients.map((img, index) => (
              <div key={index} className="relative h-12 w-12 md:h-20 md:w-32">
                <Image
                  fill
                  className="object-contain"
                  src={img}
                  alt="client logo"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <FeaturedJobs />
      <section id="features" className="space-y-6 bg-secondary py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text text-2xl leading-[1.1] sm:text-3xl md:text-6xl">
            Hire React developers
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Hire professional React developers. Post your opening at React Jobs
            and get tech filtered qualified candidates. Let us help you to find
            the best talent matches for your openings and make it reach
            thousands of React developers!
          </p>
        </div>
      </section>
      <FeaturedConsultaint />
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-outfit font-semibold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg md:text-2xl sm:leading-7 font-medium">
            React Jobs is open source and powered by open source software.{" "}
            <br /> The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
