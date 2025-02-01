import { globalStyles } from "../../styles/globalTheme.css";
import { style } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";
import notice from "./images/noti.svg?url";
import success from "./images/success.svg?url";

export const containerStyle = style({
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "40px",
  gap: "14px",
});

globalStyle(".Toastify__toast-container > div", {
  justifyContent: "center",
});

const commonToastStyle = {
  opacity: "0.96",
  borderRadius: "8px",
  padding: "14px 24px 14px 20px",
};

globalStyle(`.Toastify__toast--success `, {
  ...commonToastStyle,
  color: globalStyles.color.wbWhite,
  backgroundColor: "#2B4264",
});

globalStyle(`.Toastify__toast--error `, {
  ...commonToastStyle,
  color: globalStyles.color.wbWhite,
  background: globalStyles.color.red500,
});

globalStyle(`.Toastify__toast--success:before`, {
  marginRight: "4px",
  content: "''",
  width: "22px",
  height: "22px",
  display: "inline-block",
  backgroundImage: `url(${success})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
});

globalStyle(`.Toastify__toast--error:before`, {
  marginRight: "4px",
  content: "''",
  width: "22px",
  height: "22px",
  backgroundImage: `url(${notice})`,
  display: "inline-block",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
});
