import { cn } from "@/lib/utils";
import { Iconsultaint } from "@/types/consultaint";
import Image from "next/image";

export function ConsultaintCard({
  description,
  logo,
  name,
  tags,
  type,
}: Iconsultaint) {
  return (
    <div className="p-4 hover:border flex flex-col gap-y-4 bg-muted rounded-xl cursor-pointer">
      <p
        className={cn(
          "text-sm px-3 py-0.5 rounded-sm w-max ",
          type == "agency"
            ? "bg-green-300 text-green-950"
            : "bg-blue-300 text-blue-950"
        )}
      >
        {type}
      </p>
      <div className="flex gap-5">
        <div className="h-9 w-9 relative rounded-md">
          <Image
            fill
            className="rounded-md object-cover"
            src={logo}
            alt={`${name} logo`}
          />
        </div>
        <p className="text-lg font-medium">{name}</p>
      </div>
      <p>{description}</p>
      <div className="flex flex-wrap md:items-center gap-4 text-sm mt-3">
        {tags.map((tag, index) => (
          <p className="bg-muted px-2 rounded py-0.5" key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
