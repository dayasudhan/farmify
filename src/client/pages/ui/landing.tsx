import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ImageCarousel from './carousal';
import Header from './Header/header';
import Footer from './Footer/footer';
import Items from './Item/index';
import 'semantic-ui-css/semantic.css';
// import './Header.scss';

export default class Landing extends Component {
  render() {
    return (
      <Segment>
        <Header />
        <ImageCarousel />
        <Items />
        <Footer />
      </Segment>
    );
  }
}
