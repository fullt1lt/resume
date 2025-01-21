import { useEffect, useRef, useState } from "react";
import "./Main_Skills.scss";
import { useTranslation } from "react-i18next";

export default function Main_Skills() {
  const skillsRef = useRef(null);
  const { t } = useTranslation("skills");
  const [isSticky, setIsSticky] = useState(false);

  const skills = [
    { name: "Python", percentage: 75 },
    { name: "JavaScript", percentage: 60 },
    { name: "HTML & CSS", percentage: 100 },
    { name: "React", percentage: 50 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isSticky) {
          setIsSticky(true);
        }
      },
      { threshold: 0.4 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [isSticky]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`Main_Skills ${isSticky ? "sticky" : ""}`}
      ref={skillsRef}
    >
      <ul className="Main_Skills_list">
        <h1
          className={`Main_Skills_Header ${isSticky ? "animation_header" : ""}`}
        >
          {t("skillsHeader")}
        </h1>
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
