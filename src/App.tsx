import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/500-italic.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/600-italic.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/700-italic.css';
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { HomePage } from '@pages/HomePage/HomePage';
import { cssVariablesResolver, mantineTheme } from '@styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <DirectionProvider>
      <MantineProvider
        theme={mantineTheme}
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme="auto"
      >
        <Notifications />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </DirectionProvider>
  );
}
