import './styles.css';
import { useState } from 'react';

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  return (
    <>
      <BillInput />
      <SelectPercentage>How did you like the Service?</SelectPercentage>
      <SelectPercentage>How did your friend like the Service?</SelectPercentage>
      <Output />
      <Reset />
    </>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill? </label>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children} </label>
      <select>
        <option value="0">Dissastisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h3>You pay X ($A + $B tip)</h3>;
}

function Reset() {}
