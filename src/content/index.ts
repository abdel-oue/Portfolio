import enSite from "./en/site.json";
import enHero from "./en/hero.json";
import enAbout from "./en/about.json";
import enProjects from "./en/projects.json";
import enExperience from "./en/experience.json";
import enSkills from "./en/skills.json";
import enEducation from "./en/education.json";
import enContact from "./en/contact.json";

import frSite from "./fr/site.json";
import frHero from "./fr/hero.json";
import frAbout from "./fr/about.json";
import frProjects from "./fr/projects.json";
import frExperience from "./fr/experience.json";
import frSkills from "./fr/skills.json";
import frEducation from "./fr/education.json";
import frContact from "./fr/contact.json";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const content = {
  en: {
    site: enSite,
    hero: enHero,
    about: enAbout,
    projects: enProjects,
    experience: enExperience,
    skills: enSkills,
    education: enEducation,
    contact: enContact,
  },
  fr: {
    site: frSite,
    hero: frHero,
    about: frAbout,
    projects: frProjects,
    experience: frExperience,
    skills: frSkills,
    education: frEducation,
    contact: frContact,
  },
};

export type Content = (typeof content)["en"];
