import "./Main_Portfolio.scss";
import SpaSalon from "@assets/imag/Spa_Salon.png";
import Luxtrips from "@assets/imag/Lux_trips.png";
import HaigTeam from "@assets/imag/HaigTeam.png";
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

  const handleMouseMove = (event) => {
    const size = sizeHalfCounter(event);
    const x = (size.width - event.clientX) / 25;
    const y = (size.heigth - event.clientY) / 25;
    setMousePosition({ x, y });
  };
  return (
    <>
      <section
        className="Main_Portfolio"
        id="portfolio"
        onMouseMove={handleMouseMove}
      >
        <h1 className="Main_Portfolio_Header">
          <AnimatedText text={t("portfolioHeader")} delay={0.3} />
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
