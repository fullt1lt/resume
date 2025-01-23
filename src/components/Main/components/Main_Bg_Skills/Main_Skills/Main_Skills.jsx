import { useRef, useState } from "react";
import "./Main_Skills.scss";
import { useTranslation } from "react-i18next";
import useStickyObserver from "../../hooks/useStickyObserver"
import AnimatedText from "../../Functions/AnimatedText";

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

  useStickyObserver(skillsRef, setIsSticky);

  return (
    <section
      className={`Main_Skills ${isSticky ? "sticky" : ""}`}
      ref={skillsRef}
    >
      <ul className="Main_Skills_list">
        <h1
          className={`Main_Skills_Header ${isSticky ? "animation_header" : ""}`}
        >
          <AnimatedText text={isSticky? t("skillsHeader") : " "} delay={0.4}/>
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
