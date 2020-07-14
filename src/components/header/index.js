import React from "react";
import { HeaderContainer } from './style'


const Header = () => (
    <HeaderContainer>
      <header className="header">
          <h2 className="header__title">
            REACT<span className="header__orange">JS</span>
          </h2>
      </header>
    </HeaderContainer>
);

export default Header;
