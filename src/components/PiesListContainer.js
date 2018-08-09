import React, {Component} from 'react';
import './PiesListContainer.css';
import PiesList from "./PiesList";
import getPiesOfTheDay from "../api/stores";
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar';
import Grid from '@material-ui/core/Grid';
import UpArrow from '@material-ui/icons/ArrowDropUp';
import DownArrow from '@material-ui/icons/ArrowDropDown';
import Snackbar from '@material-ui/core/Snackbar';


class PiesListContainer extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      page: 1,
      pies: [],
      searchText: '',
      sortOrder: '',
      error: '',
      openError: false,
      isMounted: true
    };
  }

  componentWillMount() {
    getPiesOfTheDay(1).then(data => {
      if (this.state.isMounted) {
        if (data instanceof Error) this.setState({openError: true, error: data.toString()});
        else this.setState({pies: data});
      }
    });
    this.setState({
      isMounted: true,
    });
  }

  componentWillUnmount() {
    this.setState({
      isMounted: false,
    })
  }

  handleNewPage(isNextPage) {
    let newPage = this.state.page;
    isNextPage ? newPage++ : newPage--;
    getPiesOfTheDay(newPage, this.state.searchText, this.state.sortOrder).then(data => {
      if (this.state.isMounted) {
        if (data instanceof Error) this.setState({openError: true, error: data.toString()});
        else this.setState({pies: data, openError: false, page: newPage});
      }
    });
  }

  handleSearch(searchText) {
    getPiesOfTheDay(1, searchText, this.state.sortOrder).then(data => {
      if (this.state.isMounted) {
        if (data instanceof Error) this.setState({openError: true, error: data.toString()});
        else this.setState({pies: data});
      }
    });
    this.setState({searchText: searchText, page: 1, openError: false});
  }

  handleSort() {
    let newOrder = 'asc';
    if (this.state.sortOrder && this.state.sortOrder === 'asc') newOrder = 'desc';

    getPiesOfTheDay(1, this.state.searchText, newOrder).then(data => {
      if (this.state.isMounted) {
        if (data instanceof Error) this.setState({openError: true, error: data.toString()});
        else this.setState({pies: data});
      }
    });
    this.setState({page: 1, sortOrder: newOrder, openError: false});
  }

  render() {
    const {pies, page, sortOrder, error, openError} = this.state;

    return (
      <div className="container">

        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => this.handleSort()}>
              Sort by price
              {sortOrder === 'asc' && <DownArrow/>}
              {sortOrder === 'desc' && <UpArrow/>}
            </Button>
          </Grid>
          <Grid item xs={8}>
            <SearchBar
              onRequestSearch={(text) => this.handleSearch(text)}
              className="search-bar"
            />
          </Grid>
        </Grid>

        <br/><br/>

        <PiesList pies={pies}/>
        <br/>

        <div className="center">
          <Button size="small" onClick={() => this.handleNewPage(0)} disabled={page === 1}>
            <KeyboardArrowLeft/>
            Back
          </Button>
          {/*<div className="page-number">*/}
          <Typography variant="body2" style={{display: "contents"}}>
            Page {page}
          </Typography>
          {/*</div>*/}
          <Button size="small" onClick={() => this.handleNewPage(1)} disabled={pies.length < 5}>
            Next
            <KeyboardArrowRight/>
          </Button>
        </div>

        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={openError}
          message={<span id="message-id">{error}</span>}
          autoHideDuration={3000}
        />


      </div>
    );
  }
}

export default PiesListContainer;
