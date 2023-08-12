import { ReactElement } from 'react';
import Banner from '../banner/banner';

export default function Navbar(): ReactElement {
  return (
    <div className="navbar">
      <a href="/">
        <Banner />
      </a>
    </div>
  );
}
