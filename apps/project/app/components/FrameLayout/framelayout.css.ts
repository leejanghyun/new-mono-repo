import { globalStyles } from "@ui/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const loadingOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  zIndex: 1000,
});

export const hidden = style({
  display: "none",
});

export const contentStyles = style({
  display: "flex",
  alignItems: "flex-start",
});

export const layoutStyles = style({
  height: "100%",
  background: globalStyles.color.blackAlpha10,
  display: "flex",
  flexDirection: "column",
});
