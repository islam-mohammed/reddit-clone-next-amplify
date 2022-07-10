import { defaultTheme, Theme } from "@aws-amplify/ui-react";

const { tokens } = defaultTheme;
const theme: Theme = {
  name: "my-theme",
  tokens: {
    fonts: {
      default: {
        variable: {
          value: "Open Sans",
        },
        static: {
          value: "Open Sans",
        },
      },
    },
    colors: {
      brand: {
        primary: {
          "10": tokens.colors.blue[10],
          "20": tokens.colors.blue[20],
          "40": tokens.colors.blue[40],
          "60": tokens.colors.blue[60],
          "80": tokens.colors.blue[80],
          "100": tokens.colors.blue[100],
        },
        secondary: {
          "10": tokens.colors.neutral[10],
          "20": tokens.colors.neutral[20],
          "40": tokens.colors.neutral[40],
          "60": tokens.colors.neutral[60],
          "80": tokens.colors.neutral[80],
          "100": tokens.colors.neutral[100],
        },
      },
      border: {
        primary: tokens.colors.neutral[40],
        secondary: tokens.colors.neutral[20],
        tertiary: tokens.colors.neutral[10],
      },
      background: {
        secondary: tokens.colors.blue[10],
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: tokens.colors.blue[60],
          _hover: {
            backgroundColor: tokens.colors.blue[80],
          },
        },
      },
      tabs: {
        item: {
          color: tokens.colors.blue[60],
          _hover: {
            color: tokens.colors.blue[80],
          },
          _active: {
            color: tokens.colors.blue[80],
          },
        },
      },
    },
    radii: {
      small: tokens.space.zero,
      medium: tokens.space.zero,
      large: tokens.space.zero,
    },
  },
};

export default theme;
