import React, { Component } from "react";
import HomePage from "./pages/homepage/Homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";

import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/SignInSignUp.component";
import CheckoutPage from "./pages/checkout/Checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            },
            () => {
              console.log({ authenticatedUser: this.state.currentUser });
            }
          );

          // console.log(snapshot.data());
          // console.log(snapshot.id);
        });

        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
