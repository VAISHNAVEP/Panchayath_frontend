import React from "react";
import Axios from "axios";

const ElectricityBillForm = () => {
  const [orderID, setOrderID] = React.useState("");
  const fixedAmount = 50000;

  const requestOrderPayment = () => {
    Axios.post("http://localhost:3002/api/razorpay/create-order", {
      amount: fixedAmount,
      receipt: "gurkaran_order_54654",
    }).then((response) => {
      setOrderID(response.data.id);

      const options = {
        key_id: "rzp_test_g4AQDry3kiOG7o",
        key_secret: "1O2SC9NGkQV0fqkqdOObgwqC",
        amount: fixedAmount * 100,
        currency: "INR",
        name: "Acme Corp",
        description:
          "A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami",
        order_id: response.data.id,
        prefill: {
          name: "demo",
          email: "demo@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "note value",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    });
  };

  return (
    <div>
      <p>Amount: ₹500</p>
      <button id="rzp-button1" onClick={requestOrderPayment}>
        Pay
      </button>
    </div>
  );
};

export default ElectricityBillForm;
