import { useState, useEffect, useContext } from "react";
import { styleContext } from "./Context";

const Loading = () => {
  const [view, setView] = useState(".");
  const style: any = useContext(styleContext);

  useEffect(() => {
    let n = 0;
    let interval = setInterval(() => {
      n < 1000
        ? (setView((msg: any) => msg + "."), n++)
        : clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={style.loading}>
      <div style={style.loadingDot}>{view}</div>
    </div>
  );
};

export default Loading;
