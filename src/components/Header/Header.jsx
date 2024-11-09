import React, { useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import logo from "@assets/icon/1.svg";
import ua from "@assets/icon/Flag_of_Ukraine.png";
import en from "@assets/icon/Flag_of_the_UK.jpeg";
import cz from "@assets/icon/Flag_of_the_CR.svg";

const languages = {
  en: en,
  ua: ua,
  cz: cz,
};

export default function Header() {
  const savedLanguage = Cookies.get("selectedLanguage") || "ua";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(savedLanguage);
  const { t, i18n } = useTranslation("header");

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    Cookies.set("selectedLanguage", language, { expires: 7 });
    setIsOpen(false);
  };

  return (
    <header>
      <ul className="Header_list">
        <li className="Header_logo_item">
          <div className="Header_logo_item_back">
            <img src={logo} alt="logo" />
          </div>
        </li>
        <li className="Header_Navigation_item">
          <ul className="Header_Navigation_list">
            <li className="Header_Navigation_list_item">
              <a href="#skills">{t("skills")}</a>
              <div className="animation_line"></div>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#portfolio">{t("portfolio")}</a>
              <div className="animation_line"></div>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#experience">{t("experience")}</a>
              <div className="animation_line"></div>
            </li>
            <li className="Header_Navigation_list_item">
              <a href="#contacts">{t("contacts")}</a>
              <div className="animation_line"></div>
            </li>
          </ul>
        </li>
        <li className="Header_Navigation_languages">
          <ul className="Header_Language_list">
            {!isOpen && (
              <li onClick={toggleDropdown} className="ToggleDropdown">
                <img src={languages[selectedLanguage]} alt={selectedLanguage} />
                <span>{selectedLanguage.toUpperCase()}</span>
              </li>
            )}
            {isOpen &&
              Object.keys(languages).map((languageKey) => (
                <li
                  key={languageKey}
                  className="Header_Language_item"
                  onClick={() => selectLanguage(languageKey)}
                >
                  <img
                    src={languages[languageKey]}
                    alt={`${languageKey} flag`}
                    className="Language_flag"
                  />
                  <span>{languageKey.toUpperCase()}</span>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </header>
  );
}
