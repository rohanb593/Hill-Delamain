"use client";

import { useEffect } from "react";

export function useScrollReveal(pathname: string) {
  useEffect(() => {
    // Small delay so the new page's DOM is fully painted before observing
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);
}
