import React from 'react';
import ReactDOM from 'react-dom';
import PiesList from "./PiesList";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PiesList
    pies={[
      {
        "id": 1,
        "storeId": 1,
        "displayName": "Beef",
        "quantity": 5,
        "price": 300,
        "priceString": "$3.00",
        "isPieOfTheDay": true,
        "store": {
          "id": 1,
          "displayName": "Eleven-7",
          "address": "410 Collins Street",
          "city": "Melbourne",
          "state": "Victoria",
          "postcode": "3000",
          "mobile": "0481233123",
          "coords": {
            "latitude": "-37.816981",
            "longitude": "144.9584893"
          },
          "rating": 10
        }
      }]
    }
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
