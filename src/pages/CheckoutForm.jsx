import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:4242/',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form className='payment-form' onSubmit={handleSubmit}>
      <PaymentElement className='payment-element' />
      <button className='payment-button' disabled={isLoading || !stripe || !elements}>
        <span id="button-text">
          {isLoading ? "Submitting..." : "Submit"}
        </span>
      </button>
      {/* Error or success message*/}
      {errorMessage && <div className='payment-message'>{errorMessage}</div>}
    </form>
  )
};

export default CheckoutForm;