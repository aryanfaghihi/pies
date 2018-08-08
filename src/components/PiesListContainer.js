import React, {Component} from 'react';
import './PiesListContainer.css';
import PiesList from "./PiesList";


class PiesListContainer extends Component {
  render() {
    return (
      <div className="container">
        <PiesList pies={[1,1,1]}/>
      </div>
    );
  }
}

export default PiesListContainer;
