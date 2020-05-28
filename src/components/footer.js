
import React from 'react'
import { Grid } from '@material-ui/core'
import LanguageMenu from './languageMenu'
import logo from '../images/logo-suite.png'

const Footer = (props) => {
  const { company, blog, support, privacy } = props;
  return (
    <footer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <img src={logo} alt="iGo&Suite" className="logoFooter" />
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3>{company}</h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <p>{blog}</p>
            </Grid>
            <Grid item xs={12} md={4}>
              <p>{support}</p>
            </Grid>
            <Grid item xs={12} md={4}>
              <p>{privacy}</p>
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
          <Grid item xs={6} className="languageFooter">
            <LanguageMenu />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;
