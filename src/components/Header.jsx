import React from 'react';
import { images } from '../constants';

const Header = () => {
  return (
    <section>
      <header>
        <div>
          <img src={images.logo} alt="logo-placeholder" />
        </div>
        <div></div>
      </header>
    </section>
  )
}

export default Header
