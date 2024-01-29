import { IJob } from "@/types/job";
import { Button } from "./ui/button";
import Image from "next/image";
import { LucideDot } from "lucide-react";

export function JobCard({
  city,
  companyLogo,
  companyName,
  postedOn,
  sallery,
  tags,
  title,
}: IJob) {
  return (
    <div id="job-card" className="w-full p-4 rounded-md">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="h-9 w-9 relative rounded-md">
          <Image
            fill
            className="rounded-md object-cover"
            src={companyLogo}
            alt={`${companyName} logo`}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="font-semibold text-lg">{title}</p>
          <div className="flex items-start gap-0.5 text-base font-light">
            <p>{companyName}</p>
            <LucideDot />
            <p>{city}</p>
            <LucideDot />
            <p>{sallery}</p>
            <LucideDot />
            <p>{postedOn}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <Button variant={"outline"}>Save</Button>
          <Button variant={"secondary"}>Apply</Button>
        </div>
      </div>
      <div className="flex flex-col md:items-center md:flex-row gap-4 text-sm mt-3">
        {tags.map((tag, index) => (
          <p className="bg-green-300 px-2 rounded py-0.5" key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
