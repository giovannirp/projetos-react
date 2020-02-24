import React, { Fragment, Component } from 'react';
import LinkWrapper from '../Utils/LinkWrarpper';

const Header = () => {
    return (
        <Fragment>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <LinkWrapper to='/' className="brand-logo" activeStyle={{}}>Logo</LinkWrapper>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <LinkWrapper to='/curso'><i className="material-icons left">desktop_mac</i>Curso</LinkWrapper>
                            </li>
                            <li>
                                <LinkWrapper to='/sobre'><i className="material-icons left">assignment_ind</i>Sobre</LinkWrapper>
                            </li>
                            <li>
                                <LinkWrapper to='/cadastro'><i className="material-icons left">control_point</i>Cadastro</LinkWrapper>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;