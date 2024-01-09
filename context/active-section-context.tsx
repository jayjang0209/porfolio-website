"use client";

import React, { useState, useContext, createContext } from "react";
import type { SectionName } from "@/types/data/SectionName";
import type { ActiveSectionContextProviderProps } from "@/types/context/ActiveSectionContextProviderProps";
import type { ActiveSectionContextType } from "@/types/context/ActiveSectionContextType";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
export const defaultActiveSection = "Home";

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] =
    useState<SectionName>(defaultActiveSection);
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
