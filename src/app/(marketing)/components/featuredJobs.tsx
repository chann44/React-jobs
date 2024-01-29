import { JobCard } from "@/components/job-card";
import { jobResponse } from "../../../../db/jobs";
import Link from "next/link";
import { siteRoutes } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function FeaturedJobs() {
  return (
    <section className="container flex flex-col gap-y-8 py-10">
      <h2 className="text-3xl font-semibold">Featured Jobs</h2>
      <div className="flex flex-col gap-y-4">
        {jobResponse.map((jobData, index) => (
          <JobCard key={index} {...jobData} />
        ))}
      </div>
      <Link
        href={siteRoutes.jobs}
        className={cn(
          "mx-auto px-10",
          buttonVariants({
            variant: "outline",
          })
        )}
      >
        View all jobs <Icons.arrowRight />
      </Link>
    </section>
  );
}
