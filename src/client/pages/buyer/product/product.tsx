import React, { Component, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import ImageCarousel from '../landing/carousal';
import Header from '../landing/header';
import Header2 from '../landing/header2';
import Footer from '../landing/footer';
import Items from './Items';
import Item2 from './Item2';
import 'semantic-ui-css/semantic.css';
import { withRouter, NextRouter } from 'next/router';
import axios from 'axios';
// import './Header.scss';

interface WithRouterProps {
  router: NextRouter;
}
interface MyComponentProps extends WithRouterProps {}
const baseURL = 'http://localhost:3000/menuid?id=';
class Product extends Component<MyComponentProps> {
  constructor(props) {
    super(props);
    this.state = { menu: '' };
  }
  componentDidMount() {
    setTimeout(() => {
      const finalURL = baseURL + this.props.router.query.id;
      console.log('reacteffect', finalURL);
      axios.get(finalURL).then((response) => {
        console.log('response product', response.data);
        this.setState({ menu: response.data });
        // console.log('response state', this.state);
      });
    }, 5000);
  }

  render() {
    return (
      <Segment>
        <Header />
        <Item2 data={this.state} />
        <Footer />
      </Segment>
    );
  }
}
export default withRouter(Product);
