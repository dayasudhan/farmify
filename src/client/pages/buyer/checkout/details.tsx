import React from 'react';
import { Segment, Input, Label, Form } from 'semantic-ui-react';

const SegmentExampleNestedSegments = () => (
  <Segment.Group>
    <Segment.Group horizontal>
      <Segment>
        Your Payment Details
        <Segment.Group>
          <Segment>
            <Form.Field>
              <Label>Name</Label>
              <Input focus placeholder="Search..." />
            </Form.Field>
          </Segment>
          <Segment>
            <Form.Field>
              <Label pointing="below">Please enter a value</Label>
              <Input type="text" placeholder="Last Name" />
            </Form.Field>
          </Segment>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
        </Segment.Group>
      </Segment>
      <Segment>
        Payment Method
        <Segment.Group>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
        </Segment.Group>
      </Segment>
    </Segment.Group>
    <Segment.Group horizontal>
      <Segment>
        Delivery Address
        <Segment.Group>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
        </Segment.Group>
      </Segment>
      <Segment>
        Shipping Method
        <Segment.Group>
          <Segment>Middle</Segment>
          <Segment>Middle</Segment>
        </Segment.Group>
      </Segment>
    </Segment.Group>
  </Segment.Group>
);

export default SegmentExampleNestedSegments;
