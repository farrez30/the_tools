import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MiniDrawer from "./components/Sidenav";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ToggleColorMode from "./components/Darkmode";

import Counter from "./pages/Counter";
import SearchFilter from "./pages/SearchFilter";
import Stopwatch from "./pages/Stopwatch";
import Home from "./pages/Home";
import { useState } from "react";
import { Paper } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: darkMode ? "dark" : "light",
  //   },
  // });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
    
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* <Paper> */}
        <div className="App">
          <header className="App-header">
            <MiniDrawer
              check={darkMode}
              change={() => setDarkMode(!darkMode)}
            />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/counter" element={<Counter />} />
              <Route path="/stopwatch" element={<Stopwatch />} />
              <Route path="/searchfilter" element={<SearchFilter />} />
            </Routes>
          </header>
        </div>
      {/* </Paper> */}
    </ThemeProvider>
  );
}

export default App;
