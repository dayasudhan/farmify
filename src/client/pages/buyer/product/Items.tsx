import React from 'react';
import Item from './Item';
import { Grid, Segment } from 'semantic-ui-react';

const Items = () => (
  <Segment>
    <Segment inverted color="teal" textAlign="left">
      Category 1
    </Segment>
    <Grid Doubling container columns={3}>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Item />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Items;
