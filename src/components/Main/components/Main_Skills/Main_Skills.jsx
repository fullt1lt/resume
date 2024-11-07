import { useEffect, useRef, useState } from "react";
import "./Main_Skills.scss";
import { useTranslation } from "react-i18next";

export default function Main_Skills() {
  const skillsRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const skills = [
    { name: "Python", percentage: 75 },
    { name: "JavaScript", percentage: 60 },
    { name: "HTML & CSS", percentage: 100 },
    { name: "React", percentage: 25 },
  ];

  const { t } = useTranslation("skills");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`Main_Skills ${isSticky ? "sticky" : ""}`}
      ref={skillsRef}
      id="skills"
    >
      <ul className="Main_Skills_list">
        <h1 className="Main_Skills_Header">{t("skillsHeader")}</h1>
        {skills.map((skill, index) => (
          <li key={index} className="Main_skills_item">
            <span className="Skills_name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className={`progress ${isSticky ? "animation" : ""}`}
                style={{
                  width: isSticky ? `${skill.percentage}%` : "0%",
                  "--target-width": `${skill.percentage}%`,
                }}
              ></div>
              <span className="Skills_percentage">{skill.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
