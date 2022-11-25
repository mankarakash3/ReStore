import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
//"./app/layout/models/Product";

function App() {
  const [theme, settheme] = useState(false);
  const palettetype = theme ? "dark" : "light";

  const darkTheme = createTheme({
    palette: {
      type: palettetype,
    },
  });

  function ThemeChangeHandler() {
    settheme(!theme);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header ThemeChangeHandler={ThemeChangeHandler} darkmode={theme} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
