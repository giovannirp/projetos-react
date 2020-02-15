import React, { Fragment, Component } from 'react';
import LinkWrapper from '../Utils/LinkWrarpper';

const Header = () => {
    return (
        <Fragment>
            <nav>
                <div className="container">
                    <div class="nav-wrapper">
                        <LinkWrapper to='/' className="brand-logo" activeStyle={{}}>Logo</LinkWrapper>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <LinkWrapper to='/curso'>Curso</LinkWrapper>
                            </li>
                            <li>
                                <LinkWrapper to='/sobre'>Sobre</LinkWrapper>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;