import { AuthForm } from "./forms/auth-form";
import { MainNav } from "./main-nav";
import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  return (
    <header className="container w-full gap-5 h-14 flex items-center">
      <SiteLogo />
      <MainNav />
      <AuthForm />
    </header>
  );
}
