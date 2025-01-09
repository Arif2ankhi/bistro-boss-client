import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';



// TODO: ADD PUBLISHABLE KEY 
const stripePromise  = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat " ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                    {/* <CheckoutForm></CheckoutForm> */}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;