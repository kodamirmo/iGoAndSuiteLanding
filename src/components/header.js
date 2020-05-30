import React, { Component } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import logoH from '../images/logo-suite-h.png'
import BtnDemonstration from './btnDemonstration';

class Header extends Component {
  constructor (props) {
    super(props);

    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
          || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
          || (prevScrollpos <= 0 && currentScrollPos <= 0)
          ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }

  render() {

    return (
      <AppBar id="navbar">
        <Toolbar>
          <img src={logoH} alt="iGo&Suite" />
          <Button variant="contained" className="btn-main">
            <BtnDemonstration />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
