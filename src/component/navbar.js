import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class navbar extends Component {
    render() {
        return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" id="oke">
    <img className="baba" src={require('../images/Logo Baba Studio_Putih (169x32).png')}/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link text-white" href="#"><Icon className="iya">view_comfy</Icon>Categories<span className="sr-only">(current)</span></a>
        </li>
      </ul>
          
      <ul className="nav justify-content-between">
       <li className="nav-item">
        <form className="form-inline kotak">
          <input className="form-control mr-sm-2" type="search" placeholder="Search for Courses..." aria-label="Search" id="search"/>
          <Icon className="sip">search</Icon>
        </form>
       </li>
     </ul>
     
      <ul className="nav ml-auto">
            <a className="nav-link text-white" href="#">Techfor Community</a>
            <a className="nav-link text-white" href="#"><Icon>shopping_cart</Icon></a>
            <a className="nav-link text-white bulet" href="#">Login</a>
            <a className="nav-link text-white" href="#">Sign up</a>
          
      </ul>
     
    </div>
</nav>
        )
    }}

    export default navbar;