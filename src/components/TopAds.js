import React from 'react';
import {Navbar} from 'react-bootstrap';

export default function TopAds () {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Enjoy an extra 20% off
          select sales products.

        </Navbar.Brand>
      </Navbar>
    </React.Fragment>
  );
}
