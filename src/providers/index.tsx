import { type ReactNode } from "react";

import { AuthProviders } from "@/providers/auth-providers";
import { ThemeProvider } from "@/providers/theme-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProviders>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AuthProviders>
  );
}
