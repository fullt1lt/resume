import "./Main_Portfolio.scss";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import AnimatedText from "../Functions/AnimatedText";
import { handleMouseMove } from "../Functions/HandleMouseMove";
import useStickyObserver from "../hooks/useStickyObserver";
import Create_Portfolio_List from "./components/Create_Portfolio_List";

export default function Main_Portfolio() {
  const { t } = useTranslation("portfolio");
  const portfolioRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useStickyObserver(portfolioRef, setIsSticky);

  return (
    <>
      <section
        className="Main_Portfolio"
        id="portfolio"
        ref={portfolioRef}
        onMouseMove={(event) => handleMouseMove(event, setMousePosition)}
      >
        <h1
          className={`Main_Portfolio_Header ${
            isSticky ? "animation_header" : ""
          }`}
        >
          <AnimatedText
            text={isSticky ? t("portfolioHeader") : " "}
            delay={0.1}
          />
        </h1>
        <Create_Portfolio_List mousePosition={mousePosition} />
      </section>
    </>
  );
}
