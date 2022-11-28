import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import { Route } from "react-router-dom";
import HomePage from "../../features/hone/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/Contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
