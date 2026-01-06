import {
  SiAndroid, SiKotlin, SiOpenjdk, SiJavascript, SiTypescript,
  SiReact, SiTailwindcss, SiHtml5, SiMysql,
  SiGit, SiCypress, SiPostman, SiCucumber, SiTestinglibrary,
  SiDocker, SiGitlab, SiGithub, SiJira, SiSlack,
  SiFirebase, SiGradle, SiAstro, SiJson, SiGnubash,
  SiGithubactions,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbSdk } from "react-icons/tb";
import { FaClipboardList, FaSearch, FaMobileAlt } from "react-icons/fa";

export interface TechItem {
  name: string;
  icon: React.ElementType;
}

export interface TechCategory {
  title: string;
  priority: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Quality Assurance & Testing",
    priority: "primary", // 👈 ORANGE - Tu especialidad principal
    items: [
      { name: "Postman", icon: SiPostman },
      { name: "Cypress", icon: SiCypress },
      { name: "Cucumber", icon: SiCucumber },
      { name: "Playwright", icon: SiTestinglibrary },
      { name: "TestRail", icon: FaClipboardList },
      { name: "Manual Testing", icon: FaSearch },
      { name: "JSON", icon: SiJson },
      { name: "API Validation", icon: TbApi },
    ],
  },
  {
    title: "Mobile Development",
    priority: "secondary", // 👈 BLUE - Segunda especialidad
    items: [
      { name: "Android Studio", icon: SiAndroid },
      { name: "Kotlin + Compose", icon: SiKotlin },
      { name: "Java", icon: SiOpenjdk },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "MVVM / Clean", icon: FaMobileAlt },
      { name: "Retrofit / Coil", icon: TbSdk },
      { name: "Gradle", icon: SiGradle },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Web Development",
    priority: "tertiary", // 👈 PURPLE - Habilidad complementaria
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Astro", icon: SiAstro },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5 / CSS3", icon: SiHtml5 },
      { name: "SQL / MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Scrum",
    priority: "tertiary", // 👈 PURPLE - Herramientas de trabajo
    items: [
      { name: "Git / GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "GitLab CI/CD", icon: SiGitlab },
      { name: "Docker", icon: SiDocker },
      { name: "Scrum Agile", icon: FaClipboardList },
      { name: "Jira", icon: SiJira },
      { name: "Slack", icon: SiSlack },
      { name: "Bash / Terminal", icon: SiGnubash },
    ],
  },
];