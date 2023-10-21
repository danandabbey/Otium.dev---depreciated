import { useState, useEffect, useContext } from "react";
import Loading from "./components/Loading";
import { styleContext } from "./components/Context";
import Menu from "./components/menu/Menu";
import Index from "./components/Index";
import MenuButton from "./components/menu/OpenButton";

const App = (): JSX.Element => {
  const [loading, setLoading]: any = useState(true);
  const style = useContext(styleContext);
  const [view, setView] = useState(<Loading />);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    setView(<Index />);
    setLoading(false);
  }, []);

  const menuControls = {
    menu: setMenuActive,
    view: setView,
  };

  return (
    <div style={style.app}>
      {loading ? <Loading /> : view}
      {menuActive ? (
        <Menu controls={menuControls} />
      ) : (
        <MenuButton controls={setMenuActive} />
      )}
    </div>
  );
};

export default App;
