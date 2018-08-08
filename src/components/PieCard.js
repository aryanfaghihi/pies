import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import PhoneIcon from '@material-ui/icons/Phone'
import AddressIcon from '@material-ui/icons/Place'
import ReactMapGL, {Marker} from 'react-map-gl';
import Chip from '@material-ui/core/Chip';


class PieCard extends Component {
  render() {
    const {name, price, quantity, storeName, phone, address, lat, long, rating} = this.props;
    const quantityColor = quantity > 3 ? "default" : "secondary";

    return (
      <Card>
        <CardContent>

          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="title">
                {name}
              </Typography>
            </Grid>
            <Grid item xs={6} style={{textAlign: 'right'}}>
              <Chip
                label={`${quantity} left`}
                color={quantityColor}
                style={{marginRight: 5}}
              />

              <Chip
                label={price}
                color="primary"
              />
            </Grid>
          </Grid>

          <br/>

          <Grid container alignItems="center">

            <Grid item xs={6}>
              <Typography variant="subheading">
                {storeName}
              </Typography>
            </Grid>

            <Grid item xs={6} style={{textAlign: 'right'}}>
              <StarRatings
                rating={rating}
                starDimension="22px"
                starSpacing="2px"
                starRatedColor="#FFD700"
              />
            </Grid>
          </Grid>
          <br/>

          <Grid container alignItems="center">
            <Grid item>
              <PhoneIcon style={{color: 'grey', width: 20}}/>
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{marginBottom: 5, marginLeft: 10}}>
                {phone}
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" style={{marginBottom: 10}}>
            <Grid item>
              <AddressIcon style={{color: 'grey', width: 20}}/>
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{marginBottom: 5, marginLeft: 10}}>
                {address}
              </Typography>
            </Grid>
          </Grid>

          <ReactMapGL
            width={320}
            height={200}
            latitude={lat}
            longitude={long}
            zoom={13}
            mapboxApiAccessToken="pk.eyJ1IjoiYXJ5YW5mYWdoaWhpIiwiYSI6ImNqa2pua2FhajV4OXIzcW1sNWlxenhwZHMifQ.aAGNQS-uPFWc7aGtdUBjMw"
          >
            <Marker latitude={lat} longitude={long}>
              <AddressIcon/>
            </Marker>
          </ReactMapGL>

        </CardContent>
      </Card>
    );
  }
}

export default PieCard;
