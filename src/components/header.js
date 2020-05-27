import React, { Component } from 'react'
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

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
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Init</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
