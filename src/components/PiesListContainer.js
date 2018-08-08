import React, {Component} from 'react';
import './PiesListContainer.css';
import PiesList from "./PiesList";
import getPiesOfTheDay from "../api/stores";


class PiesListContainer extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {stores: []};
  }

  componentWillMount() {
    getPiesOfTheDay(0).then(data => {
      this.setState({stores: data});
    });
  }

  render() {
    const {stores} = this.state;

    return (
      <div className="container">
        <PiesList stores={stores}/>
      </div>
    );
  }
}

export default PiesListContainer;
