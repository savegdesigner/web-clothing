import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInSignOutPage from "./pages/sign-in-sign-out/SignInSignOut.component";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
