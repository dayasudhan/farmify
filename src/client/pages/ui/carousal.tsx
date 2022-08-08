import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'semantic-ui-carousel-react';
import { Image, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Link from 'next/link';
const App = () => {
  let elements = [
    {
      render: () => {
        return (
          <Image src="https://i.pinimg.com/originals/09/6d/f0/096df0eb195b8f0d9475924f9a1e9425.jpg" />
        );
      },
    },
    {
      render: () => {
        return <Image src="https://i.imgur.com/0eRe75Y.jpg" />;
      },
    },
    {
      render: () => {
        return (
          <Image src="https://flipwallpapers.com/wallpapers/anime-wallpaper-hd-resolution-For-desktop-Wallpaper.jpg" />
        );
      },
    },
  ];
  return (
    <div style={{ width: 500 }}>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Carousel
        elements={elements}
        duration={3000}
        animation="slide left"
        showNextPrev={false}
        showIndicators={true}
      />
    </div>
  );
};
export default App;
