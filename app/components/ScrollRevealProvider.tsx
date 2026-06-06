"use client";

import { usePathname } from "next/navigation";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useScrollReveal(pathname);
  return <>{children}</>;
}
