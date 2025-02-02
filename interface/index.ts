interface ExperienceDetail {
  date: string;
  title: string;
  subtitle: string;
}

interface Experience {
  icon: Object;
  entities: Array<ExperienceDetail>;
}

interface Expertise {
  icon: Object;
  title: string;
}

export type { Experience, ExperienceDetail, Expertise };
