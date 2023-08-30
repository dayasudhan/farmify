import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ImageCarousel from './carousal';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Items from './items';
import 'semantic-ui-css/semantic.css';
// import './Header.scss';

export default class Landing extends Component {
  render() {
    return (
      <Segment>
        <Header />
        <Items />
        <Footer />
      </Segment>
    );
  }
}
