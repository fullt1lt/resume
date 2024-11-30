import "./Main_Resume_Info.scss";
import React, { useState } from "react";
import main_foto1 from "@assets/imag/Img_3-Photoroom.png";
import { useTranslation } from "react-i18next";
import AnimatedText from "../Functions/AnimatedText";

export default function Main_Resume_Info() {
  const { t } = useTranslation("resumeInfo");

  return (
    <section className="Main_Resume_Info">
      <ul className="Resume_info_list">
        <div className="line"></div>
        <li className="Resume_info_item">
          <h1>
            <AnimatedText text={t("name")} delay={0.3} />
          </h1>
          <h1>
            <AnimatedText text={t("secondName")} delay={0.3} />
          </h1>
          <h3>
            <AnimatedText text="Full Stack Developer" delay={0.1} />
          </h3>
        </li>
      </ul>
      <div className="Wrapper_resume_foto">
        <img src={main_foto1} alt="main_foto" />
      </div>
    </section>
  );
}
