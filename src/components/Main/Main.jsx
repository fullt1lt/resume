import "./Main.scss";
import Main_Resume_Info from "./components/Main_Resume_Info/Main_Resume_Info";
import Main_Skills from "./components/Main_Skills/Main_Skills";
import StarsBackground from "./StarsBackground";
import Main_Bg_Center from "./components/Main_Bg_Center/Main_Bg_Center";

export default function Main() {
  return (
    <>
      <StarsBackground />
      <Main_Resume_Info />
      <Main_Bg_Center />
      <Main_Skills />
    </>
  );
}
