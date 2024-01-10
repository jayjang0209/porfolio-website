type ExperienceDetails = {
  skills: readonly string[];
  tasks: readonly string[];
};

export type ExperienceData = {
  type: string;
  title: string;
  place: string;
  description: string;
  details: ExperienceDetails | null;
  icon: React.ReactNode;
  date: string;
};