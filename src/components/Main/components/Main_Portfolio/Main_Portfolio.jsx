import "./Main_Portfolio.scss";
import SpaSalon from "@assets/imag/Spa_Salon.png";
import Luxtrips from "@assets/imag/Lux_trips.png";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import AnimatedText from "../Functions/AnimatedText";

const sizeHalfCounter = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  return { width: rect.width / 2, heigth: rect.height / 2 };
};

export default function Main_Portfolio() {
  const { t } = useTranslation("portfolio");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const size = sizeHalfCounter(event);
    const x = (size.width - event.clientX) / 25;
    const y = (size.heigth - event.clientY) / 25;
    setMousePosition({ x, y });
  };
  return (
    <>
      <section className="Main_Portfolio" id="portfolio">
        <h1 className="Main_Portfolio_Header"><AnimatedText text={t("portfolioHeader")} delay={0.3} /></h1>
        <ul className="Main_Portfolio_list" onMouseMove={handleMouseMove}>
          <li
            className="Portfolio_item"
            style={{
              transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
            }}
          >
            <a
              href="https://fullt1lt.github.io/spa_salon-final/"
              className="Portfolio_links"
            >
              <img src={SpaSalon} alt="Spa Salon" />
            </a>
          </li>
          <li
            className="Portfolio_item"
            style={{
              transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
            }}
          >
            <a
              href="https://fullt1lt.github.io/lux_trips/"
              className="Portfolio_links"
            >
              <img src={Luxtrips} alt="Lux trips" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
