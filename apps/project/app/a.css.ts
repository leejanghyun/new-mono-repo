import { style } from "@vanilla-extract/css";
import { globalStyles } from "@leejangheon/ui/src/styles/globalTheme.css";

export const title = style({
  margin: "32px 0 8px",
  fontWeight: globalStyles.font.weight.fontWeightBold,
  color: globalStyles.color.red100,
  fontSize: globalStyles.font.size.fontSize18,
});
