import React from "react";
import FileBrowser from "./components/FileBrowser/FileBrowser";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkBackground = {
  default: "#121212",
  paper: "#1E1E1E",
};

// Create a custom theme with adjusted background
const customTheme = createTheme({
  spacing: 2, // Customize other theme properties as needed
  palette: {
    mode: "light", // Set dark mode
    background: darkBackground, // Provide dark background object
  },
});
const App: React.FC = () => {
  return (
    <div>
      <h1>File Browser</h1>
      <ThemeProvider theme={customTheme}>
        <FileBrowser />
      </ThemeProvider>
    </div>
  );
};

export default App;
