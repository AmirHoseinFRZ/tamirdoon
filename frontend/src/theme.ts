import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ themeConfig, direction: "rtl" });

export default theme;
