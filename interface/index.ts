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

interface ProjectDetail {
  title: string;
  image: string;
  content: string;
  url?: string;
}

export type { Experience, ExperienceDetail, Expertise, ProjectDetail };
