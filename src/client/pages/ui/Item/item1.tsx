import React from 'react';
//import './Item1.scss';
import { Image, List, Rating, Icon } from 'semantic-ui-react';

const Item1 = () => (
  <div className="product-grid5">
    <div className="product-image5">
      <Image
        className="pic-1"
        src="https://semantic-ui.com/images/wireframe/image.png"
        size="medium"
        as="a"
        href="#"
      />

      <Image
        className="pic-2"
        src="https://semantic-ui.com/images/wireframe/image.png"
        size="medium"
        as="a"
        href="#"
      />

      <span className="product-new-label">New</span>
    </div>
    <List className="social">
      <List.Item as="li">
        <Icon circular name="eye" size="large" />
      </List.Item>
      <List.Item as="li">
        <Icon circular name="heart" size="large" />
      </List.Item>
      <List.Item as="li">
        <Icon circular name="cart arrow down" size="large" />
      </List.Item>
    </List>

    <div className="product-content">
      <h3 className="ui header">
        Text 1
        <div href="#" className="sub header">
          Text 2
        </div>
      </h3>
      <Rating icon="star" defaultRating={5} maxRating={5} />
      <br />
      <br />
      <div className="price1">
        $11.00
        <span>$14.00</span>
      </div>
    </div>
  </div>
);

export default Item1;
