import { useState, useEffect, createContext } from "react";
import styles from "../assets/styles";
import { handleLocation } from "../assets/util";
import Loading from "./Loading";

export const styleContext = createContext(styles);
export const locationContext = createContext({});
export const mobileContext = createContext(window.innerWidth <= 900);

const ContextProvider = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [style, setStyle]: any = useState(styles);
  const [mobile, setMobile]: any = useState(window.innerWidth <= 900);
  const [location, setLocation]: any = useState({});

  useEffect(() => {
    handleLocation(setLocation, setLoading);
    setStyle(styles);

    const handleResize = () => {
      setMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <locationContext.Provider value={location}>
      <mobileContext.Provider value={mobile}>
        <styleContext.Provider value={style}>
          {loading ? <Loading /> : props.children}
        </styleContext.Provider>
      </mobileContext.Provider>
    </locationContext.Provider>
  );
};

export { ContextProvider };
