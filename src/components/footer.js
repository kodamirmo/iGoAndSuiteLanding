
import React from 'react'
import { Grid } from '@material-ui/core'
// import LanguageMenu from './languageMenu'
import logo from '../images/logo-suite.png'
import EmailIcon from '@material-ui/icons/Email'

const Footer = (props) => {
  const { trans } = props;
  return (
    <footer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <img src={logo} alt="iGo&Suite" className="logoFooter" />
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3>{trans.company}</h3>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>
                <a href="https://blog.igoandsee.com/en/" target="_blank" rel="noreferrer">
                  {trans.blog}
                </a>
              </p>
              <p>
                <a href="https://www.igoandsee.com/privacyPolicy" target="_blank" rel="noreferrer">
                  {trans.privacy}
                </a>
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>{trans.support}</p>
              <p>
                {trans.contact}<br />
                <span>
                  <EmailIcon />{''}
                  <a href="mailto:xiara.sanchez@goandsee.co" rel="noreferrer">
                    xiara.sanchez@goandsee.co
                  </a>
                </span>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <p>©iGo&See</p>
          </Grid>
          {/* <Grid item xs={6} className="languageFooter">
            {trans.language}
            <LanguageMenu />
          </Grid> */}
        </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;
