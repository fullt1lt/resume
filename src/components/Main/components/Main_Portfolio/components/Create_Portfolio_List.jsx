import "./Create_Portfolio_List.scss";
import SpaSalon from "@assets/imag/Spa_Salon.png";
import Luxtrips from "@assets/imag/Lux_trips.png";
import HaigTeam from "@assets/imag/HaigTeam.png";
import arrow_left from "@assets/icon/arrow_left.png";
import arrow_right from "@assets/icon/arrow_right.png";
import { useState } from "react";

export default function Create_Portfolio_List({ mousePosition }) {
  const portfolioList = [
    { link: "https://www.haigteam.com/", image: HaigTeam },
    { link: "https://fullt1lt.github.io/spa_salon-final/", image: SpaSalon },
    { link: "https://fullt1lt.github.io/lux_trips/", image: Luxtrips },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("right");
  const [animationKey, setAnimationKey] = useState(0);
  const countElements = 6;
  const totalPages = Math.ceil(portfolioList.length / countElements);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const currentItems = portfolioList.slice(
    (currentPage - 1) * countElements,
    currentPage * countElements
  );

  const handlePrevPage = () => {
    setDirection("right");
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : pages.length));
    triggerAnimation();
  };

  const handleNextPage = () => {
    setDirection("left");
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="Main_Portfolio_Block">
      <div className="Main_Portfolio_Slider">
        <div
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="Nav_Portfolio_Button"
          style={{ display: pages <= 1 ? "none" : "flex" }}
        >
          <img src={arrow_left} alt="" />
        </div>
        <ul className="Main_Portfolio_list">
          {currentItems.map((item, index) => (
            <li
              key={`${animationKey}-${index}`}
              className={`Portfolio_item slide-${direction}`}
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
        <div
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="Nav_Portfolio_Button"
          style={{ display: pages <= 1 ? "none" : "flex" }}
        >
          <img src={arrow_right} alt="" />
        </div>
      </div>
      <ul
        className="Slider_Buttons_list"
        style={{ display: pages <= 1 ? "none" : "flex" }}
      >
        <div
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="Nav_Portfolio_Button_mobil"
          style={{ display: pages <= 1 ? "none" : "flex" }}
        >
          <img src={arrow_left} alt="" />
        </div>
        {pages.map((item, index) => (
          <li
            key={index}
            className={`Slider_Page_Button ${
              item === currentPage ? "Slider_active" : ""
            }`}
          ></li>
        ))}
        <div
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="Nav_Portfolio_Button_mobil"
          style={{ display: pages <= 1 ? "none" : "flex" }}
        >
          <img src={arrow_right} alt="" />
        </div>
      </ul>
    </div>
  );
}
