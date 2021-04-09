import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
    return (
        <div>
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
                <h2>Please pay for me</h2>
                <ProcessPayment />
            </div>
        </div>
    );
};

export default Shipment;