import { createContext, PropsWithChildren, useMemo } from "react";

import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

import EThemes from "./EThemes";
import { useLocalStorage } from "../hooks";
import { LOCAL_STORAGE_KEYS } from "../consts";
import { getDesignTokens } from "./customThemes";
import EClientVipStatus from "./EClientVipStatus";

interface ThemeContextType {
  toggleColorMode: () => void;
  theme: EThemes;
}

const hasCustomTheme = false;
const clientVipStatus = EClientVipStatus.VIP;

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useLocalStorage<EThemes>(
    LOCAL_STORAGE_KEYS.THEME,
    EThemes.Light
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...(hasCustomTheme
          ? getDesignTokens(clientVipStatus)?.(mode)
          : {
              palette: {
                mode,
              },
            }),
        components: {
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiTextField: {
            defaultProps: {
              size: "small",
            },
          },
        },
      }),
    [mode]
  );

  const value: ThemeContextType = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === EThemes.Light ? EThemes.Dark : EThemes.Light
        );
      },
      theme: mode,
    }),
    [mode, setMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
