import './styles.css';
import { useState } from 'react';

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const total =
    Number(bill) + ((Number(tip) + Number(friendTip)) / 200) * Number(bill);

  function handleReset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  function handleBill(amount) {
    setBill(amount);
  }

  function handleTip(amount) {
    setTip(amount);
  }

  function handleFriendTip(amount) {
    setFriendTip(amount);
  }

  return (
    <>
      <BillAmount bill={bill} onBill={handleBill} />
      <TipAmount tip={tip} onTip={handleTip}>
        How did you like the service?
      </TipAmount>
      <TipAmount tip={friendTip} onTip={handleFriendTip}>
        How did your friend like the service?
      </TipAmount>
      {total > 0 && (
        <div>
          <p>
            You pay {total} (${bill} + ${Number(total) - Number(bill)})
          </p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
}

function BillAmount({ bill, onBill }) {
  return (
    <p>
      How much was the bill?
      <input
        value={bill}
        type="number"
        onChange={e => onBill(e.target.value)}
      />
    </p>
  );
}

function TipAmount({ tip, onTip, children }) {
  return (
    <p>
      {children}
      <select value={tip} onChange={e => onTip(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </p>
  );
}
