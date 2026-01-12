export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Web Portfolio",
    description:
      "One-page portfolio built with Astro and React, focused on performance, UX and clean architecture.",
    stack: ["Astro", "React", "Tailwind CSS", "TypeScript"],
    image: "/assets/projects/portfolio-preview.jpg", 
    repoUrl: "https://github.com/antoniocarvajal938/my-portfolio",
    status: "completed",
  },
  {
    id: "mobile-app",
    title: "TeamKounter App",
    description:
      "Mobile application currently in development, focused on real-world usability and scalable architecture.",
    stack: ["Kotlin Multiplatform", "React Native"],
    image: "/assets/projects/mobile-app-preview.jpg", 
    repoUrl:"https://github.com/antoniocarvajal938/TeamKouter-App",
    status: "in-progress",
  },
  {
    id: "testing-playground",
    title: "Playwright E2E Testing Project",
    description:
      "Personal project to practice and showcase end-to-end and smoke test automation using Playwright.",
    stack: ["TypeScript","Playwright"],
    image: "/assets/projects/testing-preview.jpg", 
    repoUrl:"https://github.com/antoniocarvajal938/playwright-e2e-testing-project",
    status: "completed",
  },
];
