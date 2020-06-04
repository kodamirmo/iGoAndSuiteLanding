import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@material-ui/core'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import logoH from '../images/logo-suite-h.png'
import BtnDemonstration from './btnDemonstration';
import LanguageMenu from './languageMenu'
import MoreVertIcon from '@material-ui/icons/MoreVert'

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

          <div className="d-none d-md-block d-lg-block d-xl-block">
            <div className="content-desktop">
              <div className="language-header">
                <LanguageMenu />
              </div>
              <Button variant="contained" className="btn-main">
                <BtnDemonstration />
              </Button>
            </div>
          </div>

          <div className="d-block d-md-none d-lg-none d-xl-none">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" className="btn-movilMenu" {...bindTrigger(popupState)}>
                    <MoreVertIcon />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem>
                      <LanguageMenu />
                    </MenuItem>
                    <MenuItem>
                      <Button variant="contained" className="btn-main">
                        <BtnDemonstration />
                      </Button>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
