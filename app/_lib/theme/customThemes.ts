import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import EClientVipStatus from "./EClientVipStatus";
import EThemes from "./EThemes";

const vipDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === EThemes.Light
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export function getDesignTokens(vipStatus: EClientVipStatus) {
  switch (vipStatus) {
    case EClientVipStatus.VIP:
      return vipDesignTokens;
    default:
      return null;
  }
}
