import React, { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { lightTheme } = useContext(ThemeContext);
  //const theme = lightTheme ? light : dark;

  return (
    <nav
      className="pt-4 pb-2  lightTheme ? black : blue"
    //  style={{ background: theme.ui, color: theme.syntax }}
  
    >
      <ul className="list-unstyled">
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
