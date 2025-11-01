import React from "react";
import LogoImg from "../../assets/logo.png";
import { format } from "date-fns";
import Marque from "./Marque";
import Navvar from "../Navvar/Navvar";
const Header = () => {
  return (
    // Heading Title and Time Format
    <section>
      <div className="flex justify-center items-center gap-5 flex-col mt-5">
        <img src={LogoImg} alt="News-Title"></img>
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="text-accent font-semibold">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </p>
      </div>
      <Marque></Marque>
      <Navvar></Navvar>
    </section>
  );
};

export default Header;
