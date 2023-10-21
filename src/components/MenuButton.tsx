import { useContext } from "react";
import { styleContext } from "./Context";

const MenuButton = (props: any) => {
  const style = useContext(styleContext);
  const { controls } = props;

  return (
    <div style={style.MenuButton}>
      <h1 style={style.MenuButtonText} onClick={() => controls(true)}>
        Menu
      </h1>
      ;
    </div>
  );
};

export default MenuButton;
