import React, {Component} from 'react';
import './PiesListContainer.css';
import PiesList from "./PiesList";
import getPiesOfTheDay from "../api/stores";
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';


class PiesListContainer extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      page: 1,
      stores: []
    };
  }

  componentWillMount() {
    getPiesOfTheDay(1).then(data => {
      this.setState({stores: data});
    });
  }

  handleNext() {
    getPiesOfTheDay(++this.state.page).then(data => {
      this.setState({stores: data});
    });
    this.setState({page: this.state.page++});
  }

  handleBack() {
    getPiesOfTheDay(--this.state.page).then(data => {
      this.setState({stores: data});
    });
    this.setState({page: this.state.page--});
  }

  render() {
    const {stores, page} = this.state;

    return (
      <div className="container">
        <PiesList stores={stores}/>
        <br/>

        <div className="center">
          <Button size="small" onClick={() => this.handleBack()} disabled={page === 1}>
            <KeyboardArrowLeft/>
            Back
          </Button>
          {/*<div className="page-number">*/}
            <Typography variant="body2" style={{display: "contents"}}>
              Page {page}
            </Typography>
          {/*</div>*/}
          <Button size="small" onClick={() => this.handleNext()} disabled={stores.length < 5}>
            Next
            <KeyboardArrowRight/>
          </Button>
        </div>


      </div>
    );
  }
}

export default PiesListContainer;
