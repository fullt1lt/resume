import "./Main_Portfolio.scss";
import SpaSalon from "@assets/imag/Spa_Salon.png";
import Luxtrips from "@assets/imag/Lux_trips.png";

export default function Main_Portfolio() {
  return (
    <>
      <section className="Main_Portfolio" id="portfolio">
        <ul className="Main_Portfolio_list">
          <li className="Portfolio_item">
            <a href="https://fullt1lt.github.io/spa_salon-final/">
              <img src={SpaSalon} alt="Spa Salon" />
            </a>
          </li>
          <li className="Portfolio_item">
            <a href="https://fullt1lt.github.io/lux_trips/">
              <img src={Luxtrips} alt="Lux trips" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
