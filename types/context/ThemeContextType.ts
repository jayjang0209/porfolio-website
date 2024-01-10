import type { Theme } from "@/types/context/ThemeType";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};