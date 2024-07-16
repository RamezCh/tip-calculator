import './styles.css';
import { useState } from 'react';

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  return (
    <>
      <BillInput />
      <SelectPercentage />
      <SelectPercentage />
      <Output />
      <Reset />
    </>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage() {}

function Output() {}

function Reset() {}
