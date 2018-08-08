import React, {Component} from 'react';
import './PiesListContainer.css';
import Grid from '@material-ui/core/Grid';
import PieCard from "./PieCard";


class PiesList extends Component {
  render() {
    const {pies} = this.props;

    return (
      <Grid container spacing={24}>
        {
          pies.map((item) => {
            return (
              <Grid item xs={4}>
                <PieCard
                  name="Beef and Chicken"
                  storeName="Brian's Pies"
                  quantity={24}
                  price={230}
                  phone="0431031609"
                  address="366 Lonsdale Street"
                  lat={-37.8128448}
                  long={144.9604634}
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
