import { Image, List, Rating,Segment,Grid ,Form, Button} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import React, { Component, useEffect ,useState} from 'react';

import Header from '../../common/header';
import Footer from '../../common/footer';
import 'semantic-ui-css/semantic.css';
import axios from 'axios';
import Link from 'next/link';
const baseURL = 'http://localhost:3000/seller/items/';
const Item = () => {

 const [data,setData] = useState(null) 
 const [imageUrl,setImageUrl] = useState(null) 
 const router = useRouter();
 const { id } = router.query;

//  console.log("url",url)
 //let imageUrl = data.image_urls ? data.image_urls[0] : null;
 React.useEffect(() => {
  console.log('reacteffect');
  const url = baseURL + id;
  {id && axios.get(url).then((response) => {
    setData(response.data);
    setImageUrl(response.data?.image_urls[0]);
    //imageUrl = data.image_urls ? data.image_urls[0] : null;
    console.log('response', response.data);
  })}
},id);
  console.log("Dayasudhan",router)

  return (
    <div>
    <Segment>
    <Header />
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
              <a>{data?.name}</a>
            </Link>
            <h1 className="ui header">
              <div href="#" className="header">
                {data?.name}
              </div>
            </h1>

            <br />
            <br />
            <div className="price">
              {data?.description}
              <br />
              Product Code: Product 16
              <br />
              Reward Points: 600 <br />
              Availability: {data?.availability}
              <br />
            </div>
            <Rating icon="star" defaultRating={5} maxRating={5} />
            <h3 className="ui header">
              <div href="#" className="header">
                Rs {data?.price}
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
    <Footer />
  </Segment>
  </div>
  )
}

export default Item;
