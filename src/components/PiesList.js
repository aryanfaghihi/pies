import React, {Component} from 'react';
import './PiesListContainer.css';
import Grid from '@material-ui/core/Grid';
import PieCard from "./PieCard";


class PiesList extends Component {
  render() {
    const {stores} = this.props;

    return (
      <Grid container spacing={24}>
        {
          stores.map((store) => {
            let pie = store.pie;
            return (
              <Grid item xs={4}>
                <PieCard
                  name={pie.displayName}
                  storeName={store.displayName}
                  quantity={pie.quantity}
                  price={pie.priceString}
                  phone={store.mobile}
                  address={store.address}
                  lat={store.coords.latitude}
                  long={store.coords.longitude}
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

export default PiesList;
