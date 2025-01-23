import "./Main_Portfolio.scss";
import SpaSalon from "@assets/imag/Spa_Salon.png";
import Luxtrips from "@assets/imag/Lux_trips.png";
import HaigTeam from "@assets/imag/HaigTeam.png";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import AnimatedText from "../Functions/AnimatedText";
import { handleMouseMove } from "../Functions/HandleMouseMove"
import useStickyObserver from "../hooks/useStickyObserver"


export default function Main_Portfolio() {
  const { t } = useTranslation("portfolio");
  const portfolioRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const portfolioList = [
  {
      link: "https://www.haigteam.com/",
      image: HaigTeam,
    },
    {
      link: "https://fullt1lt.github.io/spa_salon-final/",
      image: SpaSalon,
    },
    {
      link: "https://fullt1lt.github.io/lux_trips/",
      image: Luxtrips,
    }
  ];

  useStickyObserver(portfolioRef, setIsSticky)

  return (
    <>
      <section
        className="Main_Portfolio"
        id="portfolio"
        ref={portfolioRef}
        onMouseMove={(event) => handleMouseMove(event, setMousePosition)}
      >
        <h1 className={`Main_Portfolio_Header ${isSticky ? "animation_header" : ""}`}>
          <AnimatedText text={isSticky ? t("portfolioHeader") : " "} delay={0.1} />
        </h1>
        <ul className="Main_Portfolio_list">
          {portfolioList.map((item, index) => (
            <li
              key={index}
              className="Portfolio_item"
              style={{
                transform: `translateX(${-mousePosition.x}px) translateY(${-mousePosition.y}px)`,
              }}
            >
              <a href={item.link} className="Portfolio_links" target="_blank">
                <img src={item.image} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
