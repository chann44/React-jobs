import { JobCard } from "@/components/job-card";
import { jobResponse } from "../../../../db/jobs";

export function FeaturedJobs() {
  return (
    <section className="container max-w-6xl mx-auto flex flex-col gap-y-8 py-10">
      <h2 className="text-3xl font-semibold">Featured Jobs</h2>
      <div className="flex flex-col gap-y-4">
        {jobResponse.map((jobData, index) => (
          <JobCard key={index} {...jobData} />
        ))}
      </div>
    </section>
  );
}
