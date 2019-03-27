import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Link, Router, Route } from 'react-router-dom';
import OrderHistory from "./orderHistory";
import AddressForm from "./order_info";
import Map from "./map";

const HelloTest = () => {
  return (
  <React.Fragment>
        <h1 align="center">Welcome Restaurant</h1>

  <hr size="100px"/>
  <CardActions style={{justifyContent: 'center'}}>
    <Button component={Link} to="/orderHistory">
      Order History
    </Button>
    <Button component={Link} to="/place_order">
      Place Order
    </Button>
    <Button component={Link} to="/map">
      Restaurant Location
    </Button>
    </CardActions>
  </React.Fragment>
  );
}

export default HelloTest;
