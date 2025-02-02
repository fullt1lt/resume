import "./Main_Contacts.scss";
import AnimatedText from "../Functions/AnimatedText";
import { useTranslation } from "react-i18next";
import React, { useState, useRef } from "react";
import { handleMouseMove } from "../Functions/HandleMouseMove";
import useStickyObserver from "../hooks/useStickyObserver";
import Send_Emails from "./Send_Emails/Send_Emails";

import telegram from "@assets/icon/telegram_black.png";
import instagram from "@assets/icon/instagram.png";
import whatsApp from "@assets/icon/WhatsApp.png";
import github from "@assets/icon/github.png";

export default function Main_Contacts() {
  const { t } = useTranslation("contacts");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contactsRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const links = [
    {
      link: "https://t.me/Just_t1lt",
      image: telegram,
    },
    {
      link: "https://www.instagram.com/int_1101/",
      image: instagram,
    },
    {
      link: "https://wa.me/42077667126",
      image: whatsApp,
    },
    {
      link: "https://github.com/fullt1lt",
      image: github,
    },
  ];

  useStickyObserver(contactsRef, setIsSticky);

  return (
    <section
      className="Main_Contacts"
      id="contacts"
      ref={contactsRef}
      onMouseMove={(event) => handleMouseMove(event, setMousePosition)}
    >
      <ul className="Main_Contacts_list">
        <li className="Main_Contacts_item_header">
          <h1
            className={`Main_Contacts_header ${
              isSticky ? "animation_header" : ""
            }`}
          >
            <AnimatedText
              text={isSticky ? t("contactsHeader") : " "}
              delay={0.1}
            />
          </h1>
        </li>
        <li
          className="Main_Contacts_item"
          style={{
            transform: `rotateX(${mousePosition.x / 2.5}deg) rotateY(${
              mousePosition.y / 2.5
            }deg)`,
          }}
        >
          <ul className="Main_Contacts_Info_list">
            <li className="Main_Contacts_Info_item">
              <h1>{t("contactsInfoHeader")}</h1>
            </li>
            <Send_Emails />
            <li className="Main_Contacts_Info_item">
              <span>+420776671216</span>
              <span>daniiltupikin98@gmail.com</span>
              <ul className="Contact_Link_list">
                {links.map((item, index) => (
                  <li key={index} className="Contact_link_item">
                    <a href={item.link} target="_blank">
                      <img src={item.image} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
