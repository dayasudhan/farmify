import React from 'react';
import { Image, Segment, Container } from 'semantic-ui-react';
const imageUrls = [
  'https://kisanadda.s3.ap-south-1.amazonaws.com/thumbnail-727480561-1692988538613-.jpeg',
  'https://kisanadda.s3.ap-south-1.amazonaws.com/thumbnail-293414261-1692988555040-.jpeg'
];
const ImageGallery = () => {
  return (
    <Container>
      <Segment style={{ overflow: 'auto', maxHeight: '400px' }}>
        {imageUrls.map((url, index) => (
          <Image key={index} src={url} size="medium" style={{ marginBottom: '10px' }} />
        ))}
      </Segment>
    </Container>
  );
};

export default ImageGallery;
