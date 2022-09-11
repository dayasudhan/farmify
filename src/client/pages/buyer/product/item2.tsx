import React from 'react';
import { Grid, Image, Rating, Form, Button } from 'semantic-ui-react';
import Link from 'next/link';
const GridExampleVerticallyDivided = (props) => {
  const [prd, setPrd] = React.useState(props);
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src={props.data.menu.logo} />
        </Grid.Column>
        <Grid.Column>
          <div>
            <Link href="/buyer/cart/cart">
              <a>{props.data.name}</a>
            </Link>
            <h1 className="ui header">
              <div href="#" className="header">
                {props.data.menu.name}
              </div>
            </h1>

            <br />
            <br />
            <div className="price">
              {props.data.menu.description}
              <br />
              Product Code: Product 16
              <br />
              Reward Points: 600 <br />
              Availability: {props.data.menu.availability}
              <br />
            </div>
            <Rating icon="star" defaultRating={5} maxRating={5} />
            <h3 className="ui header">
              <div href="#" className="header">
                Rs {props.data.menu.price}
              </div>
              <br />
              <div className="price">
                <Form.Field>
                  <label>Quantity2 </label>
                  <input type="number" width={2} max={2} />
                </Form.Field>
              </div>
              <br />
              <div>
                <Button primary>Buy</Button>
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
