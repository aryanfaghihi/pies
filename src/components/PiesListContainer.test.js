import React from 'react';
import ReactDOM from 'react-dom';
import PiesListContainer from "./PiesListContainer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PiesListContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
