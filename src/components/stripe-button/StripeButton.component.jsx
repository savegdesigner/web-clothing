import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIy32A5sauf05gw80Cc62uLkJKt37rglmd08KMo3izOOBvBkRyyKuM3nSxmLylt8n09OMoJAvv5b2deEHFK73aL00gX4lVX3P";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Web Clothing"
      billingAddress
      shippingAddress
      image="https://static.thenounproject.com/png/813-200.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
