import React, { Component } from 'react';

class StripeComponent extends Component {
    render() {
        return (
            <div>
                <form action="your-server-side-code" method="POST">
                    <script
                        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                        data-key="pk_test_EaK1qCsfvxEhY5LSwUFj7JBE"
                        data-amount="999"
                        data-name="Demo Site"
                        data-description="Example charge"
                        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                        data-locale="auto"
                        data-currency="eur">
                    </script>
                </form>
            </div>
        );
    }
}

export default StripeComponent;