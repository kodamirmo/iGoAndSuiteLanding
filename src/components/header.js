import React, { Component } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import logoH from '../images/logo-suite-h.png'

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
    const { btnTitle } = this.props;

    return (
      <AppBar id="navbar">
        <Toolbar>
          <img src={logoH} edge="start" color="inherit" aria-label="menu" />
          <Button variant="contained" className="btn-main">
            {btnTitle}
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
