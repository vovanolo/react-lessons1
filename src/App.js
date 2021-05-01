import React from "react";
import TransactionHistory from "./TransactionHistory";
import transaction from "./transaction.json";
import Form from "./Form";

export default function App() {
  return (
    <div>
      hello app
      <TransactionHistory items={transaction} />
      <Form />
    </div>
  );
}
