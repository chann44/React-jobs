import { Icons } from "./icons";

export function SiteLogo() {
  return (
    <div className="flex items-center gap-2 w-max shrink-0">
      <Icons.logo />
      <p className="text-2xl font-semibold">React Jobs</p>
    </div>
  );
}
