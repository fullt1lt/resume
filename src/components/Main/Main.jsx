import "./Main.scss";
import Main_Resume_Info from "./components/Main_Resume_Info/Main_Resume_Info";
import Main_Bg_Skills from "./components/Main_Bg_Skills/Main_Bg_Skills";
import Main_Portfolio from "./components/Main_Portfolio/Main_Portfolio";
import Main_Experience from "./components/Main_Experience/Main_Experience";
import Main_Contacts from "./components/Main_Contacts/Main_Contacts";

export default function Main() {
  return (
    <>
      <Main_Resume_Info />
      <Main_Bg_Skills />
      <Main_Portfolio />
      <Main_Experience />
      <Main_Contacts />
    </>
  );
}
