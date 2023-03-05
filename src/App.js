import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MiniDrawer from "./components/Sidenav";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ToggleColorMode from "./components/Darkmode";

import Counter from "./pages/Counter";
import SearchFilter from "./pages/SearchFilter";
import Stopwatch from "./pages/Stopwatch";
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <MiniDrawer />
          <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/counter" element={<Counter/> }/>
            <Route path="/stopwatch" element={<Stopwatch/> }/>
            <Route path="/searchfilter" element={<SearchFilter/> }/>
          </Routes>

        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
