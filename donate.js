const rozarpay = 'rzp_test_WCo4YK53BCOLql'


const rzp = new Razorpay({
    key: rozarpay,
});






function pay(){
        const options = {
            amount: 10000, // Amount in paisa (e.g., 10000 for ₹100)
            currency: 'INR',
            receipt: 'order_receipt',
            payment_capture: '1',
            notes: {
                order_notes: 'Notes about the order',
            },
            handler: function(response) {
                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                // You can handle success actions here (e.g., redirect to a success page, update database, etc.)
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '+919876543210',
            },
        };
        rzp.open(options);
    }


