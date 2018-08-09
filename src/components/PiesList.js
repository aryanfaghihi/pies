import React, {Component} from 'react';
import './PiesListContainer.css';
import Grid from '@material-ui/core/Grid';
import PieCard from "./PieCard";
import PropTypes from 'prop-types';


class PiesList extends Component {
  render() {
    const {pies} = this.props;

    return (
      <Grid container spacing={24}>
        {
          pies.map((pie, i) => {
            let store = pie.store;
            return (
              <Grid item xs={4} key={i}>
                <PieCard
                  name={pie.displayName}
                  storeName={store.displayName}
                  quantity={pie.quantity}
                  price={pie.priceString}
                  phone={store.mobile}
                  address={store.address}
                  lat={Number(store.coords.latitude)}
                  long={Number(store.coords.longitude)}
                  rating={store.rating / 2}
                />
              </Grid>
            )
          })
        }
      </Grid>
    );
  }
}


PiesList.propTypes = {
  pies: PropTypes.array
};


export default PiesList;
