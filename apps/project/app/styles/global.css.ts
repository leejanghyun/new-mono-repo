import { globalStyle } from "@vanilla-extract/css";

import { globalStyles } from "@leejangheon/ui/styles/globalTheme.css";

globalStyle(":root", {
  WebkitTapHighlightColor: "transparent",
  WebkitTextSizeAdjust: "100%",
  textSizeAdjust: "100%",
  cursor: "default",
  overflowWrap: "break-word",
  MozTabSize: 4,
  tabSize: 4,
});

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body", {
  fontFamily: globalStyles.font.body,
});

globalStyle("body", {
  color: globalStyles.color.gray900,
  fontSize: globalStyles.font.size.fontSize16,
  lineHeight: 1.57143,
  fontWeight: globalStyles.font.weight.fontWeightNormal,
  hyphens: "auto",
  backgroundColor: globalStyles.color.wbWhite,
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  font: "inherit",
  color: "inherit",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html, body, #__next, #root", {
  width: "100%",
  height: "100%",
});

globalStyle("main", {
  display: "block",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  textWrap: "balance",
});

globalStyle("hr", {
  boxSizing: "content-box",
  height: 0,
  overflow: "visible",
});

globalStyle("pre", {
  fontFamily: "monospace, monospace",
  fontSize: "1em",
});

globalStyle("abbr[title]", {
  borderBottom: "none",
  textDecoration: "underline dotted",
});

globalStyle("code, kbd, samp", {
  fontFamily: "monospace, monospace",
  fontSize: "1em",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("img, picture, video, canvas", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("img", {
  borderStyle: "none",
});

globalStyle("img:not([src])", {
  opacity: 0,
});

globalStyle("details, summary", {
  display: "block",
});

globalStyle("summary", {
  display: "list-item",
});

globalStyle("iframe", {
  border: 0,
});

globalStyle("a", {
  backgroundColor: "transparent",
});

globalStyle("form", {
  display: "contents",
});

globalStyle("legend", {
  display: "table",
  maxWidth: "100%",
  whiteSpace: "normal",
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("input, label", {
  WebkitTapHighlightColor: "transparent",
});

globalStyle("textarea", {
  overflow: "auto",
});

globalStyle('[hidden], [data-hidden="true"]', {
  display: "none",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

globalStyle("ol, ul", {
  listStyle: "none",
});
