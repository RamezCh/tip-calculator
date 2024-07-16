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

function BillInput() {}

function SelectPercentage() {}

function Output() {}

function Reset() {}
