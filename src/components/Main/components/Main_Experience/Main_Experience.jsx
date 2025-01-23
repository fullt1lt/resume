import "./Main_Experience.scss";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedText from "../Functions/AnimatedText";
import { calculateGridPosition, counterPoints } from "../Functions/Main_Experience_Functions"
import useStickyObserver from "../hooks/useStickyObserver"

export default function Main_Experience() {
  const experienceRef = useRef(null);
  const { t } = useTranslation("experience");
  const [isSticky, setIsSticky] = useState(false);
  const experienceList = t("experienceList", { returnObjects: true });

  useStickyObserver(experienceRef, setIsSticky);

  return (
    <section className="Main_Experience" ref={experienceRef} id="experience">
      <h1
        className={`Main_Experience_Header ${
          isSticky ? "animation_header" : ""
        }`}
      >
        <AnimatedText
          text={isSticky ? t("experienceHeader") : " "}
          delay={0.1}
        />
      </h1>
      <div className="Main_Experience_Container">
        <div
          className={`Vertical_Line_Experience ${
            isSticky ? "animatioUpScroll" : ""
          }`}
        ></div>
        {counterPoints(experienceList.length)}
        <ul
          className="Main_Experience_list"
          style={{ "--target-heigth-exp": `${experienceList.length}` }}
        >
          {experienceList.map((item, index) => (
            <li
              key={index}
              className={`Experience_Item ${
                isSticky
                  ? item.id % 2 === 0
                    ? "animation_rigth"
                    : "animation_left"
                  : " "
              }`}
              style={calculateGridPosition(item)}
            >
              <h1 className="Experience_Item_Period">{item.period.start} - {item.period.end}</h1>
              <h2 className="Experience_Item_Name_Company">{item.company.name}</h2>
              <span className="Experience_Item_Position_Company">{item.company.position}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
