import React from 'react';
import ReactDOM from 'react-dom';
import PieCard from "./PieCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PieCard
    name="Pie"
    storeName="Pie Store"
    quantity={10}
    price="$1000000"
    phone="329032"
    address="Nutella House"
    lat={3891283091283}
    long={-390130932}
    rating={10}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
