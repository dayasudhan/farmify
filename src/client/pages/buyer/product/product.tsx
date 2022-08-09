import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ImageCarousel from '../landing/carousal';
import Header from '../landing/header';
import Header2 from '../landing/header2';
import Footer from '../landing/footer';
import Items from './Items';
import Item2 from './Item2';
import 'semantic-ui-css/semantic.css';
// import './Header.scss';

export default class Product extends Component {
  render() {
    return (
      <Segment>
        <Header />
        <Item2 />
        <Footer />
      </Segment>
    );
  }
}
