import React from 'react';
import { Grid, Image, Rating, Form } from 'semantic-ui-react';
import Link from 'next/link';
const GridExampleVerticallyDivided = () => (
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="https://demo.opencart.com/image/cache/catalog/demo/macbook_1-500x500.jpg" />
      </Grid.Column>
      <Grid.Column>
        <div>
          <h1 className="ui header">
            <div href="#" className="header">
              MacBook
            </div>
          </h1>

          <br />
          <br />
          <div className="price">
            Brand: Apple
            <br />
            Product Code: Product 16
            <br />
            Reward Points: 600 <br />
            Availability: In Stock
            <br />
          </div>
          <Rating icon="star" defaultRating={5} maxRating={5} />
          <h3 className="ui header">
            <div href="#" className="header">
              Rs 50000
            </div>
            <div className="price">
              <Form.Field>
                <label>Quantity2 </label>
                <input type="number" width={2} max={2} />
              </Form.Field>
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

export default GridExampleVerticallyDivided;
