import i18n from "i18next";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";
import headerEN from "./locales/en/header.json";
import headerUA from "./locales/ua/header.json";
import headerCZ from "./locales/cz/header.json";
import resumeInfoEN from "./locales/en/resumeInfo.json";
import resumeInfoUA from "./locales/ua/resumeInfo.json";
import resumeInfoCZ from "./locales/cz/resumeInfo.json";

import skillsEN from "./locales/en/skills.json";
import skillsUA from "./locales/ua/skills.json";
import skillsCZ from "./locales/cz/skills.json";

import portfolioEN from "./locales/en/portfolio.json";
import portfolioUA from "./locales/ua/portfolio.json";
import portfolioCZ from "./locales/cz/portfolio.json";

import experienceEN from "./locales/en/experience.json";
import experienceUA from "./locales/ua/experience.json";
import experienceCZ from "./locales/cz/experience.json";

const savedLanguage = Cookies.get("selectedLanguage") || "ua";

const resources = {
  en: {
    header: headerEN,
    resumeInfo: resumeInfoEN,
    skills: skillsEN,
    portfolio: portfolioEN,
    experience: experienceEN,
  },
  ua: {
    header: headerUA,
    resumeInfo: resumeInfoUA,
    skills: skillsUA,
    portfolio: portfolioUA,
    experience: experienceUA,
  },
  cz: {
    header: headerCZ,
    resumeInfo: resumeInfoCZ,
    skills: skillsCZ,
    portfolio: portfolioCZ,
    experience: experienceCZ,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  ns: ["header", "resume_info", "skills", "portfolio", "experience"],
  defaultNS: "header",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
