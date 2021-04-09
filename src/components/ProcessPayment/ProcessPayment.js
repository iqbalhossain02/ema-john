import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ie1xMExFcjpB4r759VCSoIrMzimwOuDDkNEWNIgQuA5YCEJEnlMopp6I9Ceeafu27X9Pcfsip4RoZEQ4OOq1TAN00zOYDTPmP');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm />
            {/* <SplitForm /> */}
        </Elements>
    );
};

export default ProcessPayment;