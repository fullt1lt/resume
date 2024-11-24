import "./Main.scss";
import Main_Resume_Info from "./components/Main_Resume_Info/Main_Resume_Info";
import Main_Bg_Skills from "./components/Main_Bg_Skills/Main_Bg_Skills";
import Main_Portfolio from "./components/Main_Portfolio/Main_Portfolio";

export default function Main() {
  return (
    <>
      <Main_Resume_Info />
      <Main_Bg_Skills />
      <Main_Portfolio />
    </>
  );
}
