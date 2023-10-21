import { useContext, useEffect } from "react";
import WeatherApp from "../../projects/weather/weather_app";
import { styleContext } from "../Context";
import Index from "../Index";

const Menu = (props: any) => {
  const style = useContext(styleContext);
  const controls = props.controls;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = (e.target as HTMLDivElement).id;
      if (id === "home") {
        controls.menu(false);
        controls.view(<Index />);
      } else if (id === "weather") {
        controls.menu(false);
        controls.view(<WeatherApp />);
      } else {
        if (id !== "menuButton" && id !== "weather" && id !== "home")
          controls.menu(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [controls]);

  return (
    <div style={style.menu} id="menu">
      <h4 id="home" style={style.menuItem}>
        Home
      </h4>
      <h4 id="weather" style={style.menuItem}>
        Weather
      </h4>
    </div>
  );
};

export default Menu;
