import { useState, useEffect, useContext } from "react";
import Loading from "./components/Loading";
import { styleContext } from "./components/Context";
import Menu from "./components/Menu";
import Index from "./components/Index";

const App = (): JSX.Element => {
  const [loading, setLoading]: any = useState(true);
  const style = useContext(styleContext);
  const [view, setView] = useState(<Loading />);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    setView(<Index />);
    setLoading(false);
  }, []);

  useEffect(() => {
    const keyDown = (event: any) => {
      if (event.code === "Escape") {
        setMenuActive((prevMenuOpen) => !prevMenuOpen);
      }
    };

    document.addEventListener("keydown", keyDown);

    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  const menuControls = {
    menu: setMenuActive,
    view: setView,
  };

  return (
    <div style={style.app}>
      {loading ? <Loading /> : view}
      {menuActive && <Menu controls={menuControls} />}
    </div>
  );
};

export default App;
