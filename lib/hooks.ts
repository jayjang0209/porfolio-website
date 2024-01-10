"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/types/data/SectionName";

const defaultThreshold = 0.75;
const defaultDelay = 1000;

// hook to set the active section in the context
export function useSectionInView(
  sectionName: SectionName,
  threshold = defaultThreshold
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > defaultDelay) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
