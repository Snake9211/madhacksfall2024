import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'hsl(var(--background))',
      paper: 'hsl(var(--card))',
    },
    text: {
      primary: 'hsl(var(--foreground))',
      secondary: 'hsl(var(--muted-foreground))',
    },
    primary: {
      main: 'hsl(var(--primary))',
      contrastText: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      main: 'hsl(var(--secondary))',
      contrastText: 'hsl(var(--secondary-foreground))',
    },
    error: {
      main: 'hsl(var(--destructive))',
      contrastText: 'hsl(var(--destructive-foreground))',
    },
    divider: 'hsl(var(--border))',
    info: {
      main: 'hsl(var(--chart-1))',
    },
    success: {
      main: 'hsl(var(--chart-2))',
    },
    warning: {
      main: 'hsl(var(--chart-3))',
    },
    customColors: {
      popover: 'hsl(var(--popover))',
      popoverForeground: 'hsl(var(--popover-foreground))',
      accent: 'hsl(var(--accent))',
      accentForeground: 'hsl(var(--accent-foreground))',
      ring: 'hsl(var(--ring))',
    },
  },
});

// Extending the custom palette for TypeScript
declare module '@mui/material/styles' {
  interface Palette {
    customColors?: {
      popover: string;
      popoverForeground: string;
      accent: string;
      accentForeground: string;
      ring: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      popover: string;
      popoverForeground: string;
      accent: string;
      accentForeground: string;
      ring: string;
    };
  }
}

export default theme;
