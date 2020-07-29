import React, { Component } from "react";
import HomePage from "./pages/homepage/Homepage.component";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInSignOutPage from "./pages/sign-in-sign-out/SignInSignOut.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state.currentUser);
            }
          );

          // console.log(snapshot.data());
          // console.log(snapshot.id);
        });
      }

      this.setState({ currentUser: userAuth });

      if (userAuth) {
        console.log({ AuthenticatedUser: userAuth.displayName });
      }
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
