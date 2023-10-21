import { CSSProperties } from "react";

interface theme {
  mainColor: string;
  backgroundColor: string;
  accentColor: string;
}

const bodyStyle = document.body.style;
bodyStyle.border = "0px";
bodyStyle.margin = "0px";

const root: any = document.getElementById("root");
const rootStyle = root.style;
rootStyle.width = "100vw";
rootStyle.height = "100vh";

const themes: theme[] = [
  {
    mainColor: "#e5c687",
    backgroundColor: "#121619",
    accentColor: "#bcb382",
  },
  {
    mainColor: "#bbacc1",
    backgroundColor: "#545643",
    accentColor: "#80727b",
  },
  {
    mainColor: "#eff8e2",
    backgroundColor: "#23022e",
    accentColor: "#cecfc7",
  },
  {
    mainColor: "#f8f8f8",
    backgroundColor: "#000100",
    accentColor: "#a1a6b4",
  },
  {
    mainColor: "#35ce8d",
    backgroundColor: "#93827f",
    accentColor: "#6ba292",
  },
  {
    mainColor: "#279af1",
    backgroundColor: "#131112",
    accentColor: "#f7f7ff",
  },
  {
    mainColor: "#fcba04",
    backgroundColor: "#250001",
    accentColor: "#f3f3f3",
  },
  {
    mainColor: "#c7efcf",
    backgroundColor: "#333745",
    accentColor: "#eef5db",
  },
];

const { mainColor, backgroundColor, accentColor } =
  themes[Math.floor(Math.random() * themes.length)];

const mobile: boolean = window.innerWidth <= 900;

const styles: { [key: string]: CSSProperties } = {
  /************************************* Global *************************************/

  app: {
    backgroundColor: backgroundColor,
    fontSize: mobile ? "1.2em" : "1.3em",
    letterSpacing: ".1px",
    overflowX: "hidden",
    width: "100%",
    height: "100%",
  },
  loading: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  index: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },

  /************************************* Index *************************************/

  title: {
    fontSize: mobile ? "100px" : "250px",
    color: mainColor,
  },

  /************************************* Menu *************************************/

  menu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    justifyContent: "center",
    textAlign: "center",
    right: "0",
    bottom: "0",
    borderRadius: "5px",
    backgroundColor: backgroundColor,
    width: mobile ? "100%" : "30%",
    height: mobile ? "100%" : "30%",
    padding: "1em",
    zIndex: "1000",
    margin: "auto",
  },

  menuItem: {
    color: mainColor,
    fontSize: mobile ? "60px" : "70px",
    width: "100%",
    height: "50%",
    marginBlock: "0px",
  },

  /************************************* Loading *************************************/

  loadingDot: {
    color: mainColor,
    justifyContent: "center",
    textAlign: "center",
    fontSize: mobile ? "4em" : "5em",
  },

  /************************************* Weather *************************************/

  weatherApp: {
    fontSize: mobile ? "20px" : "30px",
    width: "100%",
    height: "100%",
  },

  /* Current */

  currentTitle: {
    fontSize: mobile ? "50px" : "70px",
    color: mainColor,
    marginBlock: "0px",
  },
  current: {
    color: mainColor,
    gap: ".2em",
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
    alignItems: "center",
    textAlign: "center",
    marginBlock: "0px",
    marginBottom: "2em",
    marginTop: "2em",
  },
  currentItem: {
    padding: "10px",
    marginBlock: "0px",
    fontSize: mobile ? "20px" : "30px",
  },

  /* Chart */

  chart: {
    accentColor: accentColor,
    color: mainColor,
    borderTop: `solid ${mainColor} .1em`,
    borderBottom: `solid ${mainColor} .1em`,
    paddingLeft: ".5em",
  },
  chartCon: {
    color: mainColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chartBtnCon: {
    gap: mobile ? "1em" : "2em",
    paddingTop: "1em",
    paddingBottom: "1em",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  chart_and_buttons: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
  },

  /* Twelve-Hour */

  twelveHour: {
    color: mainColor,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  forecast: {
    color: mainColor,
    padding: mobile ? "1.5em" : "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: mobile ? "20px" : "30px",
  },
  forecast_name: {
    fontSize: mobile ? "30px" : "50px",
    padding: "20px",
    marginBlock: "0px",
  },
  forecast_Item: {
    fontSize: mobile ? "20px" : "30px",
    marginBlock: "0px",
    padding: "10px",
  },
};

export default styles;
