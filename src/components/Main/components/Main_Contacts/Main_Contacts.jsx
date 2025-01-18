import "./Main_Contacts.scss";
import AnimatedText from "../Functions/AnimatedText";
import { useTranslation } from "react-i18next";
import Send_Emails from "./Send_Emails/Send_Emails";

export default function Main_Contacts() {
  const { t } = useTranslation("contacts");
  return (
    <section className="Main_Contacts" id="contacts">
      <ul className="Main_Contacts_list">
        <li className="Main_Contacts_item_header">
          <h1 className="Main_Contacts_header">
            <AnimatedText text={t("contactsHeader")} delay={0.3} />
          </h1>
        </li>
        <li className="Main_Contacts_item">
          <ul className="Main_Contacts_Info_list">
            <li className="Main_Contacts_Info_item">
              <h1>{t("contactsInfoHeader")}</h1>
            </li>
            <Send_Emails />
            <li className="Main_Contacts_Info_item">
              <span>+420776671216</span>
              <span>daniiltupikin98@gmail.com</span>
              <ul className="Contact_Link_list">
                <li className="Contact_link_item">
                  <a href=""><img src="" alt="" /></a>
                </li>
                <li className="Contact_link_item">
                  <a href=""><img src="" alt="" /></a>
                </li>
                <li className="Contact_link_item">
                  <a href=""><img src="" alt="" /></a>
                </li>
                <li className="Contact_link_item">
                  <a href=""><img src="" alt="" /></a>
                </li>
                <li className="Contact_link_item">
                  <a href=""><img src="" alt="" /></a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
