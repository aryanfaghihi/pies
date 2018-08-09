import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import PiesListContainer from "./components/PiesListContainer";


class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <span role="img" aria-label="pie">🥧</span> Pie of the Day <span role="img" aria-label="pie">🥧</span>
            </Typography>
          </Toolbar>
        </AppBar>

        <PiesListContainer />
      </div>
    );
  }
}

export default App;
