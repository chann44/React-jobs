import { siteRoutes } from "@/config/site";
import { consultantsResponse } from "../../db/agency";
import { ConsultaintCard } from "./consultaint-card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export function FeaturedConsultaint() {
  return (
    <section className="container mx-auto space-y-8 py-8 md:py-20 ">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-semibold">
          Outsource your development workforce
        </h2>
        <p className="text-lg">
          Have you considered outsourcing your project? Check our list of
          experienced React js Agencies and Freelancers.
        </p>
      </div>
      <div className="w-full grid md:grid-cols-3 gap-5">
        {consultantsResponse.map((agency, index) => (
          <ConsultaintCard key={index} {...agency} />
        ))}
      </div>
      <div className="w-max mx-auto">
        <Link
          href={siteRoutes.consultaint}
          className={cn(
            "mx-auto px-10",
            buttonVariants({
              variant: "outline",
            })
          )}
        >
          View all React Consultant <Icons.arrowRight />
        </Link>
      </div>
    </section>
  );
}
