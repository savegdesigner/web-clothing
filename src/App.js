import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import { Route } from "react-router-dom";

import ShopPage from "./pages/shop/ShopPage.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={ShopPage} />
    </div>
  );
}

export default App;
