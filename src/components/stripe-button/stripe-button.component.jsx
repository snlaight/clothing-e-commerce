import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KJi83CwQ0Q9Bapb0rMZJxDqbqHZqaZc2QqhtaPmEvrofW5VHgSDTF5H1UySUsp1Ymls7ubDawo8hrQQbSMYbNJQ00x4tuLSkz";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-commerce shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton