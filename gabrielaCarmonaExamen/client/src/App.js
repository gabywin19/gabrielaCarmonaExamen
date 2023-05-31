import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Routers";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function App() {
  const tema = 'dark';

  const themeConfig = useMemo(() => createTheme({
		palette: {
			mode: tema,
			primary: {
				main: '#1976d2',
			},
			secondary: {
				main: '#173753',
			},
			background: {
				default: tema === 'light' ? '#efefef' : '#1c2025',
				paper: tema === 'light' ? '#fff' : '#282C34'
			}
		},
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          }
        }
      }
    }
	}), [tema]);

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
