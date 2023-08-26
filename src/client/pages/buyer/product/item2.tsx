import React from 'react';
import { Grid, Image, Rating, Form, Button } from 'semantic-ui-react';
import Link from 'next/link';
import Cart from './../cart/cart';
const GridExampleVerticallyDivided = (props) => {
  console.log("props",props);
  const imageUrl = props.data.item.image_urls ? props.data.item.image_urls[0] : null;
  // console.log("imageUrl",imageUrl,props.data.item.image_urls);
  // const [prd, setPrd] = React.useState(props);
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          {imageUrl && (
            <Image src={imageUrl} />
          )}
        </Grid.Column>
        <Grid.Column>
          <div>
            <Link href="/buyer/cart/cart">
              <a>{props.data.name}</a>
            </Link>
            <h1 className="ui header">
              <div href="#" className="header">
                {props.data.item.name}
              </div>
            </h1>

            <br />
            <br />
            <div className="price">
              {props.data.item.description}
              <br />
              Product Code: Product 16
              <br />
              Reward Points: 600 <br />
              Availability: {props.data.item.availability}
              <br />
            </div>
            <Rating icon="star" defaultRating={5} maxRating={5} />
            <h3 className="ui header">
              <div href="#" className="header">
                Rs {props.data.item.price}
              </div>
              <br />
              <div className="price">
                <Form.Field>
                  <label>Quantity</label>
                  <input type="number" width={2} max={2} />
                </Form.Field>
              </div>
              <br />
              <div>
                <a href="/buyer/cart/cart">
                  <Button primary>Buy1</Button>
                </a>
              </div>
            </h3>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default GridExampleVerticallyDivided;
