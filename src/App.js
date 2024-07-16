import './styles.css';
import { useState } from 'react';

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did you like the Service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did your friend like the Service?
      </SelectPercentage>
      <Output bill={bill} percentage1={percentage1} percentage2={percentage2} />
      <Reset />
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={e => onSetBill(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSetPercentage, children }) {
  return (
    <div>
      <label>{children} </label>
      <select
        value={percentage}
        onChange={e => onSetPercentage(e.target.value)}
      >
        <option value="0">Dissastisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percentage1, percentage2 }) {
  const tip =
    (Number(bill) * (Number(percentage1) + Number(percentage2))) / 200;
  const total = Number(bill) + tip;
  return (
    <h3>
      You pay ${total} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset() {
  return <button>Reset</button>;
}
