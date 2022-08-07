import { React } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <h1 className="title">
      Read{' '}
      <Link href="/ui/carousal">
        <a>Carousal!</a>
      </Link>
    </h1>
  );
};

export default Home;
