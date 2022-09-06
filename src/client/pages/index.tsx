import { React } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <h1 className="title">
      Read{' '}
      <Link href="/buyer/landing/landing">
        <a>Buyer!</a>
      </Link>
      <Link href="/seller/home">
        <a>Seller!</a>
      </Link>
    </h1>
  );
};

export default Home;
