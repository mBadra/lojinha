// Importantando o React
import React from "react";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Default from "./pages/Default";
import HomeClient from "./pages/HomeClient";
import Details from "./pages/Details";
import Register from "./pages/Register";
import ModalComponent from "./components/Product/ModalComponent";
import FooterComponent from "./components/FooterComponent";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/About" component={About} />
      <Route path="/Products" component={Products} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Details" component={Details} />
      <Route path="/Register" component={Register} />
      <Route path="/HomeClient" component={HomeClient} />
      <Route component={Default} />
    </Switch>
    <ModalComponent />
    <FooterComponent />
  </main>
);

export default Main;
