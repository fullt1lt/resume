import "./Send_Email.scss"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function SendEmails() {
  const { t } = useTranslation("contacts");
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    emailjs
      .sendForm(
        "service_lfxa7mc",
        "template_02apjxt",
        form,
        "GkQR7oiV7MVCjW--s"
      )
      .then(
        (result) => {
          console.log("Сообщение отправлено:", result.text);
          alert("Email отправлен успешно!");
        },
        (error) => {
          console.error("Ошибка отправки:", error);
          alert("Ошибка отправки, попробуйте еще раз.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="Contact_form">
      <input
        name="name"
        placeholder={t("placeholderName")}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <input
        name="email"
        type="email"
        placeholder={t("placeholderEmail")}
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required

      />
      <textarea
        name="message"
        placeholder={t("placeholderText")}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <button type="submit" className="ButtonSubmit">{t("buttonSubmit")}</button>
    </form>
  );
}
