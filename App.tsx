import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { AppRoutes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

