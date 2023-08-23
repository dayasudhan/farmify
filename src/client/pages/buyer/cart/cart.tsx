import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ImageCarousel from '../landing/carousal';
import Header from '../../common/header';
import Header2 from '../../common/header2';
import Footer from '../../common/footer';
import 'semantic-ui-css/semantic.css';
import Table from './table';

export default class Cart extends Component {
  render() {
    return (
      <Segment>
        <Header />
        <Table />
        <Footer />
      </Segment>
    );
  }
}
